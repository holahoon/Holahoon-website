import { allTils, type Til } from "contentlayer/generated"

import { getTilCategories } from "@/libs/blog"
import List from "@/components/blog/list"
import AsideMenu from "@/components/blog/menu-aside"
import PageHeader from "@/components/layout/page-header"

export default async function Til() {
  const categories = await getTilCategories()

  return (
    <main className="mt-12">
      <PageHeader header="Today I Learned">
        <p className="text-primary/90">I share nuggets of knowledge</p>
        <p className="text-primary/90">
          and insights that I&apos;ve picked up along my journey.
        </p>
      </PageHeader>

      <section className="flex">
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
      </section>
    </main>
  )
}
