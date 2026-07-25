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
        primary: {
          DEFAULT: "#151b24", // Gogrin dark background
        },
        accent: {
          DEFAULT: "#2563eb", // Gogrin red
          hover: "#1d4ed8",
        },
        surface: {
          DEFAULT: "#1f2631", // Gogrin lighter dark card
        },
        background: {
          light: "#F8FAFC",
        },
        text: {
          primary: "#ffffff",
          secondary: "#a0a9b4",
          dark: "#151b24",
        },
        status: {
          success: "#22C55E",
          error: "#EF4444",
        }
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "marquee-left": "marquee-left 35s linear infinite",
        "marquee-right": "marquee-right 35s linear infinite",
        "shimmer": "shimmer 2s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        shimmer: {
          from: { backgroundPosition: "200% 0" },
          to: { backgroundPosition: "-200% 0" },
        },
        "marquee-left": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-33.333333%)" },
        },
        "marquee-right": {
          from: { transform: "translateX(-33.333333%)" },
          to: { transform: "translateX(0)" },
        }
      }
    },
  },
  plugins: [],
};
export default config;
