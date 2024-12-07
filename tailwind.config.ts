import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          50: "#EBF8FF",
          100: "#DBF0FF",
          200: "#BFDBFE",
          300: "#A9D2FF",
          400: "#7CB4DC",
          500: "#509BD0", // Primary blue
          600: "#2482C4",
          700: "#1D689D",
          800: "#164E76",
          900: "#0E344E",
          light: "#509BD0", // Your existing light blue
          dark: "#2482C4", // Your existing primary blue
        },
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
