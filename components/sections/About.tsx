"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { portfolioConfig } from "@/portfolio.config";

const fade = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15 },
  }),
};

export default function About() {
  const { about, meta } = portfolioConfig;
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto" ref={ref}>
        {/* Section header */}
        <motion.div
          custom={0}
          variants={fade}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="flex items-center gap-4 mb-16"
        >
          <span className="font-mono text-xs uppercase tracking-widest" style={{ color: "var(--accent)" }}>
            01
          </span>
          <div className="h-px flex-1" style={{ background: "var(--border)" }} />
          <h2
            className="text-3xl md:text-4xl font-bold"
            style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
          >
            About
          </h2>
          <div className="h-px flex-1" style={{ background: "var(--border)" }} />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Bio */}
          <motion.div
            custom={1}
            variants={fade}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <p
              className="text-base leading-8 mb-6"
              style={{ color: "#8a8a8a", fontFamily: "var(--font-display)" }}
            >
              {about.bio}
            </p>
            <div className="flex items-center gap-2 mb-4">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                style={{ color: "var(--accent)" }}>
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span className="text-sm font-mono" style={{ color: "var(--text-muted)" }}>
                {meta.location}
              </span>
            </div>
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm text-xs font-mono border"
              style={{
                color: "var(--accent)",
                borderColor: "rgba(0,255,135,0.2)",
                background: "rgba(0,255,135,0.04)",
              }}
            >
              <span className="relative flex h-2 w-2">
                <span
                  className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                  style={{ background: "var(--accent)" }}
                />
                <span
                  className="relative inline-flex rounded-full h-2 w-2"
                  style={{ background: "var(--accent)" }}
                />
              </span>
              Open to Backend / API SDE-1 or SDE-2 roles
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            custom={2}
            variants={fade}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="grid grid-cols-1 gap-4"
          >
            {about.stats.map((stat, i) => (
              <div
                key={i}
                className="flex items-center gap-6 p-6 rounded-sm border transition-all duration-300"
                style={{
                  background: "var(--surface)",
                  borderColor: "var(--border)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(0,255,135,0.3)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = "var(--border)";
                }}
              >
                <div
                  className="text-4xl font-bold font-mono glow-text"
                  style={{
                    color: "var(--accent)",
                    fontFamily: "var(--font-mono)",
                  }}
                >
                  <AnimatedCounter
                    end={parseInt(stat.value)}
                    suffix={stat.suffix}
                    duration={2}
                  />
                </div>
                <div>
                  <p className="text-sm font-mono" style={{ color: "var(--text-muted)" }}>
                    {stat.label}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
