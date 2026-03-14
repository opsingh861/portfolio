"use client";

export interface ProjectCardProps {
  title: string;
  subtitle: string;
  description: string;
  stack: string[];
  github: string;
  live?: string;
  featured?: boolean;
  period: string;
}

export default function ProjectCard({
  title,
  subtitle,
  description,
  stack,
  github,
  live,
  featured,
  period,
}: ProjectCardProps) {
  return (
    <div
      className={`group relative flex flex-col h-full rounded-sm border ${featured ? 'p-8' : 'p-6'} transition-all duration-300`}
      style={{
        background: featured ? "var(--surface-2)" : "var(--surface)",
        borderColor: "var(--border)",
        ...(featured ? { borderLeft: "2px solid var(--accent)" } : {}),
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget;
        el.style.borderColor = "rgba(0,255,135,0.3)";
        el.style.boxShadow = "0 0 30px rgba(0,255,135,0.08)";
        el.style.transform = "translateY(-2px)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget;
        el.style.borderColor = "var(--border)";
        el.style.boxShadow = "";
        el.style.transform = "";
      }}
    >
      {featured && (
        <span
          className="absolute top-4 right-4 text-xs px-2 py-0.5 rounded-sm font-mono"
          style={{
            color: "var(--accent)",
            background: "rgba(0,255,135,0.1)",
            border: "1px solid rgba(0,255,135,0.2)",
          }}
        >
          ★ Featured
        </span>
      )}

      <div className="flex-1">
        <p className="text-xs font-mono mb-1" style={{ color: "var(--text-muted)" }}>
          {period}
        </p>
        <h3
          className="text-lg font-bold mb-1 font-display"
          style={{ color: "var(--text-primary)", fontFamily: "var(--font-display)" }}
        >
          {title}
        </h3>
        <p className="text-sm mb-3" style={{ color: "var(--accent)", fontFamily: "var(--font-mono)" }}>
          {subtitle}
        </p>
        <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--text-muted)" }}>
          {description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {stack.map((s) => (
            <span
              key={s}
              className="text-xs px-2 py-0.5 rounded-sm border font-mono"
              style={{
                background: "rgba(14,165,233,0.06)",
                borderColor: "rgba(14,165,233,0.2)",
                color: "var(--accent-secondary)",
              }}
            >
              {s}
            </span>
          ))}
        </div>
      </div>

      <div className="flex gap-3 mt-auto pt-4" style={{ borderTop: "1px solid var(--border)" }}>
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-xs font-mono transition-colors"
          style={{ color: "var(--text-muted)" }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-primary)")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
          </svg>
          GitHub
        </a>
        {live && (
          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-mono transition-colors"
            style={{ color: "var(--text-muted)" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
}
