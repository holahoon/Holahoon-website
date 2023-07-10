import { allProgrammings, type Programming } from "contentlayer/generated"

import { categories } from "@/libs/blog/programming.constants"
import List from "@/components/blog/list"
import AsideMenu from "@/components/blog/menu-aside"

export default async function Programming() {
  return (
    <>
      <AsideMenu menus={categories} />

      <section className="min-w-0">
        {categories.map((category) => (
          <div key={`category-${category}`} className="mb-20">
            <h2 id={category} className="mb-6 text-2xl font-semibold">
              {category}
            </h2>

            <List category={category} programmings={allProgrammings} />
          </div>
        ))}
      </section>
    </>
  )
}
