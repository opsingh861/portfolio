"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [trail, setTrail] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      const el = e.target as HTMLElement;
      setIsPointer(
        window.getComputedStyle(el).cursor === "pointer" ||
          el.tagName === "A" ||
          el.tagName === "BUTTON"
      );
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setTrail(pos), 60);
    return () => clearTimeout(timer);
  }, [pos]);

  return (
    <>
      {/* Main crosshair dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
        style={{ x: pos.x - 4, y: pos.y - 4 }}
        animate={{ scale: isPointer ? 2 : 1 }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      >
        <div
          className="w-2 h-2 rounded-full"
          style={{ background: "var(--accent)" }}
        />
      </motion.div>

      {/* Trailing ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998]"
        style={{ x: trail.x - 16, y: trail.y - 16 }}
        transition={{ type: "spring", stiffness: 150, damping: 20 }}
      >
        <div
          className="w-8 h-8 rounded-full border opacity-50"
          style={{ borderColor: "var(--accent)" }}
        />
      </motion.div>
    </>
  );
}
