"use client";
import { motion } from "framer-motion";
import AnimatedDivider from "./AnimatedDivider";

function OmSymbol() {
  return (
    <div className="flex flex-col items-center gap-1 mb-6">
      <span className="font-playfair text-3xl text-olive/60" aria-hidden="true">
        ॐ
      </span>
      <div className="w-16 h-px bg-gradient-to-r from-transparent via-sage/50 to-transparent" />
    </div>
  );
}

function DecorativeBorder() {
  return (
    <div className="absolute inset-3 border border-sage/20 rounded-2xl pointer-events-none" />
  );
}

function CornerLeaf({ position }: { position: "tl" | "tr" | "bl" | "br" }) {
  const rotations: Record<string, string> = {
    tl: "rotate(0deg)",
    tr: "rotate(90deg) scaleX(-1)",
    bl: "rotate(-90deg)",
    br: "rotate(180deg)",
  };
  const pos: Record<string, string> = {
    tl: "top-4 left-4",
    tr: "top-4 right-4",
    bl: "bottom-4 left-4",
    br: "bottom-4 right-4",
  };

  return (
    <div className={`absolute ${pos[position]} opacity-25 pointer-events-none`}>
      <svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        style={{ transform: rotations[position] }}
      >
        <path
          d="M4 32 Q4 4 32 4"
          stroke="#7E8B78"
          strokeWidth="1.2"
          fill="none"
        />
        <ellipse cx="12" cy="14" rx="8" ry="4" fill="#A8B5A2" fillOpacity="0.8" transform="rotate(-45 12 14)" />
        <ellipse cx="20" cy="8" rx="7" ry="3.5" fill="#7E8B78" fillOpacity="0.7" transform="rotate(-20 20 8)" />
        <circle cx="8" cy="8" r="2" fill="#A8B5A2" fillOpacity="0.6" />
      </svg>
    </div>
  );
}

export default function InvitationSection() {
  return (
    <section
      id="invitation"
      className="relative py-20 overflow-hidden bg-gradient-to-b from-beige/20 via-offwhite to-beige/10"
      aria-label="Wedding Invitation Message"
    >
      {/* Soft background texture */}
      <div className="absolute inset-0 bg-botanical-texture pointer-events-none" />

      <div className="section-container relative z-10">
        {/* Section header */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
        >
          <p className="font-montserrat text-xs tracking-[0.3em] uppercase text-olive/60 mb-3">
            A Sacred Occasion
          </p>
          <h2 className="font-script text-5xl text-brown-soft">
            Wedding Invitation
          </h2>
        </motion.div>

        <AnimatedDivider variant="ornate" />

        {/* Main invitation card */}
        <motion.div
          className="relative invitation-card px-8 py-12 mt-8 text-center"
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Inner border */}
          <DecorativeBorder />

          {/* Corner leaves */}
          <CornerLeaf position="tl" />
          <CornerLeaf position="tr" />
          <CornerLeaf position="bl" />
          <CornerLeaf position="br" />

          {/* Om / Deity blessing */}
          <OmSymbol />

          {/* Deity name */}
          <motion.div
            className="mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.9 }}
          >
            <p className="font-playfair italic text-sm text-brown-soft/60 leading-relaxed">
              With the divine blessings of
            </p>
            <p className="font-playfair font-semibold text-base text-brown-soft/80 mt-1">
              Sri Lakshmi Venkateshwara Prasanna
            </p>
          </motion.div>

          <div className="w-20 h-px bg-gradient-to-r from-transparent via-sage/40 to-transparent mx-auto mb-6" />

          {/* Main invitation text */}
          <motion.p
            className="font-allura text-2xl text-brown-soft/85 leading-relaxed mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            "and the love of our families,<br />
            we cordially invite you and your family<br />
            to grace the auspicious wedding ceremony"
          </motion.p>

          {/* Couple names */}
          <motion.div
            className="my-6"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7, duration: 0.9 }}
          >
            <span className="font-script text-5xl text-brown-soft block">
              Shreya
            </span>
            <span className="font-playfair italic text-sage text-base block my-1">
              weds
            </span>
            <span className="font-script text-5xl text-brown-soft block">
              Suhas
            </span>
          </motion.div>

          <div className="w-20 h-px bg-gradient-to-r from-transparent via-sage/40 to-transparent mx-auto mt-6" />

          {/* Closing sentiment */}
          <motion.p
            className="font-poppins text-xs text-brown-soft/50 mt-4 tracking-wide"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.9, duration: 0.9 }}
          >
            Your presence will make our celebration complete
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
