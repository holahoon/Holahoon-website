"use client"

import Link from "next/link"
import { useRef } from "react"

import { navList } from "@/libs/nav-list"
import { cn } from "@/libs/utils/utils.helpers"

export default function DesktopNavItem() {
  const refs = useRef<(HTMLAnchorElement | null)[]>([])

  return (
    <ul className={cn("relative flex")}>
      {navList.map(({ label, link }, idx) => (
        <li key={label}>
          <Link
            ref={(node) => (refs.current[idx] = node)}
            href={link}
            className={cn("mr-6 inline-block px-4 py-2 last-of-type:mr-0")}
          >
            {label}
          </Link>
        </li>
      ))}
      <span className="bg-red absolute bottom-0 left-0 h-[2px] w-[100px]" />
    </ul>
  )
}
