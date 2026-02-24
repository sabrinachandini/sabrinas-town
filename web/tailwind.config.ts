import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Background
        "bg-primary": "#F7F5F2",
        "bg-secondary": "#E6EBF2",
        // Text
        "text-primary": "#1E1E1E",
        "text-muted": "#6B7280",
        // Accent
        "accent-blue": "#2C4A7A",
        "accent-blue-hover": "#3B5F99",
        "accent-red": "#B03A48",
        "accent-red-hover": "#C54A57",
        // Border
        "border-light": "#E2E2E2",
      },
      fontFamily: {
        heading: ["var(--font-playfair)", "Georgia", "serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      fontSize: {
        h1: ["4rem", { lineHeight: "1.2", fontWeight: "700" }],
        h2: ["2.25rem", { lineHeight: "1.2", fontWeight: "600" }],
        h3: ["1.5rem", { lineHeight: "1.3", fontWeight: "600" }],
        body: ["1.125rem", { lineHeight: "1.7" }],
        small: ["0.875rem", { lineHeight: "1.6" }],
      },
      spacing: {
        section: "6rem",
        component: "3rem",
        element: "1.5rem",
        tight: "0.75rem",
      },
      maxWidth: {
        narrow: "820px",
        wide: "1200px",
      },
    },
  },
  plugins: [],
};

export default config;
