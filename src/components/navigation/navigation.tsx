import Link from "next/link"

import ThemeToggle from "@/components/theme-toggle/theme-toggle"
import DesktopNavItem from "./desktop-nav-item"

export default function navigation() {
  return (
    <header className="sticky top-0 isolate z-[999] flex h-[75px] items-center bg-background">
      <Link href="/" className="text-xl font-bold text-foreground">
        DK
      </Link>

      <nav className="ml-auto flex items-center">
        <DesktopNavItem />

        <div className="ml-6 flex">
          <ThemeToggle />
        </div>
      </nav>
    </header>
  )
}
