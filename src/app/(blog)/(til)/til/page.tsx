import { allTils, type Til } from "contentlayer/generated"

import List from "@/components/blog/list"
import AsideMenu from "@/components/blog/menu-aside"

const getTilCategories = async (contents: Til[]) => {
  const categories = contents.map((post) => post.category)
  return categories.filter((post, idx, array) => array.indexOf(post) === idx)
}

export default async function Til() {
  const categories = await getTilCategories(allTils)

  return (
    <>
      <AsideMenu menus={categories} className="hidden md:block" />

      <section className="min-w-0">
        {categories.map((category) => (
          <div key={`category-${category}`} className="mb-20">
            <h2
              id={category}
              className="mb-6 scroll-m-[140px] text-2xl font-semibold"
            >
              {category}
            </h2>

            <List category={category} contents={allTils} />
          </div>
        ))}
      </section>
    </>
  )
}
