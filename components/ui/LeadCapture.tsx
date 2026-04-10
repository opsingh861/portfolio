"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { getStoredUTMParams } from "@/hooks/useUTMTracking";

const DISMISSED_KEY = "_lead_dismissed";
const SUBMITTED_KEY = "_lead_submitted";
const SHOW_AFTER_MS = 15_000;
const SCROLL_THRESHOLD = 0.6;

export default function LeadCapture() {
  const [visible, setVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (
      localStorage.getItem(DISMISSED_KEY) ||
      localStorage.getItem(SUBMITTED_KEY)
    ) {
      return;
    }

    const show = () => {
      setVisible(true);
      if (timerRef.current) clearTimeout(timerRef.current);
      window.removeEventListener("scroll", onScroll);
    };

    const onScroll = () => {
      const scrolled =
        window.scrollY / (document.body.scrollHeight - window.innerHeight);
      if (scrolled >= SCROLL_THRESHOLD) show();
    };

    timerRef.current = setTimeout(show, SHOW_AFTER_MS);
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const dismiss = () => {
    setVisible(false);
    localStorage.setItem(DISMISSED_KEY, "1");
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === "sending") return;

    const trimmed = email.trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
      setStatus("error");
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch("/api/analytics/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: trimmed, utmParams: getStoredUTMParams() }),
      });

      if (res.ok) {
        setStatus("success");
        localStorage.setItem(SUBMITTED_KEY, "1");
        setTimeout(() => setVisible(false), 2500);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed bottom-6 left-1/2 z-50 w-[min(420px,calc(100vw-2rem))] -translate-x-1/2"
        >
          <div
            className="relative rounded-xl border p-5 shadow-2xl"
            style={{ background: "var(--bg)", borderColor: "var(--border-bright)" }}
          >
            <button
              onClick={dismiss}
              aria-label="Dismiss"
              className="absolute right-3 top-3 text-sm opacity-40 transition-opacity hover:opacity-100"
              style={{ color: "var(--foreground)" }}
            >
              ✕
            </button>

            {status === "success" ? (
              <p className="text-sm font-medium" style={{ color: "var(--accent)" }}>
                ✓ Got it! I&apos;ll reach out soon.
              </p>
            ) : (
              <>
                <p
                  className="mb-1 text-sm font-semibold"
                  style={{ color: "var(--foreground)" }}
                >
                  Interested in working together?
                </p>
                <p
                  className="mb-3 text-xs opacity-60"
                  style={{ color: "var(--foreground)" }}
                >
                  Drop your email and I&apos;ll reach out directly.
                </p>
                <form onSubmit={submit} className="flex gap-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setStatus("idle");
                    }}
                    placeholder="your@email.com"
                    required
                    disabled={status === "sending"}
                    className="min-w-0 flex-1 rounded-lg px-3 py-2 text-sm outline-none disabled:opacity-50"
                    style={{
                      background: "var(--border)",
                      color: "var(--foreground)",
                      border:
                        status === "error"
                          ? "1px solid #ff4d4d"
                          : "1px solid var(--border-bright)",
                    }}
                  />
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="rounded-lg px-4 py-2 text-sm font-semibold transition-opacity disabled:opacity-50"
                    style={{ background: "var(--accent)", color: "var(--bg)" }}
                  >
                    {status === "sending" ? "..." : "Send"}
                  </button>
                </form>
                {status === "error" && (
                  <p className="mt-1 text-xs" style={{ color: "#ff4d4d" }}>
                    Please enter a valid email.
                  </p>
                )}
              </>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
