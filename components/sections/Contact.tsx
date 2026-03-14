"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { portfolioConfig } from "@/portfolio.config";

export default function Contact() {
  const { meta } = portfolioConfig;
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });

      if (res.ok) {
        setStatus("success");
        setFormState({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const inputStyle = {
    background: "var(--surface-2)",
    borderColor: "var(--border)",
    color: "var(--text-primary)",
    fontFamily: "var(--font-mono)",
  };

  return (
    <section id="contact" className="py-24 px-6" style={{ background: "var(--surface)" }}>
      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-16"
        >
          <span className="font-mono text-xs uppercase tracking-widest" style={{ color: "var(--accent)" }}>
            08
          </span>
          <div className="h-px flex-1" style={{ background: "var(--border)" }} />
          <h2
            className="text-3xl md:text-4xl font-bold"
            style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
          >
            Contact
          </h2>
          <div className="h-px flex-1" style={{ background: "var(--border)" }} />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left: CTA + Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3
              className="text-2xl font-bold mb-4 leading-snug"
              style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
            >
              Available for Backend &amp; API SDE-1 / SDE-2 roles.{" "}
              <span style={{ color: "var(--accent)" }}>Let&rsquo;s talk.</span>
            </h3>

            <p className="text-sm font-mono mb-8 leading-relaxed" style={{ color: "var(--text-muted)" }}>
              Whether you have a role in mind, want to collaborate, or just want to talk shop — my inbox is open.
            </p>

            <div className="space-y-4 mb-8">
              <a
                href={`mailto:${meta.email}`}
                className="flex items-center gap-3 group"
                style={{ textDecoration: "none" }}
              >
                <div
                  className="w-9 h-9 rounded-sm flex items-center justify-center border transition-all"
                  style={{ background: "var(--surface-2)", borderColor: "var(--border)" }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(0,255,135,0.4)";
                    (e.currentTarget as HTMLDivElement).style.background = "rgba(0,255,135,0.08)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLDivElement).style.borderColor = "var(--border)";
                    (e.currentTarget as HTMLDivElement).style.background = "var(--surface-2)";
                  }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: "var(--accent)" }}>
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <span className="text-sm font-mono" style={{ color: "var(--text-muted)" }}>
                  {meta.email}
                </span>
              </a>

              <a
                href={meta.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3"
                style={{ textDecoration: "none" }}
              >
                <div
                  className="w-9 h-9 rounded-sm flex items-center justify-center border transition-all"
                  style={{ background: "var(--surface-2)", borderColor: "var(--border)" }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(14,165,233,0.4)";
                    (e.currentTarget as HTMLDivElement).style.background = "rgba(14,165,233,0.08)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLDivElement).style.borderColor = "var(--border)";
                    (e.currentTarget as HTMLDivElement).style.background = "var(--surface-2)";
                  }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style={{ color: "var(--accent-secondary)" }}>
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </div>
                <span className="text-sm font-mono" style={{ color: "var(--text-muted)" }}>
                  linkedin.com/in/opsingh861
                </span>
              </a>

              <a
                href={meta.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3"
                style={{ textDecoration: "none" }}
              >
                <div
                  className="w-9 h-9 rounded-sm flex items-center justify-center border transition-all"
                  style={{ background: "var(--surface-2)", borderColor: "var(--border)" }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.2)";
                    (e.currentTarget as HTMLDivElement).style.background = "rgba(255,255,255,0.05)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLDivElement).style.borderColor = "var(--border)";
                    (e.currentTarget as HTMLDivElement).style.background = "var(--surface-2)";
                  }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style={{ color: "var(--text-primary)" }}>
                    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                  </svg>
                </div>
                <span className="text-sm font-mono" style={{ color: "var(--text-muted)" }}>
                  github.com/opsingh861
                </span>
              </a>
            </div>

            <a
              href={meta.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              download
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-sm font-mono text-sm border transition-all"
              style={{
                color: "var(--accent)",
                borderColor: "rgba(0,255,135,0.3)",
                background: "rgba(0,255,135,0.05)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(0,255,135,0.12)";
                e.currentTarget.style.boxShadow = "0 0 16px rgba(0,255,135,0.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(0,255,135,0.05)";
                e.currentTarget.style.boxShadow = "";
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Download Resume
            </a>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-xs font-mono uppercase tracking-widest mb-2" style={{ color: "var(--text-muted)" }}>
                  Name
                </label>
                <input
                  type="text"
                  required
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-sm border text-sm outline-none transition-all"
                  style={inputStyle}
                  placeholder="Your name"
                  onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(0,255,135,0.4)")}
                  onBlur={(e) => (e.currentTarget.style.borderColor = "var(--border)")}
                />
              </div>
              <div>
                <label className="block text-xs font-mono uppercase tracking-widest mb-2" style={{ color: "var(--text-muted)" }}>
                  Email
                </label>
                <input
                  type="email"
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-sm border text-sm outline-none transition-all"
                  style={inputStyle}
                  placeholder="you@company.com"
                  onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(0,255,135,0.4)")}
                  onBlur={(e) => (e.currentTarget.style.borderColor = "var(--border)")}
                />
              </div>
              <div>
                <label className="block text-xs font-mono uppercase tracking-widest mb-2" style={{ color: "var(--text-muted)" }}>
                  Message
                </label>
                <textarea
                  required
                  rows={5}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-sm border text-sm outline-none transition-all resize-none"
                  style={inputStyle}
                  placeholder="Tell me about the role or project..."
                  onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(0,255,135,0.4)")}
                  onBlur={(e) => (e.currentTarget.style.borderColor = "var(--border)")}
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full py-3 rounded-sm font-mono text-sm font-medium transition-all"
                style={{
                  background: status === "success" ? "rgba(0,255,135,0.15)" : "var(--accent)",
                  color: status === "success" ? "var(--accent)" : "var(--bg)",
                  opacity: status === "sending" ? 0.6 : 1,
                  border: status === "success" ? "1px solid rgba(0,255,135,0.3)" : "none",
                }}
                onMouseEnter={(e) => {
                  if (status !== "success") {
                    (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 0 20px rgba(0,255,135,0.3)";
                  }
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.boxShadow = "";
                }}
              >
                {status === "idle" && "Send Message →"}
                {status === "sending" && "Sending..."}
                {status === "success" && "✓ Message sent!"}
                {status === "error" && "Failed — try email directly"}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
