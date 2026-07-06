const preset = {
  theme: {
    extend: {
      colors: {
        navy:         "#0a0e1a",
        cream:        "#f2ece0",
        red:          "#cc3322",
        ink:          "#0e1428",
        "ink-deep":   "#14100a",
        "bg-primary":    "#f2ece0",
        "bg-secondary":  "#e8e2d4",
        "text-primary":  "#0e1428",
        "text-muted":    "#6b7280",
        "accent-blue":   "#0a0e1a",
        "accent-red":    "#cc3322",
        "border-light":  "#ddd8ce",
        crimson:         "#cc3322",
        "crimson-ink":   "#B53A29",
        charcoal:        "#0e1428",
        slate:           "#6b7280",
        ivory:           "#f2ece0",
        gold:            "#C8A24A",
        "gold-ink":      "#8A6B24",
        /* Extended palette — town accent system */
        blue:    "#1a3a72",
        green:   "#2a5c45",
        yellow:  "#e8b84b",
        rust:    "#b5431a",
        paper:   "#f8f0d8",
        sky:     "#3a7dbf",
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
