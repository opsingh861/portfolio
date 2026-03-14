"use client";

interface SkillPillProps {
  skill: string;
  accent?: boolean;
}

export default function SkillPill({ skill, accent = false }: SkillPillProps) {
  return (
    <span
      className="inline-flex items-center px-3 py-1 rounded-sm text-xs font-mono transition-all duration-200 border cursor-default select-none"
      style={{
        background: accent ? "rgba(0,255,135,0.08)" : "rgba(255,255,255,0.06)",
        borderColor: accent ? "rgba(0,255,135,0.25)" : "rgba(255,255,255,0.12)",
        color: accent ? "var(--accent)" : "#9ba3b2",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget;
        el.style.borderColor = "rgba(0,255,135,0.4)";
        el.style.color = "var(--text-primary)";
        el.style.background = "rgba(0,255,135,0.08)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget;
        el.style.borderColor = accent ? "rgba(0,255,135,0.25)" : "rgba(255,255,255,0.12)";
        el.style.color = accent ? "var(--accent)" : "#9ba3b2";
        el.style.background = accent ? "rgba(0,255,135,0.08)" : "rgba(255,255,255,0.06)";
      }}
    >
      {skill}
    </span>
  );
}
