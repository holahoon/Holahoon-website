import { getTilCountsByCategories, getTilDirectories } from "@/libs/blog"
import AsideMenuItems from "./aside-menu-items"

const DIR = "src/articles/til"

export default async function AsideMenu() {
  const [directories, tilCounts] = await Promise.all([
    getTilDirectories(DIR),
    getTilCountsByCategories(),
  ])

  const allCounts = {
    all: Object.values(tilCounts).reduce((tils, til) => tils + til, 0),
    ...tilCounts,
  }

  return (
    <AsideMenuItems
      menus={directories}
      tilCounts={allCounts}
      className="hidden md:block"
    />
  )
}
