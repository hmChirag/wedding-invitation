"use client";
import { motion } from "framer-motion";
import AnimatedDivider from "./AnimatedDivider";
import FloatingLeaves from "./FloatingLeaves";

const MAPS_URL =
  "https://maps.google.com/?q=Jnanakshi+Kalyana+Mantapa+Hassan";
const WHATSAPP_URL = "https://wa.me/?text=We%20will%20be%20attending%20the%20wedding%20of%20Shreya%20%26%20Suhas%20on%2024%20June%202026.";
const CALENDAR_URL = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=Shreya+%26+Suhas+Wedding&dates=20260624T033000Z/20260624T043000Z&details=Wedding+ceremony+of+Shreya+%26+Suhas&location=Jnanakshi+Kalyana+Mantapa,+B.M.+Road,+Hassan,+Karnataka`;



function ActionButton({
  href,
  icon,
  label,
  color = "default",
}: {
  href: string;
  icon: string;
  label: string;
  color?: "default" | "green" | "gold";
}) {
  const colors: Record<string, string> = {
    default: "bg-white/70 border-sage/40 text-brown-soft hover:bg-sage/15 hover:border-sage",
    green: "bg-green-50/80 border-green-300/50 text-green-800 hover:bg-green-100 hover:border-green-400",
    gold: "bg-amber-50/80 border-amber-300/50 text-amber-800 hover:bg-amber-100 hover:border-amber-400",
  };

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full border backdrop-blur-sm font-montserrat font-medium text-sm tracking-wide transition-all duration-300 shadow-botanical flex-1 ${colors[color]}`}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
    >
      <span>{icon}</span>
      <span>{label}</span>
    </motion.a>
  );
}

export default function VenueSection() {
  return (
    <section
      id="venue"
      className="relative py-20 overflow-hidden bg-gradient-to-b from-beige/20 via-offwhite to-beige/10"
      aria-label="Venue Details"
    >
      <FloatingLeaves density="light" />

      <div className="section-container relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
        >
          <p className="font-montserrat text-xs tracking-[0.3em] uppercase text-olive/60 mb-3">
            Find Us At
          </p>
          <h2 className="font-script text-5xl text-brown-soft">
            Venue Details
          </h2>
        </motion.div>

        <AnimatedDivider variant="ornate" />

        {/* Venue card */}
        <motion.div
          className="invitation-card overflow-hidden mt-10"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Map embed — taller for a better view */}
          <div className="relative w-full h-56 sm:h-64 bg-beige overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3877.4!2d76.1!3d13.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbad4f5dc6c9c5b%3A0x37b9e5c2aa6b5e70!2sJnanakshi+Kalyana+Mantapa%2C+BM+Road%2C+Hassan%2C+Karnataka!5e0!3m2!1sen!2sin!4v1699000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "sepia(20%) saturate(0.8) hue-rotate(10deg)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Jnanakshi Kalyana Mantapa, Hassan"
              className="w-full h-full"
            />
            {/* Fade into card below */}
            <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-offwhite/60 to-transparent pointer-events-none" />
          </div>

          {/* Venue info */}
          <div className="px-8 pt-8 pb-10 text-center flex flex-col items-center gap-0">

            {/* Pin icon */}
            <motion.span
              className="text-2xl mb-4"
              initial={{ opacity: 0, y: -8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.7 }}
            >
              📍
            </motion.span>

            {/* Venue name */}
            <h3 className="font-playfair text-2xl font-semibold text-brown-soft leading-snug">
              Jnanakshi Kalyana Mantapa
            </h3>

            {/* Address */}
            <p className="font-poppins text-sm text-brown-soft/55 mt-2 mb-8 tracking-wide">
              B.M. Road, Hassan, Karnataka
            </p>

            <AnimatedDivider variant="simple" />

            {/* Action buttons */}
            <div className="flex flex-row gap-3 justify-center mt-8 w-full">
              <ActionButton
                href={MAPS_URL}
                icon="🗺️"
                label="Open in Maps"
              />
              <ActionButton
                href={CALENDAR_URL}
                icon="📅"
                label="Add to Calendar"
                color="gold"
              />
            </div>

            {/* Quote */}
            <motion.div
              className="mt-10 pt-8 border-t border-beige-dark/25 w-full"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 1 }}
            >
              <p className="font-allura text-2xl text-brown-soft/65 italic leading-relaxed">
                "A beautiful journey written by destiny and guided by love."
              </p>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
