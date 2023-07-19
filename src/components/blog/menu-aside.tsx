"use client"

import Link from "next/link"
import type { HTMLAttributes } from "react"

import { useActiveItem, useMounted } from "@/hooks/common"
import { cn } from "@/libs/utils/utils.helpers"
import { Skeleton } from "@/components/ui/skeleton"

interface MenuAsideProps extends HTMLAttributes<HTMLElement> {
  menus: string[]
}

export default function AsideMenu(props: MenuAsideProps) {
  const { menus, className } = props

  const isMounted = useMounted()
  // const activeItemId = useActiveItem(menus)

  return (
    <aside
      className={cn(
        // "sticky top-[140px] mr-4 h-full w-full max-w-[150px]",
        "mr-4 h-full w-full max-w-[150px]",
        className
      )}
    >
      {isMounted ? (
        <nav>
          <div className="mb-6 text-lg font-medium">Categories</div>

          <ul>
            {menus.map((menu) => (
              <li key={menu} className="mb-2 last:mb-0">
                <Link
                  href={`#${menu}`}
                  className={cn(
                    "duration-300 hover:text-foreground",
                    "font-medium text-foreground"
                    // menu === activeItemId
                    //   ? "font-medium text-foreground"
                    //   : "text-foreground/70"
                  )}
                >
                  {menu}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      ) : (
        <div>
          <Skeleton className="mb-6 h-6 w-full" />
          <Skeleton className="mb-2 h-4 w-full" />
          <Skeleton className="mb-2 h-4 w-full" />
          <Skeleton className="mb-2 h-4 w-full" />
        </div>
      )}
    </aside>
  )
}
