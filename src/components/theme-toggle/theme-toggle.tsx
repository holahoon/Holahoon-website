"use client"

import { useEffect, useState } from "react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons"

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  const [isMounted, setIsMounted] = useState<boolean>(false)

  useEffect(() => setIsMounted(true), [])

  if (!isMounted) return null

  return (
    <Button
      className="w-8 p-0"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "light" ? (
        <Icons.sun className="absolute h-6 w-6 scale-100 transition-all dark:rotate-45 dark:scale-0" />
      ) : null}
      {theme === "dark" ? (
        <Icons.moon className="absolute h-6 w-6 rotate-45 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      ) : null}
      <span className="sr-only">Theme toggle</span>
    </Button>
  )
}
