import { allTils } from "contentlayer/generated"

import { getTilCountsByCategories, getTilDirectories } from "@/libs/blog"
import AsideMenuItems from "@/components/blog/menu-aside"

const DIR = "src/articles/til"

export default async function AsideMenu() {
  const directories = await getTilDirectories(DIR)

  const tilCounts = await getTilCountsByCategories()
  console.log(tilCounts)

  return (
    <AsideMenuItems
      menus={directories}
      tilCounts={tilCounts}
      className="hidden md:block"
    />
  )
}
