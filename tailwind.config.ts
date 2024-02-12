const { nextui } = require("@nextui-org/theme");
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./node_modules/@nextui-org/theme/dist/components/accordion.js",
    "./node_modules/@nextui-org/theme/dist/components/accordion-item.js",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sora)"],
      },
      scale: {
        "115": "1.15",
      },
    },
  },
  plugins: [nextui()],
};
export default config;
