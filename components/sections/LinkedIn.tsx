"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { portfolioConfig } from "@/portfolio.config";

export default function LinkedIn() {
  const { linkedinPosts } = portfolioConfig;
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="linkedin" className="py-24 px-6" style={{ background: "var(--surface)" }}>
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-4"
        >
          <span className="font-mono text-xs uppercase tracking-widest" style={{ color: "var(--accent)" }}>
            06
          </span>
          <div className="h-px flex-1" style={{ background: "var(--border)" }} />
          <h2
            className="text-3xl md:text-4xl font-bold"
            style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
          >
            What I&rsquo;m thinking about
          </h2>
          <div className="h-px flex-1" style={{ background: "var(--border)" }} />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-sm font-mono mb-12"
          style={{ color: "var(--text-muted)" }}
        >
          Writing on backend engineering, API design, and developer platforms.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-6">
          {linkedinPosts.map((post, i) => (
            <motion.a
              key={i}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="group flex flex-col p-6 rounded-sm border transition-all duration-300"
              style={{
                background: "var(--surface-2)",
                borderColor: "var(--border)",
                borderLeft: "3px solid rgba(0,119,181,0.5)",
                textDecoration: "none",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(0,255,135,0.3)";
                (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--border)";
                (e.currentTarget as HTMLAnchorElement).style.transform = "";
              }}
            >
              <time
                className="text-xs font-mono mb-3"
                style={{ color: "var(--text-dim)" }}
                dateTime={post.date}
              >
                {new Date(post.date).toLocaleDateString("en-IN", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </time>

              <h3
                className="text-sm font-bold mb-3 leading-snug"
                style={{
                  fontFamily: "var(--font-display)",
                  color: "var(--text-primary)",
                }}
              >
                {post.title}
              </h3>

              <p
                className="text-xs leading-relaxed mb-4 flex-1"
                style={{ color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}
              >
                {post.excerpt}
              </p>

              <div className="flex flex-wrap gap-1.5 mb-4">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-0.5 rounded-sm font-mono"
                    style={{
                      background: "rgba(14,165,233,0.06)",
                      color: "var(--accent-secondary)",
                      border: "1px solid rgba(14,165,233,0.15)",
                    }}
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              <span
                className="text-xs font-mono flex items-center gap-1 transition-colors"
                style={{ color: "var(--text-muted)" }}
              >
                Read on LinkedIn
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </span>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-8 text-center"
        >
          <a
            href={portfolioConfig.meta.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-mono transition-colors"
            style={{ color: "var(--text-muted)" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
          >
            View LinkedIn profile →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
