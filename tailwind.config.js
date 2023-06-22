/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/articles/**/*.{md,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      screens: { full: "1400px" },
      colors: {
        alpha: "#0f172a",
        bravo: "#334155",
        charlie: "#4a4948",
        delta: "#8e8e8d",
        echo: "#bbbbba",
        fox: "#e8e8e8",
        accent: "hsl(210 40% 96.1%)",

        // In globals.css
        background: "rgb(var(--background) / <alpha-value>)",
        foreground: "rgb(var(--foreground) / <alpha-value>)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("tailwindcss-animate")],
}
