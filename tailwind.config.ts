import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./providers/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "var(--color-bg)",
        surface: "var(--color-surface)",
        primary: "var(--color-primary)",
        text: "var(--color-text)",
        "text-soft": "var(--color-text-soft)",
        "text-muted": "var(--color-text-muted)",
        border: "var(--color-border)",
        "accent-1": "var(--color-accent-1)",
        "accent-2": "var(--color-accent-2)",
        whatsapp: {
          DEFAULT: "#059669",
          hover: "#047857",
        },
      },
      fontFamily: {
        jakarta: ["var(--font-jakarta)", "system-ui", "sans-serif"],
        system: ["system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"],
      },
      fontSize: {
        display: ["clamp(3rem,8vw,5.5rem)", { lineHeight: "1", letterSpacing: "-0.03em" }],
        h1: ["clamp(2.5rem,5vw,4.5rem)", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        h2: ["clamp(2rem,3.5vw,3rem)", { lineHeight: "1.15", letterSpacing: "-0.01em" }],
        h3: ["clamp(1.5rem,2.5vw,2rem)", { lineHeight: "1.25" }],
        bodylg: ["clamp(1.125rem,1.5vw,1.25rem)", { lineHeight: "1.6", letterSpacing: "0.01em" }],
        body: ["16px", { lineHeight: "1.65", letterSpacing: "0.01em" }],
        small: ["14px", { lineHeight: "1.5", letterSpacing: "0.01em" }],
        label: ["12px", { lineHeight: "1.4", letterSpacing: "0.08em" }],
      },
      boxShadow: {
        whatsapp: "0 4px 16px rgba(5,150,105,0.35)",
        card: "0 24px 80px rgba(15, 23, 42, 0.08)",
      },
      keyframes: {
        "wa-pulse": {
          "0%, 100%": { transform: "scale(1)", boxShadow: "0 0 0 0 rgba(5,150,105,0.35)" },
          "50%": { transform: "scale(1.04)", boxShadow: "0 0 0 14px rgba(5,150,105,0)" },
        },
        marquee: {
          from: { transform: "translate3d(0,0,0)" },
          to: { transform: "translate3d(-50%,0,0)" },
        },
      },
      animation: {
        "wa-pulse": "wa-pulse 2.4s ease-out infinite",
        marquee: "marquee 24s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
