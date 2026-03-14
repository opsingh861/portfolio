"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SkillPill from "@/components/ui/SkillPill";
import { portfolioConfig } from "@/portfolio.config";

export default function Skills() {
  const { skills } = portfolioConfig;
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const categories = Object.entries(skills);

  return (
    <section id="skills" className="py-24 px-6" style={{ background: "var(--surface)" }}>
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-16"
        >
          <span className="font-mono text-xs uppercase tracking-widest" style={{ color: "var(--accent)" }}>
            04
          </span>
          <div className="h-px flex-1" style={{ background: "var(--border)" }} />
          <h2
            className="text-3xl md:text-4xl font-bold"
            style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
          >
            Tech Stack
          </h2>
          <div className="h-px flex-1" style={{ background: "var(--border)" }} />
        </motion.div>

        <div className="space-y-10">
          {categories.map(([category, items], i) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span
                  className="text-xs font-mono uppercase tracking-widest"
                  style={{ color: "var(--text-muted)" }}
                >
                  {category}
                </span>
                <div
                  className="h-px flex-1"
                  style={{ background: "var(--border)" }}
                />
              </div>
              <div className="flex flex-wrap gap-2">
                {items.map((skill, j) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: i * 0.1 + j * 0.04 }}
                  >
                    <SkillPill skill={skill} />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
