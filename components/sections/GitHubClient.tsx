"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import ContributionGrid from "@/components/ui/ContributionGrid";

interface ContributionDay {
  contributionCount: number;
  date: string;
}

interface Repo {
  name: string;
  description: string | null;
  url: string;
  stargazerCount: number;
  forkCount: number;
  primaryLanguage: { name: string; color: string } | null;
}

interface Props {
  calendar: {
    totalContributions: number;
    weeks: { contributionDays: ContributionDay[] }[];
  } | null;
  pinnedRepos: Repo[];
  githubUrl: string;
}

export default function GitHubClient({ calendar, pinnedRepos, githubUrl }: Props) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="github" className="py-24 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-16"
        >
          <span className="font-mono text-xs uppercase tracking-widest" style={{ color: "var(--accent)" }}>
            05
          </span>
          <div className="h-px flex-1" style={{ background: "var(--border)" }} />
          <h2
            className="text-3xl md:text-4xl font-bold"
            style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
          >
            GitHub Activity
          </h2>
          <div className="h-px flex-1" style={{ background: "var(--border)" }} />
        </motion.div>

        {/* Contribution heatmap */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {calendar ? (
            <div
              className="p-6 rounded-sm border mb-8"
              style={{ background: "var(--surface)", borderColor: "var(--border)" }}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-mono" style={{ color: "var(--text-muted)" }}>
                  Contributions (past year)
                </span>
                <span
                  className="text-2xl font-bold font-mono"
                  style={{ color: "var(--accent)", fontFamily: "var(--font-mono)" }}
                >
                  {calendar.totalContributions.toLocaleString()}
                </span>
              </div>
              <ContributionGrid weeks={calendar.weeks} />
              <div className="flex items-center gap-2 mt-3 justify-end">
                <span className="text-xs font-mono" style={{ color: "var(--text-dim)" }}>Less</span>
                {[
                  "rgba(255,255,255,0.04)",
                  "rgba(0,255,135,0.2)",
                  "rgba(0,255,135,0.4)",
                  "rgba(0,255,135,0.65)",
                  "rgba(0,255,135,0.9)",
                ].map((c, i) => (
                  <div key={i} className="w-3 h-3 rounded-sm" style={{ background: c }} />
                ))}
                <span className="text-xs font-mono" style={{ color: "var(--text-dim)" }}>More</span>
              </div>

              {/* Stats row */}
              <div className="flex gap-6 mt-6">
                <div className="border border-[var(--border)] bg-[var(--surface)] rounded-sm px-4 py-3">
                  <div className="text-xl font-bold font-mono" style={{ color: "var(--accent)" }}>
                    {calendar.totalContributions.toLocaleString()}
                  </div>
                  <div className="text-xs font-mono" style={{ color: "var(--text-muted)" }}>Total Contributions</div>
                </div>
                <div className="border border-[var(--border)] bg-[var(--surface)] rounded-sm px-4 py-3">
                  <div className="text-xl font-bold font-mono" style={{ color: "var(--accent)" }}>
                    {pinnedRepos.length}+
                  </div>
                  <div className="text-xs font-mono" style={{ color: "var(--text-muted)" }}>Public Repos</div>
                </div>
                <div className="border border-[var(--border)] bg-[var(--surface)] rounded-sm px-4 py-3">
                  <div className="text-xl font-bold font-mono" style={{ color: "var(--accent)" }}>
                    TypeScript
                  </div>
                  <div className="text-xs font-mono" style={{ color: "var(--text-muted)" }}>Top Language</div>
                </div>
              </div>
            </div>
          ) : (
            <div
              className="p-6 rounded-sm border mb-8 text-center"
              style={{ background: "var(--surface)", borderColor: "var(--border)" }}
            >
              <p className="text-sm font-mono" style={{ color: "var(--text-muted)" }}>
                GitHub data unavailable — add GITHUB_TOKEN to .env.local
              </p>
            </div>
          )}
        </motion.div>

        {/* Pinned repos */}
        {pinnedRepos.length > 0 && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {pinnedRepos.map((repo, i) => (
              <motion.a
                key={repo.name}
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
                className="group p-5 rounded-sm border flex flex-col gap-3 transition-all duration-300"
                style={{
                  background: "var(--surface)",
                  borderColor: "var(--border)",
                  textDecoration: "none",
                }}
                whileHover={{
                  borderColor: "rgba(0,255,135,0.3)",
                  y: -2,
                }}
              >
                <div className="flex items-start justify-between gap-2">
                  <span
                    className="font-mono font-medium text-sm"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {repo.name}
                  </span>
                  <svg
                    width="12" height="12" viewBox="0 0 24 24"
                    fill="none" stroke="currentColor" strokeWidth="2"
                    style={{ color: "var(--text-dim)", flexShrink: 0 }}
                  >
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                </div>

                {repo.description && (
                  <p
                    className="text-xs leading-relaxed"
                    style={{ color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}
                  >
                    {repo.description}
                  </p>
                )}

                <div className="flex items-center gap-4 mt-auto">
                  {repo.primaryLanguage && (
                    <div className="flex items-center gap-1.5">
                      <div
                        className="w-2 h-2 rounded-full"
                        style={{ background: repo.primaryLanguage.color }}
                      />
                      <span className="text-xs font-mono" style={{ color: "var(--text-muted)" }}>
                        {repo.primaryLanguage.name}
                      </span>
                    </div>
                  )}
                  <div className="flex items-center gap-1 text-xs font-mono" style={{ color: "var(--text-muted)" }}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                    {repo.stargazerCount}
                  </div>
                  <div className="flex items-center gap-1 text-xs font-mono" style={{ color: "var(--text-muted)" }}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="18" r="3" /><circle cx="6" cy="6" r="3" /><circle cx="18" cy="6" r="3" />
                      <path d="M6 9v4l6 5m0-9v4l-6 5" />
                    </svg>
                    {repo.forkCount}
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        )}

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center"
        >
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-mono transition-colors"
            style={{ color: "var(--text-muted)" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
          >
            View full GitHub profile →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
