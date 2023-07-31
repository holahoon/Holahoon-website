import { type ReactNode } from "react"

import { getTilDirectories } from "@/libs/blog"
import AsideMenu from "@/components/blog/menu-aside"

interface TilLayoutProps {
  children: ReactNode
}

const DIR = "src/articles/til"

export default async function TilLayout(props: TilLayoutProps) {
  const { children } = props

  const directories = await getTilDirectories(DIR)

  return (
    <main className="mt-12 flex">
      <AsideMenu menus={directories} className="hidden md:block" />
      {children}
    </main>
  )
}
