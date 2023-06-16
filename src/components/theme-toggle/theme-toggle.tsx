"use client"

import { useTheme } from "next-themes"

export default function ThemeToggle() {
   const { themes, setTheme } = useTheme()

   return (
      <>
         <button onClick={() => setTheme("dark")}>dark</button>
         <button onClick={() => setTheme("light")}>light</button>
         <button onClick={() => setTheme("system")}>system</button>
      </>
   )
}
