import Link from "next/link"

import { navList } from "@/libs/nav-list"
import ThemeToggle from "../theme-toggle/theme-toggle"

export default function navigation() {
  return (
    <header className="sticky top-0 isolate z-10 flex h-[75px] items-center bg-background">
      <Link href="/" className="text-xl font-bold text-foreground">
        Hooniverse
      </Link>

      <nav className="ml-auto flex items-center">
        <ul className="flex">
          {navList.map(({ label, link }) => (
            <li key={label}>
              <Link
                href={link}
                className="mr-6 inline-block px-4 py-2 last-of-type:mr-0"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="ml-6 flex">
          <ThemeToggle />
        </div>
      </nav>
    </header>
  )
}
