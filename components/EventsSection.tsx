"use client";
import { motion } from "framer-motion";
import AnimatedDivider from "./AnimatedDivider";
import FloatingLeaves from "./FloatingLeaves";

interface EventCardProps {
  title: string;
  date: string;
  day: string;
  time: string;
  lagnam?: string;
  description: string;
  icon: string;
  delay: number;
}

function EventCard({
  title,
  date,
  day,
  time,
  lagnam,
  description,
  icon,
  delay,
}: EventCardProps) {
  return (
    <motion.div
      className="relative invitation-card p-8 text-center group cursor-default"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.9, delay, ease: "easeOut" }}
      whileHover={{ y: -5 }}
    >
      {/* Watercolor background tint */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-sage/5 to-beige/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Icon */}
      <motion.div
        className="text-4xl mb-4"
        animate={{ y: [0, -4, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        {icon}
      </motion.div>

      {/* Event title */}
      <h3 className="font-script text-4xl text-brown-soft mb-3">{title}</h3>

      <AnimatedDivider variant="simple" />

      {/* Date block */}
      <div className="mt-4 mb-5">
        <p className="font-playfair text-xl font-semibold text-brown-soft">
          {date}
        </p>
        <p className="font-poppins text-xs text-olive/70 mt-1 tracking-wide">
          {day}
        </p>
        <div className="inline-flex items-center gap-2 mt-3 px-4 py-1.5 rounded-full bg-sage/10 border border-sage/20">
          <span className="w-1.5 h-1.5 rounded-full bg-olive/60 flex-shrink-0" />
          <span className="font-montserrat text-xs text-olive/80 tracking-wide">
            {time}
          </span>
        </div>
      </div>

      {/* Lagnam badge if present */}
      {lagnam && (
        <motion.div
          className="mb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: delay + 0.3 }}
        >
          <span className="font-montserrat text-[10px] tracking-[0.25em] uppercase text-olive/60 mr-2">
            Lagnam:
          </span>
          <span className="font-playfair italic text-sm text-brown-soft/75">
            {lagnam}
          </span>
        </motion.div>
      )}

      {/* Description */}
      <p className="font-allura text-xl text-brown-soft/65 leading-relaxed italic">
        "{description}"
      </p>
    </motion.div>
  );
}

export default function EventsSection() {
  return (
    <section
      id="events"
      className="relative py-20 overflow-hidden bg-gradient-to-b from-beige/10 via-offwhite to-beige/20"
      aria-label="Wedding Celebrations"
    >
      <FloatingLeaves density="light" />

      {/* Subtle watercolor splotch */}
      <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-sage/8 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-56 h-56 rounded-full bg-beige/40 blur-3xl pointer-events-none" />

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
            Join Us For
          </p>
          <h2 className="font-script text-5xl text-brown-soft">
            Wedding Celebrations
          </h2>
        </motion.div>

        <AnimatedDivider variant="ornate" />

        {/* Timeline connector on desktop */}
        <div className="flex flex-col sm:flex-row gap-6 mt-8 relative">
          {/* Vertical connector line */}
          <div className="hidden sm:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-sage/30 to-transparent -translate-x-1/2" />

          <EventCard
            title="Reception"
            date="23 June 2026"
            day="Tuesday"
            time="07:30 PM onwards"
            description="Join us for a joyful evening of celebration, laughter, and blessings."
            icon="🌸"
            delay={0.1}
          />

          {/* Mobile divider */}
          <div className="sm:hidden flex justify-center items-center">
            <div className="w-px h-8 bg-gradient-to-b from-sage/30 to-transparent" />
          </div>

          <EventCard
            title="Muhurtham"
            date="24 June 2026"
            day="Wednesday"
            time="9:00 AM – 10:00 AM"
            lagnam="Karkataka"
            description="The sacred union of two souls blessed by family and love."
            icon="🪷"
            delay={0.25}
          />
        </div>

        {/* Bottom note */}
        <motion.div
          className="text-center mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <p className="font-playfair italic text-sm text-brown-soft/50">
            We look forward to your warm presence and blessings
          </p>
        </motion.div>
      </div>
    </section>
  );
}
