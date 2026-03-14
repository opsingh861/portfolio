"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Hi! I'm an AI assistant that knows everything about Aditya's background, skills, and experience. Ask me anything — what roles he's targeting, his tech stack, projects, etc.",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, open]);

  const send = async () => {
    const text = input.trim();
    if (!text || loading) return;

    setInput("");
    setMessages((prev) => [...prev, { role: "user", content: text }]);
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text }),
      });

      const data = await res.json();
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: data.reply || "Sorry, I couldn't get a response. Try again.",
        },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Network error. Please try again." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKey = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  };

  return (
    <>
      {/* Floating button */}
      <motion.button
        className="fixed bottom-6 right-6 z-[200] w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all"
        style={{
          background: open ? "var(--surface)" : "var(--accent)",
          border: open ? "1px solid var(--border)" : "none",
        }}
        onClick={() => setOpen(!open)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        title="Ask AI about Aditya"
      >
        {open ? (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
            style={{ color: "var(--text-primary)" }}>
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        ) : (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
            style={{ color: "var(--bg)" }}>
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        )}
      </motion.button>

      {/* Chat drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 z-[200] w-[360px] max-w-[calc(100vw-1.5rem)] flex flex-col rounded-sm border shadow-2xl"
            style={{
              background: "var(--surface)",
              borderColor: "var(--border)",
              height: "480px",
            }}
          >
            {/* Header */}
            <div
              className="flex items-center gap-3 px-4 py-3 border-b"
              style={{ borderColor: "var(--border)" }}
            >
              <div
                className="w-8 h-8 rounded-sm flex items-center justify-center text-xs font-bold"
                style={{
                  background: "rgba(0,255,135,0.1)",
                  border: "1px solid rgba(0,255,135,0.2)",
                  color: "var(--accent)",
                  fontFamily: "var(--font-display)",
                }}
              >
                AI
              </div>
              <div>
                <p className="text-xs font-bold" style={{ color: "var(--text-primary)", fontFamily: "var(--font-display)" }}>
                  Aditya&rsquo;s AI Assistant
                </p>
                <p className="text-xs font-mono" style={{ color: "var(--text-muted)" }}>
                  Ask me anything about Aditya
                </p>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className="max-w-[84%] px-3 py-2 rounded-sm text-xs font-mono leading-relaxed"
                    style={{
                      background:
                        msg.role === "user"
                          ? "rgba(0,255,135,0.12)"
                          : "var(--surface-2)",
                      border: `1px solid ${msg.role === "user" ? "rgba(0,255,135,0.2)" : "var(--border)"}`,
                      color:
                        msg.role === "user"
                          ? "var(--accent)"
                          : "var(--text-muted)",
                    }}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}

              {loading && (
                <div className="flex justify-start">
                  <div
                    className="px-3 py-2 rounded-sm text-xs font-mono border"
                    style={{
                      background: "var(--surface-2)",
                      borderColor: "var(--border)",
                      color: "var(--text-dim)",
                    }}
                  >
                    <span className="animate-pulse">Thinking...</span>
                  </div>
                </div>
              )}
              <div ref={bottomRef} />
            </div>

            {/* Input */}
            <div
              className="flex gap-2 p-3 border-t"
              style={{ borderColor: "var(--border)" }}
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKey}
                placeholder="Ask about skills, experience..."
                className="flex-1 px-3 py-2 rounded-sm text-xs font-mono outline-none border transition-all"
                style={{
                  background: "var(--surface-2)",
                  borderColor: "var(--border)",
                  color: "var(--text-primary)",
                }}
                onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(0,255,135,0.4)")}
                onBlur={(e) => (e.currentTarget.style.borderColor = "var(--border)")}
              />
              <button
                onClick={send}
                disabled={loading || !input.trim()}
                className="px-3 py-2 rounded-sm text-xs font-mono transition-all"
                style={{
                  background: loading || !input.trim() ? "var(--surface-2)" : "var(--accent)",
                  color: loading || !input.trim() ? "var(--text-dim)" : "var(--bg)",
                }}
              >
                →
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
