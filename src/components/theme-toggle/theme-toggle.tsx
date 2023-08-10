"use client"

import { useTheme } from "next-themes"

import { useMounted } from "@/hooks/common"
import { cn } from "@/libs/utils"
import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import ThemeSkeleton from "./theme-skeleton"

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const isMounted = useMounted()

  const toggleThemes = () => {
    switch (theme) {
      case "system":
        return setTheme("light")
      case "light":
        return setTheme("dark")
      case "dark":
        return setTheme("system")
      default:
        setTheme("system")
    }
  }

  const createClassName = (isVisible: boolean) =>
    cn(
      "absolute h-6 w-6 transition-all",
      isVisible ? "rotate-0 scale-100" : "rotate-45 scale-0"
    )

  if (!isMounted) return <ThemeSkeleton />

  return (
    <Button className="w-10 rounded-full p-0" onClick={toggleThemes}>
      <Icons.sun className={createClassName(theme === "light")} />
      <Icons.moon className={createClassName(theme === "dark")} />
      <Icons.laptop className={createClassName(theme === "system")} />
      <span className="sr-only">Theme toggle</span>
    </Button>
  )
}
