"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { type HTMLAttributes } from "react"

import { useMounted } from "@/hooks/common"
import { cn } from "@/libs/utils/utils.helpers"
import NavSkeleton from "./nav-skeleton"

interface MenuAsideProps extends HTMLAttributes<HTMLElement> {
  menus: string[]
}

export default function AsideMenu(props: MenuAsideProps) {
  const { menus, className } = props

  const isMounted = useMounted()
  const params = usePathname()

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
            {menus.map((menu) => (
              <li key={menu} className="mb-2 last:mb-0">
                <Link
                  href={`/til/${menu}`}
                  className={cn(
                    "duration-300 hover:text-foreground",
                    params.includes(menu)
                      ? "font-medium text-foreground"
                      : "text-foreground/70"
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
