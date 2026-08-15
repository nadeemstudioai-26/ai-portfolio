/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0B0E14", // page background
          surface: "#111620", // card / panel background
          hover: "#161C29", // card hover background
          border: "#1F2733", // hairline borders
        },
        fg: {
          DEFAULT: "#E7ECF3", // primary text
          muted: "#8B96A8", // secondary text
          faint: "#5B6472", // tertiary / disabled text
        },
        accent: {
          DEFAULT: "#E8A33D", // signal amber — primary accent
          soft: "#F2C374",
          dim: "#8A5F22",
        },
        mint: {
          DEFAULT: "#3ED9A3", // used only for small "live/status" signals
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', "sans-serif"],
        sans: ["Inter", "sans-serif"],
        mono: ['"JetBrains Mono"', "monospace"],
      },
      keyframes: {
        blink: {
          "0%, 49%": { opacity: 1 },
          "50%, 100%": { opacity: 0 },
        },
        fadeUp: {
          from: { opacity: 0, transform: "translateY(12px)" },
          to: { opacity: 1, transform: "translateY(0)" },
        },
      },
      animation: {
        blink: "blink 1s step-end infinite",
        fadeUp: "fadeUp 0.6s ease-out both",
      },
      backgroundImage: {
        "dot-grid":
          "radial-gradient(circle, rgba(231,236,243,0.08) 1px, transparent 1px)",
      },
      backgroundSize: {
        "dot-grid": "24px 24px",
      },
    },
  },
  plugins: [],
};
