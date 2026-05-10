import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        sage: {
          DEFAULT: "#A8B5A2",
          light: "#C5CFC0",
          dark: "#7E8B78",
        },
        olive: {
          DEFAULT: "#7E8B78",
          light: "#9EA98A",
          dark: "#5C6657",
        },
        beige: {
          DEFAULT: "#EDE6DD",
          light: "#F5F0EA",
          dark: "#D8CEBD",
        },
        offwhite: {
          DEFAULT: "#FAF8F5",
          warm: "#F5F0E8",
        },
        brown: {
          soft: "#6B5E53",
          warm: "#8B7355",
          light: "#A08060",
        },
        gold: {
          light: "#D4AF87",
          DEFAULT: "#C19A6B",
          warm: "#B8976A",
        },
      },
      fontFamily: {
        script: ["Great Vibes", "cursive"],
        allura: ["Allura", "cursive"],
        playfair: ["Playfair Display", "serif"],
        poppins: ["Poppins", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      backgroundImage: {
        "botanical-gradient":
          "linear-gradient(135deg, #FAF8F5 0%, #EDE6DD 50%, #FAF8F5 100%)",
        "sage-gradient":
          "linear-gradient(135deg, #A8B5A2 0%, #7E8B78 100%)",
        "warm-gradient":
          "linear-gradient(180deg, #FAF8F5 0%, #EDE6DD 100%)",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-slow": "float 9s ease-in-out infinite",
        "float-fast": "float 4s ease-in-out infinite",
        sway: "sway 8s ease-in-out infinite",
        "fade-in": "fadeIn 1.5s ease forwards",
        "pulse-soft": "pulseSoft 3s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "33%": { transform: "translateY(-18px) rotate(5deg)" },
          "66%": { transform: "translateY(-8px) rotate(-3deg)" },
        },
        sway: {
          "0%, 100%": { transform: "rotate(-5deg) translateX(0)" },
          "50%": { transform: "rotate(5deg) translateX(10px)" },
        },
        fadeIn: {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        pulseSoft: {
          "0%, 100%": { opacity: "0.7" },
          "50%": { opacity: "1" },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
      boxShadow: {
        card: "0 8px 40px rgba(107, 94, 83, 0.12)",
        "card-hover": "0 16px 60px rgba(107, 94, 83, 0.2)",
        botanical: "0 4px 24px rgba(168, 181, 162, 0.3)",
        glass: "0 8px 32px rgba(107, 94, 83, 0.08)",
      },
    },
  },
  plugins: [],
};

export default config;
