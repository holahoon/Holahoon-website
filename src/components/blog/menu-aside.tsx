"use client"

import Link from "next/link"

import { useActiveItem, useMounted } from "@/hooks/common"
import { cn } from "@/libs/utils.helper"

interface MenuAsideProps {
  menus: string[]
}

export default function AsideMenu(props: MenuAsideProps) {
  const { menus } = props

  const isMounted = useMounted()
  const activeItemId = useActiveItem(menus)

  // TODO: replace with a skeleton
  if (!isMounted) return null

  return (
    <aside className="sticky top-[140px] mr-14 h-full flex-auto flex-shrink-0">
      <nav>
        <div className="mb-6 text-lg font-medium">Categories</div>

        <ul>
          {menus.map((menu) => (
            <li key={menu} className="mb-4 last:mb-0">
              <Link
                href={`#${menu}`}
                className={cn(
                  "duration-300 hover:text-foreground",
                  menu === activeItemId
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
    </aside>
  )
}
