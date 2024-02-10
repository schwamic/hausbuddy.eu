import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
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
  plugins: [],
};
export default config;
