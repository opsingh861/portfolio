import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { portfolioConfig } from "@/portfolio.config";

const TO_EMAIL = portfolioConfig.meta.email;

// In-memory rate limiting: IP -> last notification timestamp (resets on cold start)
const rateLimitMap = new Map<string, number>();
const RATE_LIMIT_MS = 30 * 60 * 1000; // 30 minutes

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null);
  if (!body || typeof body !== "object") {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  // Extract visitor info from Vercel edge headers
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  const city = req.headers.get("x-vercel-ip-city")
    ? decodeURIComponent(req.headers.get("x-vercel-ip-city")!)
    : "Unknown";
  const country = req.headers.get("x-vercel-ip-country") ?? "Unknown";
  const region = req.headers.get("x-vercel-ip-country-region") ?? "";
  const userAgent = req.headers.get("user-agent") ?? "Unknown";

  // Rate limit: skip email if same IP notified within the last 30 min
  const now = Date.now();
  const lastSent = rateLimitMap.get(ip);
  if (lastSent && now - lastSent < RATE_LIMIT_MS) {
    return NextResponse.json({ ok: true, skipped: true });
  }
  rateLimitMap.set(ip, now);

  const {
    page = "/",
    referrer = "",
    utmParams = {},
    screenSize = "",
    timestamp = new Date().toISOString(),
  } = body;

  const utmSource: string = utmParams.utm_source ?? "";
  const utmCampaign: string = utmParams.utm_campaign ?? "";
  const utmMedium: string = utmParams.utm_medium ?? "";
  const utmContent: string = utmParams.utm_content ?? "";

  const location = [city, region, country].filter(Boolean).join(", ");
  const sourceLabel = utmSource || referrer || "Direct";
  const subject = `Portfolio Visitor: ${location} via ${sourceLabel}${utmCampaign ? ` (${utmCampaign})` : ""}`;

  const visitTime = (() => {
    try {
      return new Date(timestamp as string).toLocaleString("en-IN", {
        timeZone: "Asia/Kolkata",
      });
    } catch {
      return timestamp as string;
    }
  })();

  const lines = [
    `Time: ${visitTime} IST`,
    ``,
    `--- Location ---`,
    `City:    ${city}`,
    `Region:  ${region || "—"}`,
    `Country: ${country}`,
    `IP:      ${ip}`,
    ``,
    `--- Traffic Source ---`,
    `Referrer:     ${referrer || "Direct / No referrer"}`,
    `UTM Source:   ${utmSource || "—"}`,
    `UTM Medium:   ${utmMedium || "—"}`,
    `UTM Campaign: ${utmCampaign || "—"}`,
    `UTM Content:  ${utmContent || "—"}`,
    ``,
    `--- Browser ---`,
    `User Agent: ${userAgent}`,
    `Screen:     ${screenSize || "—"}`,
    `Page:       ${page}`,
  ];

  if (!process.env.RESEND_API_KEY) {
    // In dev, log to console instead of sending email
    console.log("[analytics/track]", subject, "\n", lines.join("\n"));
    return NextResponse.json({ ok: true });
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({
      from: "Portfolio Analytics <onboarding@resend.dev>",
      to: TO_EMAIL,
      subject,
      text: lines.join("\n"),
    });
  } catch (err) {
    console.error("[analytics/track] email error:", err);
  }

  return NextResponse.json({ ok: true });
}
