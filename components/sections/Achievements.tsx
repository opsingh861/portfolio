"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { portfolioConfig } from "@/portfolio.config";

export default function Achievements() {
  const { achievements, certifications, education } = portfolioConfig;
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="achievements" className="py-24 px-6">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-16"
        >
          <span className="font-mono text-xs uppercase tracking-widest" style={{ color: "var(--accent)" }}>
            07
          </span>
          <div className="h-px flex-1" style={{ background: "var(--border)" }} />
          <h2
            className="text-3xl md:text-4xl font-bold"
            style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
          >
            Achievements
          </h2>
          <div className="h-px flex-1" style={{ background: "var(--border)" }} />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Achievements */}
          <div>
            <h3
              className="text-xs font-mono uppercase tracking-widest mb-6"
              style={{ color: "var(--text-dim)" }}
            >
              Highlights
            </h3>
            <div className="space-y-4">
              {achievements.map((a, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex gap-4 p-5 rounded-sm border transition-all duration-200"
                  style={{
                    background: "var(--surface)",
                    borderColor: "var(--border)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(0,255,135,0.25)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLDivElement).style.borderColor = "var(--border)";
                  }}
                >
                  <div
                    className="flex-shrink-0 w-10 h-10 rounded-sm flex items-center justify-center text-lg"
                    style={{ background: "rgba(0,255,135,0.08)", border: "1px solid rgba(0,255,135,0.15)" }}
                  >
                    🏆
                  </div>
                  <div>
                    <div className="flex items-baseline gap-2 mb-1">
                      <h4 className="text-sm font-bold" style={{ color: "var(--text-primary)", fontFamily: "var(--font-display)" }}>
                        {a.title}
                      </h4>
                      <span className="text-xs font-mono" style={{ color: "var(--text-dim)" }}>
                        {a.year}
                      </span>
                    </div>
                    <p className="text-xs font-mono" style={{ color: "var(--text-muted)" }}>
                      {a.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3
              className="text-xs font-mono uppercase tracking-widest mb-6"
              style={{ color: "var(--text-dim)" }}
            >
              Certifications
            </h3>
            {certifications.length > 0 ? (
              <div className="space-y-4">
                {certifications.map((cert, i) => (
                  <div
                    key={i}
                    className="p-5 rounded-sm border"
                    style={{ background: "var(--surface)", borderColor: "var(--border)" }}
                  >
                    <p style={{ color: "var(--text-primary)" }}>{(cert as { name: string }).name}</p>
                  </div>
                ))}
              </div>
            ) : (
              <div
                className="p-5 rounded-sm border"
                style={{
                  background: "var(--surface)",
                  borderColor: "var(--border)",
                  borderStyle: "dashed",
                }}
              >
                <p className="text-xs font-mono" style={{ color: "var(--text-dim)" }}>
                  Certifications in progress — check back soon.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px flex-1" style={{ background: "var(--border)" }} />
            <h3 className="text-xs font-mono uppercase tracking-widest" style={{ color: "var(--text-dim)" }}>
              Education
            </h3>
            <div className="h-px flex-1" style={{ background: "var(--border)" }} />
          </div>

          {education.map((edu, i) => (
            <div
              key={i}
              className="flex flex-col md:flex-row md:items-center justify-between p-6 rounded-sm border gap-4"
              style={{
                background: "var(--surface)",
                borderColor: "var(--border)",
              }}
            >
              <div>
                <h4
                  className="text-lg font-bold mb-1"
                  style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
                >
                  {edu.degree}
                </h4>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-mono text-sm" style={{ color: "var(--accent)" }}>
                    {edu.institution}
                  </span>
                  <span style={{ color: "var(--text-dim)" }}>·</span>
                  <span className="text-xs font-mono" style={{ color: "var(--text-muted)" }}>
                    {edu.location}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono" style={{ color: "var(--text-muted)" }}>
                  {edu.period}
                </span>
                <span
                  className="text-xs font-mono px-3 py-1.5 rounded-sm border"
                  style={{
                    color: "var(--accent)",
                    borderColor: "rgba(0,255,135,0.25)",
                    background: "rgba(0,255,135,0.06)",
                  }}
                >
                  GPA: {edu.gpa}
                </span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
