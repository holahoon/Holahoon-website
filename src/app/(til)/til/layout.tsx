import { type ReactNode } from "react"

import { getUniqueFileDirectories, getUniqueTilCategories } from "@/libs/blog"
import AsideMenu from "@/components/blog/menu-aside"

interface TilLayoutProps {
  children: ReactNode
}

export default async function TilLayout(props: TilLayoutProps) {
  const { children } = props

  const fileDirectories = await getUniqueFileDirectories()

  return (
    <main className="mt-12 flex">
      <AsideMenu menus={fileDirectories} className="hidden md:block" />
      {children}
    </main>
  )
}
