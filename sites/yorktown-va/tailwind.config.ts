import type { Config } from "tailwindcss";
import preset from "@hife/ui/tailwind.preset";

const config: Config = {
  presets: [preset as unknown as Config],
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "../../packages/ui/src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: { extend: {} },
  plugins: [],
};

export default config;
