import Link from "next/link"
import { forwardRef, type ForwardedRef } from "react"

import LayoutWrapper from "@/components/layout/layout-wrapper"
import ThemeToggle from "@/components/theme-toggle/theme-toggle"
import DesktopNavItem from "./desktop-nav-item"

function navigation(_: unknown, ref: ForwardedRef<HTMLElement>) {
  return (
    <header
      ref={ref}
      className="sticky top-0 isolate z-[999] w-full border-b-2 border-accent bg-background"
    >
      <LayoutWrapper>
        <div className="flex items-center">
          <Link href="/" className="text-xl font-bold text-foreground">
            holahoon
          </Link>

          <nav className="ml-auto flex items-center">
            <DesktopNavItem />

            <div className="ml-2 flex md:ml-10">
              <ThemeToggle />
            </div>
          </nav>
        </div>
      </LayoutWrapper>
    </header>
  )
}

export default forwardRef<HTMLElement, unknown>(navigation)
