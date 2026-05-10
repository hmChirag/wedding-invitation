"use client";
import { motion } from "framer-motion";
import AnimatedDivider from "./AnimatedDivider";

function FloralBottom() {
  return (
    <div className="w-full flex justify-center mt-10 opacity-60">
      <svg
        viewBox="0 0 360 100"
        className="w-full max-w-sm"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Left cluster */}
        <ellipse cx="60" cy="80" rx="36" ry="18" fill="#7E8B78" fillOpacity="0.3" transform="rotate(30 60 80)" />
        <ellipse cx="40" cy="90" rx="30" ry="14" fill="#A8B5A2" fillOpacity="0.35" transform="rotate(45 40 90)" />
        <ellipse cx="80" cy="95" rx="28" ry="12" fill="#5C6657" fillOpacity="0.25" transform="rotate(15 80 95)" />

        {/* Right cluster */}
        <ellipse cx="300" cy="80" rx="36" ry="18" fill="#7E8B78" fillOpacity="0.3" transform="rotate(-30 300 80)" />
        <ellipse cx="320" cy="90" rx="30" ry="14" fill="#A8B5A2" fillOpacity="0.35" transform="rotate(-45 320 90)" />
        <ellipse cx="280" cy="95" rx="28" ry="12" fill="#5C6657" fillOpacity="0.25" transform="rotate(-15 280 95)" />

        {/* Center */}
        <ellipse cx="155" cy="90" rx="25" ry="10" fill="#A8B5A2" fillOpacity="0.3" transform="rotate(-10 155 90)" />
        <ellipse cx="205" cy="90" rx="25" ry="10" fill="#A8B5A2" fillOpacity="0.3" transform="rotate(10 205 90)" />
        <ellipse cx="180" cy="85" rx="22" ry="10" fill="#7E8B78" fillOpacity="0.35" />

        {/* Small white flowers */}
        <circle cx="75" cy="68" r="10" fill="white" fillOpacity="0.75" />
        {[0,60,120,180,240,300].map((angle, i) => (
          <ellipse
            key={i}
            cx={75 + 9 * Math.cos((angle * Math.PI) / 180)}
            cy={68 + 9 * Math.sin((angle * Math.PI) / 180)}
            rx="5" ry="3"
            fill="white" fillOpacity="0.7"
          />
        ))}
        <circle cx="285" cy="68" r="10" fill="white" fillOpacity="0.75" />
        {[0,60,120,180,240,300].map((angle, i) => (
          <ellipse
            key={i}
            cx={285 + 9 * Math.cos((angle * Math.PI) / 180)}
            cy={68 + 9 * Math.sin((angle * Math.PI) / 180)}
            rx="5" ry="3"
            fill="white" fillOpacity="0.7"
          />
        ))}
        <circle cx="180" cy="72" r="12" fill="white" fillOpacity="0.8" />
        {[0,45,90,135,180,225,270,315].map((angle, i) => (
          <ellipse
            key={i}
            cx={180 + 10 * Math.cos((angle * Math.PI) / 180)}
            cy={72 + 10 * Math.sin((angle * Math.PI) / 180)}
            rx="6" ry="3.5"
            fill="white" fillOpacity="0.75"
          />
        ))}
        <circle cx="180" cy="72" r="3.5" fill="#EDE6DD" />
      </svg>
    </div>
  );
}

function HeartSwirl() {
  return (
    <svg
      width="120"
      height="50"
      viewBox="0 0 120 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="mx-auto my-2 opacity-60"
    >
      {/* Heart */}
      <path
        d="M60 40 C60 40 40 28 40 18 C40 12 45 8 50 10 C54 11.5 58 15 60 18 C62 15 66 11.5 70 10 C75 8 80 12 80 18 C80 28 60 40 60 40Z"
        stroke="#A8B5A2"
        strokeWidth="1.5"
        fill="none"
      />
      {/* Left swirl */}
      <path
        d="M2 25 Q20 15 38 18"
        stroke="#A8B5A2"
        strokeWidth="1"
        fill="none"
      />
      {/* Right swirl */}
      <path
        d="M82 18 Q100 15 118 25"
        stroke="#A8B5A2"
        strokeWidth="1"
        fill="none"
      />
      <circle cx="2" cy="25" r="2" fill="#A8B5A2" fillOpacity="0.6" />
      <circle cx="118" cy="25" r="2" fill="#A8B5A2" fillOpacity="0.6" />
    </svg>
  );
}

export default function FooterSection() {
  return (
    <footer
      id="footer"
      className="relative overflow-hidden bg-gradient-to-b from-beige/20 via-offwhite to-beige/30 pb-0"
      aria-label="Footer"
    >
      <div className="section-container relative z-10 text-center pb-4">
        {/* Thank You */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <p className="font-montserrat text-xs tracking-[0.3em] uppercase text-olive/60 mb-3">
            With Love &amp; Gratitude
          </p>
          <h2 className="font-script text-6xl text-brown-soft">
            Thank You
          </h2>
        </motion.div>

        <AnimatedDivider variant="ornate" />

        {/* Quote */}
        <motion.p
          className="font-allura text-2xl text-brown-soft/70 italic mt-4 leading-relaxed max-w-xs mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          "Two souls, one heart, and a lifetime of togetherness."
        </motion.p>

        {/* Heart swirl */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8, ease: "backOut" }}
        >
          <HeartSwirl />
        </motion.div>

        {/* Hashtag */}
        <motion.div
          className="mt-4 mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7, duration: 0.9 }}
        >
          <span className="font-playfair italic text-xl text-olive/80 tracking-wide">
            #ShreyaWedsSuhas
          </span>
        </motion.div>

        <AnimatedDivider variant="simple" />

        {/* Closing */}
        <motion.p
          className="font-script text-3xl text-brown-soft/60 mt-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.9, duration: 1 }}
        >
          And so the adventure begins…
        </motion.p>

        <motion.p
          className="font-poppins text-xs text-brown-soft/35 mt-6 mb-6 tracking-wide"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.1, duration: 1 }}
        >
          24 June 2026 &bull; Hassan, Karnataka
        </motion.p>
      </div>

      {/* Floral bottom border */}
      <FloralBottom />
    </footer>
  );
}
