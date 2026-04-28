const preset = {
  theme: {
    extend: {
      colors: {
        navy:  "#0a0e1a",
        cream: "#f2ece0",
        red:   "#c8222a",
        ink:   "#0e1428",
        "bg-primary":   "#f2ece0",
        "bg-secondary": "#e8e2d4",
        "text-primary": "#0e1428",
        "text-muted":   "#6b7280",
        "accent-blue":  "#0a0e1a",
        "accent-red":   "#c8222a",
        "border-light": "#ddd8ce",
        crimson:  "#c8222a",
        charcoal: "#0e1428",
        slate:    "#6b7280",
        ivory:    "#f2ece0",
      },
      fontFamily: {
        display:   ["var(--font-bebas)", "Impact", "sans-serif"],
        editorial: ["var(--font-instrument)", "Georgia", "serif"],
        ui:        ["var(--font-dm)", "system-ui", "sans-serif"],
        heading:   ["var(--font-instrument)", "Georgia", "serif"],
        body:      ["var(--font-dm)", "system-ui", "sans-serif"],
        condensed: ["var(--font-bebas)", "Impact", "sans-serif"],
        serif:     ["var(--font-instrument)", "Georgia", "serif"],
        sans:      ["var(--font-dm)", "system-ui", "sans-serif"],
      },
      fontSize: {
        h1:    ["4rem",      { lineHeight: "1.1",  fontWeight: "400" }],
        h2:    ["2rem",      { lineHeight: "1.15", fontWeight: "400" }],
        h3:    ["1.5rem",    { lineHeight: "1.25", fontWeight: "400" }],
        body:  ["1.0625rem", { lineHeight: "1.75" }],
        small: ["0.875rem",  { lineHeight: "1.6" }],
      },
      spacing: {
        section:   "6rem",
        component: "3rem",
        element:   "1.5rem",
        tight:     "0.75rem",
      },
      maxWidth: {
        narrow: "820px",
        wide:   "1200px",
      },
    },
  },
};

export default preset;
