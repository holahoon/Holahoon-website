"use client"

import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons"

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <Button
      className="w-8 p-0"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <Icons.sun className="absolute h-6 w-6 scale-100 transition-all dark:rotate-45 dark:scale-0" />
      <Icons.moon className="absolute h-6 w-6 rotate-45 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Theme toggle</span>
    </Button>
  )
}
