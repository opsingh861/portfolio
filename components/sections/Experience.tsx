"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { portfolioConfig } from "@/portfolio.config";

export default function Experience() {
  const { experience } = portfolioConfig;
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="experience" className="py-24 px-6" style={{ background: "var(--surface)" }}>
      <div className="max-w-6xl mx-auto" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-16"
        >
          <span className="font-mono text-xs uppercase tracking-widest" style={{ color: "var(--accent)" }}>
            02
          </span>
          <div className="h-px flex-1" style={{ background: "var(--border)" }} />
          <h2
            className="text-3xl md:text-4xl font-bold"
            style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
          >
            Experience
          </h2>
          <div className="h-px flex-1" style={{ background: "var(--border)" }} />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-0 top-2 bottom-2 w-[2px] md:left-[9px]"
            style={{
              background: "linear-gradient(to bottom, var(--accent), rgba(0,255,135,0.1))",
              boxShadow: "0 0 8px rgba(0,255,135,0.3)",
            }}
          />

          <div className="space-y-12 pl-8 md:pl-12">
            {experience.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="relative"
              >
                {/* Dot */}
                <div
                  className="absolute -left-8 md:-left-[47px] top-2 w-[14px] h-[14px] rounded-full border-2"
                  style={{
                    background: "var(--accent)",
                    borderColor: "var(--bg)",
                    boxShadow: "0 0 12px var(--accent), 0 0 24px rgba(0,255,135,0.3)",
                  }}
                />

                <div
                  className="p-6 rounded-sm border transition-all duration-300"
                  style={{
                    background: "var(--surface-2)",
                    borderColor: "var(--border)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(0,255,135,0.25)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLDivElement).style.borderColor = "var(--border)";
                  }}
                >
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <h3
                        className="text-lg font-bold mb-1"
                        style={{
                          fontFamily: "var(--font-display)",
                          color: "var(--text-primary)",
                        }}
                      >
                        {exp.role}
                      </h3>
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="font-mono text-sm font-medium" style={{ color: "var(--accent)" }}>
                          {exp.company}
                        </span>
                        <span className="text-xs" style={{ color: "var(--text-dim)" }}>·</span>
                        <span className="text-xs font-mono" style={{ color: "var(--text-muted)" }}>
                          {exp.location}
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      <span
                        className="text-xs font-mono px-2 py-0.5 rounded-sm border"
                        style={{
                          color: "var(--text-muted)",
                          borderColor: "var(--border)",
                        }}
                      >
                        {exp.period}
                      </span>
                      <span
                        className="text-xs font-mono px-2 py-0.5 rounded-sm"
                        style={{
                          background:
                            exp.type === "Full-time"
                              ? "rgba(0,255,135,0.08)"
                              : "rgba(14,165,233,0.08)",
                          color:
                            exp.type === "Full-time"
                              ? "var(--accent)"
                              : "var(--accent-secondary)",
                        }}
                      >
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {exp.bullets.map((bullet, j) => (
                      <li key={j} className="flex gap-3 text-sm" style={{ color: "var(--text-muted)" }}>
                        <span className="mt-1.5 flex-shrink-0 w-1 h-1 rounded-full" style={{ background: "var(--accent)" }} />
                        <span className="leading-relaxed" style={{ fontFamily: "var(--font-mono)" }}>
                          {bullet}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
