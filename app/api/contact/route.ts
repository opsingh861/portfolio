import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const TO_EMAIL = "opsingh861@gmail.com";

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null);
  if (
    !body ||
    typeof body.name !== "string" ||
    typeof body.email !== "string" ||
    typeof body.message !== "string"
  ) {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const name = body.name.slice(0, 200).trim();
  const email = body.email.slice(0, 200).trim();
  const message = body.message.slice(0, 2000).trim();

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  }

  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json({ ok: true });
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: TO_EMAIL,
      subject: `Portfolio contact from ${name}`,
      text: `From: ${name} <${email}>\n\n${message}`,
    });
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Email send error:", err);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
