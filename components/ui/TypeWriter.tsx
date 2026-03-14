"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface TypeWriterProps {
  phrases: string[];
  className?: string;
}

export default function TypeWriter({ phrases, className = "" }: TypeWriterProps) {
  const [displayed, setDisplayed] = useState("");
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const current = phrases[phraseIdx];

    if (!isDeleting) {
      if (charIdx < current.length) {
        timeoutRef.current = setTimeout(() => {
          setDisplayed(current.slice(0, charIdx + 1));
          setCharIdx((c) => c + 1);
        }, 60);
      } else {
        timeoutRef.current = setTimeout(() => setIsDeleting(true), 2000);
      }
    } else {
      if (charIdx > 0) {
        timeoutRef.current = setTimeout(() => {
          setDisplayed(current.slice(0, charIdx - 1));
          setCharIdx((c) => c - 1);
        }, 35);
      } else {
        setIsDeleting(false);
        setPhraseIdx((i) => (i + 1) % phrases.length);
      }
    }

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [charIdx, isDeleting, phraseIdx, phrases]);

  return (
    <span className={className}>
      <span style={{ color: "var(--accent)" }}>{displayed}</span>
      <span className="cursor-blink" style={{ color: "var(--accent)" }}>
        _
      </span>
    </span>
  );
}
