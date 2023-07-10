import Link from "next/link"
import { usePathname } from "next/navigation"

import { capitalizeWord } from "@/libs/utils.helper"
import { Icons } from "@/components/icons"

interface MenuAsideProps {
  menus: string[]
}

export default function AsideMenu(props: MenuAsideProps) {
  const { menus } = props

  // const path = usePathname()

  return (
    <aside className="sticky top-[150px] mr-14 h-full">
      <nav className="-m-2">
        <ul>
          {menus.map((menu) => (
            <li key={menu} className="mb-4 last:mb-0">
              <Link
                // href={`${path}/${menu}`}
                href={`#${menu}`}
                scroll={false}
                className="block rounded-lg px-4 py-2 duration-300 hover:bg-accent/80"
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
