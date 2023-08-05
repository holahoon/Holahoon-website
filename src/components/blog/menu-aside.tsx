"use client"

import Link from "next/link"
import { useSearchParams } from "next/navigation"

import { useMounted } from "@/hooks/common"
import type { Directories, TilCounts } from "@/libs/blog"
import { cn } from "@/libs/utils/utils.helpers"
import NavSkeleton from "./nav-skeleton"

interface AsideMenuItemsProps {
  menus: Directories
  tilCounts: TilCounts & { all: number }
  className?: string
}

const HIGLIGHT = "font-medium text-foreground"
const NORMAL = "text-foreground/80"
const CATEGORY = "category"

const checkSearchParams = (query: string | null, param: string): boolean => {
  if (!query) return !!query
  return query.includes(param)
}

export default function AsideMenuItems(props: AsideMenuItemsProps) {
  const { menus, tilCounts, className } = props

  const isMounted = useMounted()
  const searchParams = useSearchParams()
  const categorySearch = searchParams.get(CATEGORY)

  const isMainPath = Object.keys(menus).every(
    (menu) => !checkSearchParams(categorySearch, menu)
  )

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
            <span className="mb-2 flex items-center ">
              <Link
                href="/til"
                className={cn(
                  "inline-block duration-300 hover:text-foreground",
                  isMainPath ? HIGLIGHT : NORMAL
                )}
              >
                All
              </Link>
              <span className="ml-1 text-sm text-foreground/70">
                ({tilCounts.all})
              </span>
            </span>

            {Object.entries(menus).map(([key, menu]) => (
              <li key={menu} className="mb-2 flex items-center last:mb-0">
                <Link
                  href={{ pathname: "/til", query: { category: key } }}
                  className={cn(
                    "duration-300 hover:text-foreground",
                    checkSearchParams(categorySearch, key) ? HIGLIGHT : NORMAL
                  )}
                >
                  {menu}
                </Link>
                <span className="ml-1 text-sm text-foreground/70">
                  ({tilCounts[key]})
                </span>
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
