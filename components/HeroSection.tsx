"use client";
import { motion } from "framer-motion";
import FloatingLeaves from "./FloatingLeaves";
import AnimatedDivider from "./AnimatedDivider";

// Top floral crown SVG illustration
function FloralCrown() {
  return (
    <div className="relative w-full flex justify-center">
      <svg
        viewBox="0 0 360 180"
        className="w-full max-w-sm"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Large background leaves - left cluster */}
        <ellipse cx="60" cy="80" rx="42" ry="22" fill="#7E8B78" fillOpacity="0.35" transform="rotate(-35 60 80)" />
        <ellipse cx="40" cy="90" rx="38" ry="18" fill="#A8B5A2" fillOpacity="0.4" transform="rotate(-50 40 90)" />
        <ellipse cx="80" cy="100" rx="35" ry="16" fill="#5C6657" fillOpacity="0.3" transform="rotate(-20 80 100)" />

        {/* Large background leaves - right cluster */}
        <ellipse cx="300" cy="80" rx="42" ry="22" fill="#7E8B78" fillOpacity="0.35" transform="rotate(35 300 80)" />
        <ellipse cx="320" cy="90" rx="38" ry="18" fill="#A8B5A2" fillOpacity="0.4" transform="rotate(50 320 90)" />
        <ellipse cx="280" cy="100" rx="35" ry="16" fill="#5C6657" fillOpacity="0.3" transform="rotate(20 280 100)" />

        {/* Center top leaves */}
        <ellipse cx="155" cy="50" rx="30" ry="14" fill="#A8B5A2" fillOpacity="0.5" transform="rotate(-15 155 50)" />
        <ellipse cx="205" cy="50" rx="30" ry="14" fill="#A8B5A2" fillOpacity="0.5" transform="rotate(15 205 50)" />
        <ellipse cx="180" cy="35" rx="25" ry="12" fill="#7E8B78" fillOpacity="0.55" transform="rotate(0 180 35)" />
        <ellipse cx="145" cy="70" rx="28" ry="13" fill="#9EA98A" fillOpacity="0.45" transform="rotate(-25 145 70)" />
        <ellipse cx="215" cy="70" rx="28" ry="13" fill="#9EA98A" fillOpacity="0.45" transform="rotate(25 215 70)" />

        {/* White flowers - left */}
        <circle cx="75" cy="65" r="14" fill="white" fillOpacity="0.85" />
        <circle cx="75" cy="65" r="8" fill="white" fillOpacity="0.95" />
        {[0,60,120,180,240,300].map((angle, i) => (
          <ellipse
            key={i}
            cx={75 + 12 * Math.cos((angle * Math.PI) / 180)}
            cy={65 + 12 * Math.sin((angle * Math.PI) / 180)}
            rx="7" ry="5"
            fill="white" fillOpacity="0.9"
            transform={`rotate(${angle} ${75 + 12 * Math.cos((angle * Math.PI) / 180)} ${65 + 12 * Math.sin((angle * Math.PI) / 180)})`}
          />
        ))}
        <circle cx="75" cy="65" r="4" fill="#EDE6DD" fillOpacity="0.9" />

        {/* White flowers - right */}
        <circle cx="285" cy="65" r="14" fill="white" fillOpacity="0.85" />
        <circle cx="285" cy="65" r="8" fill="white" fillOpacity="0.95" />
        {[0,60,120,180,240,300].map((angle, i) => (
          <ellipse
            key={i}
            cx={285 + 12 * Math.cos((angle * Math.PI) / 180)}
            cy={65 + 12 * Math.sin((angle * Math.PI) / 180)}
            rx="7" ry="5"
            fill="white" fillOpacity="0.9"
            transform={`rotate(${angle} ${285 + 12 * Math.cos((angle * Math.PI) / 180)} ${65 + 12 * Math.sin((angle * Math.PI) / 180)})`}
          />
        ))}
        <circle cx="285" cy="65" r="4" fill="#EDE6DD" fillOpacity="0.9" />

        {/* Center white flower cluster */}
        <circle cx="180" cy="55" r="16" fill="white" fillOpacity="0.9" />
        {[0,45,90,135,180,225,270,315].map((angle, i) => (
          <ellipse
            key={i}
            cx={180 + 14 * Math.cos((angle * Math.PI) / 180)}
            cy={55 + 14 * Math.sin((angle * Math.PI) / 180)}
            rx="8" ry="5"
            fill="white" fillOpacity="0.85"
            transform={`rotate(${angle} ${180 + 14 * Math.cos((angle * Math.PI) / 180)} ${55 + 14 * Math.sin((angle * Math.PI) / 180)})`}
          />
        ))}
        <circle cx="180" cy="55" r="5" fill="#EDE6DD" />

        {/* Small accent flowers */}
        <circle cx="120" cy="75" r="8" fill="white" fillOpacity="0.8" />
        {[0,72,144,216,288].map((angle, i) => (
          <ellipse
            key={i}
            cx={120 + 7 * Math.cos((angle * Math.PI) / 180)}
            cy={75 + 7 * Math.sin((angle * Math.PI) / 180)}
            rx="4" ry="3"
            fill="white" fillOpacity="0.85"
          />
        ))}
        <circle cx="240" cy="75" r="8" fill="white" fillOpacity="0.8" />
        {[0,72,144,216,288].map((angle, i) => (
          <ellipse
            key={i}
            cx={240 + 7 * Math.cos((angle * Math.PI) / 180)}
            cy={75 + 7 * Math.sin((angle * Math.PI) / 180)}
            rx="4" ry="3"
            fill="white" fillOpacity="0.85"
          />
        ))}

        {/* Tiny fern-like stems */}
        <path d="M30 120 Q40 80 55 60" stroke="#5C6657" strokeWidth="1.2" strokeOpacity="0.6" fill="none"/>
        <path d="M330 120 Q320 80 305 60" stroke="#5C6657" strokeWidth="1.2" strokeOpacity="0.6" fill="none"/>
        <path d="M55 60 Q50 45 48 35" stroke="#7E8B78" strokeWidth="1" strokeOpacity="0.5" fill="none"/>
        <path d="M305 60 Q310 45 312 35" stroke="#7E8B78" strokeWidth="1" strokeOpacity="0.5" fill="none"/>
      </svg>
    </div>
  );
}

// Wedding rings SVG
function WeddingRings() {
  return (
    <svg
      width="60"
      height="40"
      viewBox="0 0 60 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="inline-block"
    >
      <circle cx="22" cy="20" r="14" stroke="#C19A6B" strokeWidth="2.5" fill="none" strokeOpacity="0.85"/>
      <circle cx="38" cy="20" r="14" stroke="#C19A6B" strokeWidth="2.5" fill="none" strokeOpacity="0.85"/>
      <circle cx="22" cy="20" r="10" stroke="#D4AF87" strokeWidth="0.8" fill="none" strokeOpacity="0.5"/>
      <circle cx="38" cy="20" r="10" stroke="#D4AF87" strokeWidth="0.8" fill="none" strokeOpacity="0.5"/>
      {/* Diamond on left ring */}
      <path d="M22 8 L25 12 L22 16 L19 12 Z" fill="#D4AF87" fillOpacity="0.8"/>
      {/* Sparkles */}
      <path d="M10 8 L10.5 10 L12 10.5 L10.5 11 L10 13 L9.5 11 L8 10.5 L9.5 10 Z" fill="#C19A6B" fillOpacity="0.6"/>
      <path d="M50 8 L50.3 9.5 L52 9.8 L50.3 10.1 L50 11.6 L49.7 10.1 L48 9.8 L49.7 9.5 Z" fill="#C19A6B" fillOpacity="0.6"/>
    </svg>
  );
}

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-start overflow-hidden bg-offwhite"
      aria-label="Wedding Hero"
    >
      <FloatingLeaves density="light" />

      {/* Soft radial glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-beige/30 via-transparent to-offwhite/50 pointer-events-none" />

      {/* Floral Crown Top */}
      <motion.div
        className="w-full -mt-4"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <FloralCrown />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 -mt-6 pb-16">
        {/* Save the Date badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.9 }}
        >
          <span className="inline-block font-montserrat text-xs font-medium tracking-[0.3em] uppercase text-olive/80 mb-3 px-5 py-1.5 border border-sage/40 rounded-full bg-white/50 backdrop-blur-sm">
            Save The Date
          </span>
        </motion.div>

        {/* Names */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="mt-2 mb-1"
        >
          <h1 className="font-script text-[3.5rem] leading-none text-brown-soft text-shadow-soft whitespace-nowrap">
            Shreya H.M
          </h1>
          <p className="font-playfair text-olive/70 text-base tracking-[0.2em] uppercase my-1">
            &amp;
          </p>
          <h1 className="font-script text-[3.5rem] leading-none text-brown-soft text-shadow-soft whitespace-nowrap">
            Suhas R.Gowda
          </h1>
        </motion.div>

        {/* Wedding rings illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.9, duration: 0.8, ease: "backOut" }}
          className="my-3"
        >
          <WeddingRings />
        </motion.div>

        {/* Invitation text */}
        <motion.p
          className="font-allura text-xl text-brown-soft/75 leading-relaxed max-w-xs mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 1 }}
        >
          "With joyful hearts and the blessings of our families, we invite you to celebrate our wedding."
        </motion.p>

        <AnimatedDivider variant="ornate" />

        {/* Ceremony Details */}
        <motion.div
          className="space-y-5 mt-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.9 }}
        >
          <div>
            <p className="font-montserrat text-xs tracking-[0.25em] uppercase text-olive/70 mb-1">
              Wedding Ceremony
            </p>
            <p className="font-playfair text-2xl font-semibold text-brown-soft">
              24 June 2026
            </p>
            <p className="font-poppins text-sm text-brown-soft/70 mt-0.5">
              Wednesday &bull; 9:00 AM – 10:00 AM
            </p>
          </div>

          <AnimatedDivider variant="simple" />

          <div>
            <p className="font-montserrat text-xs tracking-[0.25em] uppercase text-olive/70 mb-1">
              Venue
            </p>
            <p className="font-playfair text-xl font-medium text-brown-soft">
              Jnanakshi Kalyana Mantapa
            </p>
            <p className="font-poppins text-sm text-brown-soft/60 mt-0.5">
              B.M. Road, Hassan, Karnataka
            </p>
          </div>
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          className="mt-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
        >
          <motion.div
            className="flex flex-col items-center gap-1"
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="font-montserrat text-[10px] tracking-[0.2em] uppercase text-sage/60">
              Scroll
            </span>
            <svg
              width="16"
              height="24"
              viewBox="0 0 16 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="1" y="1" width="14" height="22"
                rx="7"
                stroke="#A8B5A2"
                strokeWidth="1.5"
                strokeOpacity="0.5"
              />
              <motion.circle
                cx="8" cy="7" r="2.5"
                fill="#A8B5A2"
                fillOpacity="0.6"
                animate={{ cy: [7, 14, 7] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
