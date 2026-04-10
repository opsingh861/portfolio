import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { portfolioConfig } from "@/portfolio.config";

const TO_EMAIL = portfolioConfig.meta.email;

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null);
  if (!body || typeof body.email !== "string") {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const email = body.email.slice(0, 200).trim();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  }

  const utmParams = typeof body.utmParams === "object" && body.utmParams !== null
    ? body.utmParams as Record<string, string>
    : {};

  const lines = [
    `Email: ${email}`,
    ``,
    `--- Traffic Source ---`,
    `UTM Source:   ${utmParams.utm_source ?? "—"}`,
    `UTM Medium:   ${utmParams.utm_medium ?? "—"}`,
    `UTM Campaign: ${utmParams.utm_campaign ?? "—"}`,
    `UTM Content:  ${utmParams.utm_content ?? "—"}`,
    ``,
    `Time: ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })} IST`,
  ];

  if (!process.env.RESEND_API_KEY) {
    console.log("[analytics/lead] New lead:", email);
    return NextResponse.json({ ok: true });
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({
      from: "Portfolio Analytics <onboarding@resend.dev>",
      to: TO_EMAIL,
      subject: `New Lead from Portfolio: ${email}`,
      text: lines.join("\n"),
    });
  } catch (err) {
    console.error("[analytics/lead] email error:", err);
  }

  return NextResponse.json({ ok: true });
}
