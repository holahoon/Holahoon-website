"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useCallback, useState } from "react"

import { navList } from "@/libs/nav-list"
import { cn } from "@/libs/utils/utils.helpers"

export default function DesktopNavItem() {
  const pathname = usePathname()
  const [dimension, setDimension] = useState<{
    id: string
    width: number
    left: number
  } | null>(null)

  const measureRef = useCallback<(node: HTMLAnchorElement | null) => void>(
    (node) => {
      if (!navList.map(({ link }) => link).includes(pathname)) {
        setDimension(null)
        return
      }

      if (node) {
        const { id, offsetWidth: width, offsetLeft: left } = node
        if (id === pathname) setDimension({ id, width, left })
      }
    },
    [pathname]
  )

  return (
    <ul className={cn("relative flex")}>
      {navList.map(({ label, link }) => (
        <li key={label}>
          <Link
            ref={measureRef}
            href={link}
            id={link}
            className={cn(
              "mr-6 inline-block px-4 py-2 text-primary last-of-type:mr-0"
            )}
          >
            {label}
          </Link>
        </li>
      ))}
      <span
        // Maybe there's a better way to dynamically update class in tw rather than giving it inline styles?
        style={{
          left: `${dimension?.left ?? 0}px`,
          width: `${dimension?.width ?? 0}px`,
        }}
        className={cn(
          "absolute bottom-0 left-0 h-[2px] w-[100px] rounded-md bg-primary/70 transition-all duration-200"
        )}
      />
    </ul>
  )
}
