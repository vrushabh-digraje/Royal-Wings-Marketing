import type { Config } from "tailwindcss";

/**
 * Royal Wings Marketing design system tokens.
 * Prefer semantic tokens (primary, secondary, accent) over raw palette in UI.
 */
const config: Config = {
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#031833",
          foreground: "#FFFFFF",
          soft: "#e6f0fa",
          muted: "#f4f8fd",
        },
        secondary: {
          DEFAULT: "#b89047",
          foreground: "#FFFFFF",
          soft: "#faf6eb",
        },
        accent: {
          DEFAULT: "#1b7de0",
          foreground: "#FFFFFF",
          soft: "#e8f2fc",
        },
        danger: {
          DEFAULT: "#DC2626",
          soft: "#FEF2F2",
        },
        gray: {
          900: "#0f1e36",
          800: "#1e293b",
          700: "#334155",
          600: "#475569",
          500: "#64748b",
          400: "#94a3b8",
          300: "#cbd5e1",
          200: "#e2e8f0",
          100: "#f1f5f9",
          50: "#fafbfc",
        },
        background: "#FFFFFF",
        "surface-muted": "#fafbfc",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      maxWidth: {
        container: "80rem", // 7xl
      },
      borderRadius: {
        lg: "0.5rem",
        xl: "0.75rem",
      },
      boxShadow: {
        sm: "0 1px 2px 0 rgb(15 23 42 / 0.05)",
        md: "0 4px 6px -1px rgb(15 23 42 / 0.08), 0 2px 4px -2px rgb(15 23 42 / 0.06)",
      },
      transitionDuration: {
        DEFAULT: "200ms",
      },
    },
  },
};

export default config;
