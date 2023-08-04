import { allTils } from "contentlayer/generated"

import { getTilDirectories, getTilsByCategory } from "@/libs/blog"
import AsideMenuItems from "@/components/blog/menu-aside"

const DIR = "src/articles/til"

export default async function AsideMenu() {
  const directories = await getTilDirectories(DIR)

  const tils = await getTilsByCategory()

  return <AsideMenuItems menus={directories} className="hidden md:block" />
}
