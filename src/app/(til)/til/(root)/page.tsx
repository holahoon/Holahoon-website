import { allTils, type Til } from "contentlayer/generated"

import { getTilCountsByCategories, getTilDirectories } from "@/libs/blog"
import AsideMenu from "@/components/til/aside-menu"
import TilList from "@/components/til/til-list"

const DIR = "src/articles/til"

export default async function Til() {
  const [directories, tilCounts] = await Promise.all([
    getTilDirectories(DIR),
    getTilCountsByCategories(),
  ])

  const allCounts = {
    all: Object.values(tilCounts).reduce((tils, til) => tils + til, 0),
    ...tilCounts,
  }

  return (
    <div className="flex">
      <AsideMenu menus={directories} tilCounts={allCounts} />
      <TilList tils={allTils} categories={directories} />
    </div>
  )
}
