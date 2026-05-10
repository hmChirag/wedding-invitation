"use client";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

const LEAVES = [
  { top: "5%", left: "2%", size: 52, delay: 0, duration: 7, rotate: 15 },
  { top: "12%", right: "3%", size: 40, delay: 1.5, duration: 9, rotate: -20 },
  { top: "28%", left: "5%", size: 35, delay: 0.8, duration: 8, rotate: 35 },
  { top: "45%", right: "6%", size: 45, delay: 2.2, duration: 6, rotate: -10 },
  { top: "60%", left: "3%", size: 30, delay: 3, duration: 10, rotate: 25 },
  { top: "75%", right: "4%", size: 38, delay: 1, duration: 7.5, rotate: -30 },
  { top: "88%", left: "6%", size: 42, delay: 2.5, duration: 8.5, rotate: 10 },
  { top: "20%", left: "50%", size: 28, delay: 4, duration: 11, rotate: 45 },
];

function LeafSVG({
  size,
  rotate,
  color = "#A8B5A2",
}: {
  size: number;
  rotate: number;
  color?: string;
}) {
  return (
    <svg
      width={size}
      height={size * 1.4}
      viewBox="0 0 40 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      <path
        d="M20 54C20 54 4 40 4 22C4 12.06 11.16 4 20 4C28.84 4 36 12.06 36 22C36 40 20 54 20 54Z"
        fill={color}
        fillOpacity="0.35"
      />
      <path
        d="M20 54C20 54 4 40 4 22C4 12.06 11.16 4 20 4"
        stroke={color}
        strokeWidth="0.8"
        strokeOpacity="0.5"
        fill="none"
      />
      <path
        d="M20 8 L20 52"
        stroke={color}
        strokeWidth="0.8"
        strokeOpacity="0.4"
      />
      <path
        d="M20 20 Q28 18 34 22"
        stroke={color}
        strokeWidth="0.6"
        strokeOpacity="0.3"
        fill="none"
      />
      <path
        d="M20 30 Q12 28 6 32"
        stroke={color}
        strokeWidth="0.6"
        strokeOpacity="0.3"
        fill="none"
      />
    </svg>
  );
}

export default function FloatingLeaves({
  density = "normal",
}: {
  density?: "light" | "normal" | "dense";
}) {
  const prefersReducedMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || prefersReducedMotion) return null;

  const count = density === "light" ? 4 : density === "dense" ? 8 : 6;
  const leaves = LEAVES.slice(0, count);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden z-0">
      {leaves.map((leaf, i) => (
        <motion.div
          key={i}
          className="absolute opacity-0"
          style={{
            top: leaf.top,
            left: "left" in leaf ? leaf.left : undefined,
            right: "right" in leaf ? (leaf as { right: string }).right : undefined,
          }}
          animate={{
            y: [0, -20, -8, -18, 0],
            x: [0, 5, -3, 7, 0],
            rotate: [0, 3, -2, 4, 0],
            opacity: [0.5, 0.8, 0.6, 0.8, 0.5],
          }}
          transition={{
            duration: leaf.duration,
            delay: leaf.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <LeafSVG size={leaf.size} rotate={leaf.rotate} />
        </motion.div>
      ))}
    </div>
  );
}
