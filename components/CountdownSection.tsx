// "use client";
// import { motion, useInView } from "framer-motion";
// import { useEffect, useRef, useState } from "react";
// import FloatingLeaves from "./FloatingLeaves";
// import AnimatedDivider from "./AnimatedDivider";

// const WEDDING_DATE = new Date("2026-06-24T09:00:00+05:30");

// interface TimeLeft {
//   days: number;
//   hours: number;
//   minutes: number;
//   seconds: number;
// }

// function getTimeLeft(): TimeLeft {
//   const now = new Date();
//   const diff = Math.max(0, WEDDING_DATE.getTime() - now.getTime());
//   return {
//     days: Math.floor(diff / (1000 * 60 * 60 * 24)),
//     hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
//     minutes: Math.floor((diff / (1000 * 60)) % 60),
//     seconds: Math.floor((diff / 1000) % 60),
//   };
// }

// function CountUnit({
//   value,
//   label,
//   delay,
// }: {
//   value: number;
//   label: string;
//   delay: number;
// }) {
//   const [flip, setFlip] = useState(false);

//   useEffect(() => {
//     setFlip(true);
//     const t = setTimeout(() => setFlip(false), 300);
//     return () => clearTimeout(t);
//   }, [value]);

//   return (
//     <motion.div
//       className="flex flex-col items-center gap-2"
//       initial={{ opacity: 0, y: 30 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{ delay, duration: 0.8 }}
//     >
//       <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24">
//         {/* Frosted glass card */}
//         <div className="absolute inset-0 rounded-2xl bg-white/60 backdrop-blur-md border border-white/70 shadow-glass" />
//         {/* Subtle inner glow */}
//         <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/40 to-transparent" />
//         <motion.div
//           className="relative z-10 h-full flex items-center justify-center"
//           animate={flip ? { scale: [1, 0.85, 1], opacity: [1, 0.4, 1] } : {}}
//           transition={{ duration: 0.3 }}
//         >
//           <span
//             className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-brown-soft"
//             suppressHydrationWarning
//           >
//             {String(value).padStart(2, "0")}
//           </span>
//         </motion.div>
//       </div>
//       <span className="font-montserrat text-[10px] sm:text-xs tracking-[0.2em] uppercase text-olive/70">
//         {label}
//       </span>
//     </motion.div>
//   );
// }

// export default function CountdownSection() {
//   const [timeLeft, setTimeLeft] = useState<TimeLeft>(getTimeLeft());
//   const ref = useRef<HTMLDivElement>(null);
//   const inView = useInView(ref, { once: false, margin: "-50px" });

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setTimeLeft(getTimeLeft());
//     }, 1000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section
//       id="countdown"
//       ref={ref}
//       className="relative py-20 overflow-hidden bg-gradient-to-b from-offwhite via-beige/30 to-offwhite"
//       aria-label="Wedding Countdown"
//     >
//       <FloatingLeaves density="light" />

//       {/* Soft circular glow */}
//       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-sage/10 blur-3xl pointer-events-none" />

//       <div className="section-container relative z-10">
//         {/* Title */}
//         <motion.div
//           className="text-center mb-12"
//           initial={{ opacity: 0, y: 24 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.9 }}
//         >
//           <p className="font-montserrat text-xs tracking-[0.3em] uppercase text-olive/60 mb-3">
//             Counting Down To
//           </p>
//           <h2 className="font-script text-5xl text-brown-soft">
//             Forever
//           </h2>
//         </motion.div>

//         <AnimatedDivider variant="floral" />

//         {/* Countdown cards */}
//         <div className="flex justify-center items-end gap-3 sm:gap-5 mt-10">
//           <CountUnit value={timeLeft.days} label="Days" delay={0.1} />
//           <motion.span
//             className="font-playfair text-3xl text-sage/60 mb-6 pb-1"
//             animate={{ opacity: [1, 0.3, 1] }}
//             transition={{ duration: 1.5, repeat: Infinity }}
//           >
//             :
//           </motion.span>
//           <CountUnit value={timeLeft.hours} label="Hours" delay={0.2} />
//           <motion.span
//             className="font-playfair text-3xl text-sage/60 mb-6 pb-1"
//             animate={{ opacity: [1, 0.3, 1] }}
//             transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
//           >
//             :
//           </motion.span>
//           <CountUnit value={timeLeft.minutes} label="Minutes" delay={0.3} />
//           <motion.span
//             className="font-playfair text-3xl text-sage/60 mb-6 pb-1"
//             animate={{ opacity: [1, 0.3, 1] }}
//             transition={{ duration: 1.5, repeat: Infinity, delay: 1 }}
//           >
//             :
//           </motion.span>
//           <CountUnit value={timeLeft.seconds} label="Seconds" delay={0.4} />
//         </div>

//         {/* Wedding date label */}
//         <motion.div
//           className="text-center mt-10"
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.6, duration: 1 }}
//         >
//           <p className="font-playfair italic text-brown-soft/60 text-sm">
//             24 June 2026 &bull; 9:00 AM IST
//           </p>
//           <p className="font-poppins text-xs text-brown-soft/40 mt-1">
//             Jnanakshi Kalyana Mantapa, Hassan
//           </p>
//         </motion.div>
//       </div>
//     </section>
//   );
// }
