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

        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("tailwindcss-animate")],
}
