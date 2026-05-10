"use client";
import { motion } from "framer-motion";

interface AnimatedDividerProps {
  className?: string;
  variant?: "simple" | "floral" | "ornate";
}

function FloralOrnament() {
  return (
    <svg
      width="80"
      height="20"
      viewBox="0 0 80 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Center diamond */}
      <path d="M40 6 L44 10 L40 14 L36 10 Z" fill="#A8B5A2" fillOpacity="0.6" />
      {/* Left swirl */}
      <path
        d="M36 10 C28 10 20 6 12 8 C8 9 4 11 2 10"
        stroke="#A8B5A2"
        strokeWidth="0.8"
        strokeOpacity="0.7"
        fill="none"
      />
      {/* Right swirl */}
      <path
        d="M44 10 C52 10 60 6 68 8 C72 9 76 11 78 10"
        stroke="#A8B5A2"
        strokeWidth="0.8"
        strokeOpacity="0.7"
        fill="none"
      />
      {/* Left dot */}
      <circle cx="2" cy="10" r="1.5" fill="#A8B5A2" fillOpacity="0.5" />
      {/* Right dot */}
      <circle cx="78" cy="10" r="1.5" fill="#A8B5A2" fillOpacity="0.5" />
      {/* Small leaves */}
      <path
        d="M20 8 C22 5 24 5 24 8 C24 11 22 11 20 8Z"
        fill="#7E8B78"
        fillOpacity="0.4"
      />
      <path
        d="M60 8 C58 5 56 5 56 8 C56 11 58 11 60 8Z"
        fill="#7E8B78"
        fillOpacity="0.4"
      />
    </svg>
  );
}

function SimpleOrnament() {
  return (
    <svg
      width="60"
      height="16"
      viewBox="0 0 60 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="30" cy="8" r="2" fill="#A8B5A2" fillOpacity="0.7" />
      <circle cx="22" cy="8" r="1.2" fill="#A8B5A2" fillOpacity="0.5" />
      <circle cx="38" cy="8" r="1.2" fill="#A8B5A2" fillOpacity="0.5" />
      <path
        d="M2 8 L18 8"
        stroke="#A8B5A2"
        strokeWidth="0.8"
        strokeOpacity="0.5"
      />
      <path
        d="M42 8 L58 8"
        stroke="#A8B5A2"
        strokeWidth="0.8"
        strokeOpacity="0.5"
      />
    </svg>
  );
}

export default function AnimatedDivider({
  className = "",
  variant = "floral",
}: AnimatedDividerProps) {
  return (
    <motion.div
      className={`flex items-center justify-center gap-3 my-8 ${className}`}
      initial={{ opacity: 0, scaleX: 0.5 }}
      whileInView={{ opacity: 1, scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {variant === "ornate" && (
        <>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-sage to-transparent opacity-40" />
          <FloralOrnament />
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-sage to-transparent opacity-40" />
        </>
      )}

      {variant === "floral" && (
        <div className="flex items-center gap-2">
          <div className="w-16 h-px bg-gradient-to-r from-transparent to-sage/50" />
          <SimpleOrnament />
          <div className="w-16 h-px bg-gradient-to-l from-transparent to-sage/50" />
        </div>
      )}

      {variant === "simple" && (
        <div className="flex items-center gap-3 w-full max-w-xs">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-sage/40 to-transparent" />
          <span className="text-sage text-lg">✦</span>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-sage/40 to-transparent" />
        </div>
      )}
    </motion.div>
  );
}
