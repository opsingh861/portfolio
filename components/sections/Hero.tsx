"use client";

import { motion } from "framer-motion";
import TypeWriter from "@/components/ui/TypeWriter";
import { portfolioConfig } from "@/portfolio.config";

export default function Hero() {
  const { meta, hero, openToWork } = portfolioConfig;

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center px-6 pt-20 grid-bg overflow-hidden"
    >
      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 30% 60%, rgba(0,255,135,0.07) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left column */}
          <div className="overflow-hidden">
        {/* Pre-line */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex items-center gap-3 mb-6"
        >
          <div
            className="h-px w-8"
            style={{ background: "var(--accent)" }}
          />
          <span
            className="text-xs font-mono uppercase tracking-widest"
            style={{ color: "var(--accent)" }}
          >
            {meta.location} &nbsp;·&nbsp; Backend Engineer
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-6xl font-bold mb-4 leading-none"
          style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
        >
          <span className="block text-xl md:text-2xl font-mono font-normal mb-2" style={{ color: "var(--text-muted)" }}>
            Hi, I&rsquo;m
          </span>
          <span
            className="relative inline-block"
            style={{ color: "var(--accent)" }}
          >
            {meta.name.split(" ")[0]}
            <motion.span
              className="absolute -bottom-1 left-0 h-[2px] w-full"
              style={{ background: "var(--accent)", originX: 0 }}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            />
          </span>
          <br />
          <span style={{ color: "var(--text-primary)" }}>
            {meta.name.split(" ")[1]}
          </span>
        </motion.h1>

        {/* Typewriter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6"
          style={{ fontFamily: "var(--font-display)" }}
        >
          <TypeWriter phrases={hero.taglines} />
        </motion.div>

        {/* Summary */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-base md:text-lg max-w-2xl mb-10 leading-relaxed"
          style={{ color: "var(--text-muted)", fontFamily: "var(--font-display)" }}
        >
          {hero.summary}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="flex flex-wrap gap-4"
        >
            {/* resume is locally available */}
          <a
            href={meta.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            download
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-sm font-mono text-sm font-medium transition-all duration-200"
            style={{
              background: "var(--accent)",
              color: "var(--bg)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = "0 0 20px rgba(0,255,135,0.4)";
              e.currentTarget.style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = "";
              e.currentTarget.style.transform = "";
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Download Resume
          </a>

          <a
            href={meta.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-sm font-mono text-sm font-medium border transition-all duration-200"
            style={{
              color: "var(--text-primary)",
              borderColor: "var(--border-bright)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "rgba(0,255,135,0.4)";
              e.currentTarget.style.color = "var(--accent)";
              e.currentTarget.style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "var(--border-bright)";
              e.currentTarget.style.color = "var(--text-primary)";
              e.currentTarget.style.transform = "";
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
            </svg>
            View GitHub
          </a>

          {openToWork && (
            <div
              className="inline-flex items-center gap-2 px-4 py-3 rounded-sm font-mono text-xs border"
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
              Available for SDE-1 / SDE-2 roles
            </div>
          )}
        </motion.div>
          </div>

          {/* Right column — Terminal mock */}
          <motion.div
            className="hidden lg:block"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="bg-[#0d0d0d] border border-[var(--border)] rounded-sm overflow-hidden">
              {/* Terminal header */}
              <div className="flex items-center gap-2 px-4 py-3 border-b" style={{ borderColor: "var(--border)" }}>
                <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
                <span className="w-3 h-3 rounded-full bg-[#28c840]" />
                <span className="ml-2 text-xs font-mono" style={{ color: "var(--text-dim)" }}>~/.terminal</span>
              </div>
              {/* Terminal body */}
              <div className="p-5 font-mono text-sm leading-7">
                <div><span style={{ color: "var(--accent)" }}>❯</span> <span style={{ color: "#9ba3b2" }}>curl https://adityacodes.dev/api/me</span></div>
                <div style={{ color: "#9ba3b2" }}>{"{"}</div>
                <div>&nbsp;&nbsp;<span style={{ color: "#79b8ff" }}>&quot;name&quot;</span>: <span style={{ color: "#9ecbff" }}>&quot;Aditya Dhanraj&quot;</span>,</div>
                <div>&nbsp;&nbsp;<span style={{ color: "#79b8ff" }}>&quot;role&quot;</span>: <span style={{ color: "#9ecbff" }}>&quot;Backend Engineer&quot;</span>,</div>
                <div>&nbsp;&nbsp;<span style={{ color: "#79b8ff" }}>&quot;company&quot;</span>: <span style={{ color: "#9ecbff" }}>&quot;Infineon Technologies&quot;</span>,</div>
                <div>&nbsp;&nbsp;<span style={{ color: "#79b8ff" }}>&quot;stack&quot;</span>: <span style={{ color: "var(--accent)" }}>[&quot;.NET&quot;, &quot;Node.js&quot;, &quot;Python&quot;, &quot;K8s&quot;]</span>,</div>
                <div>&nbsp;&nbsp;<span style={{ color: "#79b8ff" }}>&quot;latency_p99&quot;</span>: <span style={{ color: "#9ecbff" }}>&quot;&lt; 10ms&quot;</span>,</div>
                <div>&nbsp;&nbsp;<span style={{ color: "#79b8ff" }}>&quot;open_to_work&quot;</span>: <span style={{ color: "var(--accent)" }}>true</span></div>
                <div style={{ color: "#9ba3b2" }}>{"}"}</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: "var(--text-muted)" }}>
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </motion.div>
      </div>
    </section>
  );
}
