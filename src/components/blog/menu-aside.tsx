"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { capitalizeWord } from "@/libs/utils.helper"

interface MenuAsideProps {
  menus: string[]
}

export default function AsideMenu(props: MenuAsideProps) {
  const { menus } = props

  const path = usePathname()

  return (
    <aside className="sticky top-[175px] mr-14 h-full">
      <nav className="-m-2">
        <ul>
          {menus.map((menu) => (
            <li key={menu} className="mb-4 last:mb-0">
              <Link
                href={`${path}/${menu}`}
                className="block rounded-lg p-2 duration-300 hover:bg-accent/80"
              >
                {capitalizeWord(menu)}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}
