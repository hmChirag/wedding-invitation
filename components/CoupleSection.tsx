"use client";
import { motion } from "framer-motion";
import AnimatedDivider from "./AnimatedDivider";
import FloatingLeaves from "./FloatingLeaves";

function FloralFrame({ side }: { side: "left" | "right" }) {
  const flip = side === "right" ? "scale(-1,1)" : "scale(1,1)";
  return (
    <svg
      width="80"
      height="100"
      viewBox="0 0 80 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ transform: flip }}
      className="absolute top-0 left-0 opacity-40"
    >
      {/* Corner vine */}
      <path
        d="M5 5 Q20 20 15 45 Q10 70 25 90"
        stroke="#A8B5A2"
        strokeWidth="1.5"
        fill="none"
      />
      {/* Leaves along vine */}
      <ellipse cx="12" cy="25" rx="10" ry="5" fill="#A8B5A2" fillOpacity="0.6" transform="rotate(-30 12 25)" />
      <ellipse cx="10" cy="45" rx="9" ry="4" fill="#7E8B78" fillOpacity="0.5" transform="rotate(-10 10 45)" />
      <ellipse cx="18" cy="65" rx="10" ry="4.5" fill="#A8B5A2" fillOpacity="0.55" transform="rotate(20 18 65)" />
      <ellipse cx="22" cy="85" rx="8" ry="4" fill="#7E8B78" fillOpacity="0.45" transform="rotate(30 22 85)" />
      {/* Small flower */}
      <circle cx="8" cy="15" r="5" fill="white" fillOpacity="0.7" />
      {[0,72,144,216,288].map((angle, i) => (
        <ellipse
          key={i}
          cx={8 + 5 * Math.cos((angle * Math.PI) / 180)}
          cy={15 + 5 * Math.sin((angle * Math.PI) / 180)}
          rx="3" ry="2"
          fill="white" fillOpacity="0.65"
        />
      ))}
      <circle cx="8" cy="15" r="2" fill="#EDE6DD" fillOpacity="0.9" />
    </svg>
  );
}

interface PersonCardProps {
  role: string;
  name: string;
  education: string;
  relation: string;
  parents: string;
  delay: number;
}

function PersonCard({ role, name, education, relation, parents, delay }: PersonCardProps) {
  return (
    <motion.div
      className="relative invitation-card p-8 flex-1 min-w-0 text-center overflow-visible"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.9, delay, ease: "easeOut" }}
      whileHover={{ y: -6, boxShadow: "0 16px 60px rgba(107, 94, 83, 0.18)" }}
    >
      {/* Floral corner decorations */}
      <div className="absolute top-0 left-0 pointer-events-none">
        <FloralFrame side="left" />
      </div>
      <div className="absolute top-0 right-0 pointer-events-none" style={{ transform: "scale(-1,1)", transformOrigin: "right top" }}>
        <FloralFrame side="left" />
      </div>

      {/* Role badge */}
      <p className="font-montserrat text-[10px] tracking-[0.3em] uppercase text-olive/70 mb-4">
        {role}
      </p>

      {/* Decorative line */}
      <div className="w-12 h-px bg-gradient-to-r from-transparent via-sage/60 to-transparent mx-auto mb-5" />

      {/* Name */}
      <h3 className="font-script text-4xl text-brown-soft mb-1 leading-tight">
        {name}
      </h3>
      <p className="font-playfair italic text-sm text-olive/70 mb-6">
        {education}
      </p>

      {/* Divider leaf */}
      <div className="flex items-center gap-2 justify-center mb-4">
        <div className="w-8 h-px bg-sage/40" />
        <span className="text-sage text-base">🌿</span>
        <div className="w-8 h-px bg-sage/40" />
      </div>

      {/* Family info */}
      <p className="font-poppins text-xs text-brown-soft/50 mb-2 tracking-wide">
        {relation}
      </p>
      <p className="font-playfair text-sm text-brown-soft/75 leading-relaxed">
        {parents}
      </p>
    </motion.div>
  );
}

export default function CoupleSection() {
  return (
    <section
      id="couple"
      className="relative py-20 overflow-hidden bg-gradient-to-b from-offwhite to-beige/20"
      aria-label="Meet the Couple"
    >
      <FloatingLeaves density="light" />

      <div className="section-container relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-4"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
        >
          <p className="font-montserrat text-xs tracking-[0.3em] uppercase text-olive/60 mb-3">
            Meet The
          </p>
          <h2 className="font-script text-5xl text-brown-soft">
            Couple
          </h2>
        </motion.div>

        <AnimatedDivider variant="ornate" />

        {/* Cards */}
        <div className="flex flex-col sm:flex-row gap-6 mt-8">
          <PersonCard
            role="The Bride"
            name="Shreya H.M"
            education="B.E"
            relation="Daughter of"
            parents="Jyothi B.G & Manjunatha H.P"
            delay={0.1}
          />

          {/* Connector on desktop */}
          <div className="hidden sm:flex flex-col items-center justify-center py-8 px-2">
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.8, ease: "backOut" }}
            >
              <span className="font-script text-4xl text-sage/60">&amp;</span>
            </motion.div>
          </div>

          <PersonCard
            role="The Groom"
            name="Suhas R. Gowda"
            education="M.S (Aus)"
            relation="Son of"
            parents="Mangala & D. Ravikumar"
            delay={0.25}
          />
        </div>

        {/* Mobile & connector */}
        <div className="sm:hidden flex justify-center my-4">
          <span className="font-script text-4xl text-sage/60">&amp;</span>
        </div>
      </div>
    </section>
  );
}
