import { allTils, type Til } from "contentlayer/generated"

import { getTilCategories } from "@/libs/blog"
import List from "@/components/blog/list"
import AsideMenu from "@/components/blog/menu-aside"

export default async function Til() {
  const categories = await getTilCategories()

  return (
    <>
      <AsideMenu menus={categories} className="hidden md:block" />

      <div className="min-w-0">
        {categories.map((category) => (
          <div key={`blog-${category}`} className="mb-20">
            <h2
              id={category}
              className="mb-6 scroll-m-[140px] text-2xl font-semibold"
            >
              {category}
            </h2>

            <List category={category} contents={allTils} />
          </div>
        ))}
      </div>
    </>
  )
}
