import { NextRequest, NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";
import { portfolioConfig } from "@/portfolio.config";

const client = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

// Build the system prompt from portfolio config
function buildSystemPrompt(): string {
  const { meta, about, experience, projects, skills, achievements, education } = portfolioConfig;

  return `You are a helpful AI assistant representing ${meta.name}, a ${meta.title} based in ${meta.location}.
Your job is to answer questions from recruiters and developers about Aditya's background, skills, and experience.
Be concise, accurate, and professional. Use first person when referring to Aditya ("he", "his"). Do not make up information not present below.

--- ABOUT ---
${about.bio}

--- EXPERIENCE ---
${experience.map((e) => `${e.role} at ${e.company} (${e.period}, ${e.type})\n${e.bullets.join("\n")}`).join("\n\n")}

--- PROJECTS ---
${projects.map((p) => `${p.title}: ${p.description}\nStack: ${p.stack.join(", ")}`).join("\n\n")}

--- SKILLS ---
${Object.entries(skills).map(([cat, items]) => `${cat}: ${items.join(", ")}`).join("\n")}

--- ACHIEVEMENTS ---
${achievements.map((a) => `${a.title} (${a.year}): ${a.description}`).join("\n")}

--- EDUCATION ---
${education.map((e) => `${e.degree}, ${e.institution} (${e.period}), GPA: ${e.gpa}`).join("\n")}

--- CONTACT ---
Email: ${meta.email}
LinkedIn: ${meta.linkedin}
GitHub: ${meta.github}

Answer questions about Aditya's technical skills, work history, and projects. If asked anything unrelated to Aditya's professional profile, redirect politely.`;
}

export async function POST(req: NextRequest) {
  if (!process.env.ANTHROPIC_API_KEY) {
    return NextResponse.json({ error: "AI chat not configured" }, { status: 503 });
  }

  const body = await req.json().catch(() => null);
  if (!body || typeof body.message !== "string" || body.message.trim().length === 0) {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  // Sanitize input length — prevent abuse
  const userMessage = body.message.slice(0, 1000);

  try {
    const message = await client.messages.create({
      model: "claude-haiku-4-5",
      max_tokens: 512,
      system: buildSystemPrompt(),
      messages: [{ role: "user", content: userMessage }],
    });

    const text = message.content
      .filter((block) => block.type === "text")
      .map((block) => (block as { type: "text"; text: string }).text)
      .join("");

    return NextResponse.json({ reply: text });
  } catch (err) {
    console.error("AI chat error:", err);
    return NextResponse.json({ error: "Failed to get AI response" }, { status: 500 });
  }
}
