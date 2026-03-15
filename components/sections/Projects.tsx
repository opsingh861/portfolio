"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import ProjectCard from "@/components/ui/ProjectCard";
import { portfolioConfig } from "@/portfolio.config";

export default function Projects() {
  const { projects } = portfolioConfig;
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  // If the count of non-featured projects is odd the last one would be alone
  // in a 2-col row — give it full width so it matches the featured card width.
  const nonFeaturedIndices = projects.flatMap((project, index) =>
    project.featured ? [] : [index]
  );
  const orphanNonFeaturedIndex =
    nonFeaturedIndices.length % 2 !== 0
      ? nonFeaturedIndices[nonFeaturedIndices.length - 1]
      : -1;

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-16"
        >
          <span className="font-mono text-xs uppercase tracking-widest" style={{ color: "var(--accent)" }}>
            03
          </span>
          <div className="h-px flex-1" style={{ background: "var(--border)" }} />
          <h2
            className="text-3xl md:text-4xl font-bold"
            style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
          >
            Projects
          </h2>
          <div className="h-px flex-1" style={{ background: "var(--border)" }} />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className={project.featured || i === orphanNonFeaturedIndex ? "md:col-span-2" : ""}
            >
              {project.featured ? (
                <div className="md:col-span-2">
                  <ProjectCard {...project} />
                </div>
              ) : (
                <ProjectCard {...project} />
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-8 text-center"
        >
          <a
            href={portfolioConfig.meta.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-mono transition-colors"
            style={{ color: "var(--text-muted)" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
          >
            View all projects on GitHub →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
