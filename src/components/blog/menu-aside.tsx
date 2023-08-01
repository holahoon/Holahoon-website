"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { type HTMLAttributes } from "react"

import { useMounted } from "@/hooks/common"
import type { Directories } from "@/libs/blog"
import { cn } from "@/libs/utils/utils.helpers"
import NavSkeleton from "./nav-skeleton"

interface MenuAsideProps extends HTMLAttributes<HTMLElement> {
  menus: Directories
}

const HIGLIGHT = "font-medium text-foreground"
const NORMAL = "text-foreground/70"

export default function AsideMenu(props: MenuAsideProps) {
  const { menus, className } = props

  const isMounted = useMounted()
  const params = usePathname()

  const isMainPath = Object.keys(menus).every((menu) => !params.includes(menu))

  return (
    <aside
      className={cn(
        "sticky top-[123px] mr-4 h-full w-full max-w-[150px]",
        className
      )}
    >
      {isMounted ? (
        <nav>
          <ul>
            <Link
              href="/til"
              className={cn(
                "mb-2 inline-block duration-300 hover:text-foreground",
                isMainPath ? HIGLIGHT : NORMAL
              )}
            >
              All
            </Link>

            {Object.entries(menus).map(([key, menu]) => (
              <li key={menu} className="mb-2 last:mb-0">
                <Link
                  href={`/til/${key}`}
                  className={cn(
                    "duration-300 hover:text-foreground",
                    params.includes(key) ? HIGLIGHT : NORMAL
                  )}
                >
                  {menu}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      ) : (
        <NavSkeleton />
      )}
    </aside>
  )
}
