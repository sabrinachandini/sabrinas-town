import type { Config } from "tailwindcss";
import preset from "@hife/ui/tailwind.preset";

const config: Config = {
  presets: [preset as Config],
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "../../packages/ui/src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // hife-specific overrides go here
      colors: {
        fog:          "rgba(255,255,255,0.55)",
        gold:         "#C8A24A",
        "gold-ink":   "#8A6B24",
        ivory:        "#f2ece0",
        charcoal:     "#0e1428",
        slate:        "#6b7280",
        crimson:      "#cc3322",
        "crimson-ink":"#B53A29",
      },
    },
  },
  plugins: [],
};

export default config;
