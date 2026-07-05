import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0a0e14",
        surface: "#11161f",
        "surface-hover": "#161c27",
        border: "#1f2733",
        accent: {
          green: "#22d3a5",
          blue: "#3b82f6",
          purple: "#a855f7",
        },
      },
      backgroundImage: {
        "gradient-hero":
          "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(34,211,165,0.15), transparent), radial-gradient(ellipse 60% 50% at 100% 0%, rgba(168,85,247,0.12), transparent)",
        "gradient-card":
          "linear-gradient(135deg, rgba(34,211,165,0.08), rgba(59,130,246,0.06))",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
