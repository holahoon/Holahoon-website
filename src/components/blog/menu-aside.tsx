import Link from "next/link"

interface MenuAsideProps {
  menus: string[]
}

export default function AsideMenu(props: MenuAsideProps) {
  const { menus } = props

  return (
    <aside className="sticky top-[140px] mr-14 h-full flex-auto flex-shrink-0">
      <h3 className="mb-6 text-lg font-medium">Categories</h3>

      <nav>
        <ul>
          {menus.map((menu) => (
            <li key={menu} className="mb-4 last:mb-0">
              <Link
                href={`#${menu}`}
                className="text-foreground/70 duration-300 hover:text-foreground"
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
