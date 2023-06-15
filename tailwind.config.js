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
      screens: {},
      extend: {
         screens: { full: "1440px" },
         colors: {
            alpha: "#0f172a",
            bravo: "#334155",
            charlie: "#4a4948",
            delta: "#8e8e8d",
            echo: "#bbbbba",
            fox: "#e8e8e8",
         },
      },
   },
   plugins: [require("@tailwindcss/typography")],
}
