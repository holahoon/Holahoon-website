import { allTils, type Til } from "contentlayer/generated"

import { getTilDirectories } from "@/libs/blog"
import CategoryHeader from "@/components/blog/category-header"
import List from "@/components/blog/list"
import PageHeader from "@/components/layout/page-header"

const DIR = "src/articles/til"

export default async function Til() {
  const categories = await getTilDirectories(DIR)

  return (
    <section>
      <PageHeader header="Today I Learned">
        <p className="text-primary/90">I share nuggets of knowledge</p>
        <p className="text-primary/90">
          and insights that I&apos;ve picked up along my journey.
        </p>
      </PageHeader>

      <div>
        {categories.map((category) => (
          <div key={`blog-${category}`} className="mb-20">
            <CategoryHeader
              id={category as string}
              className="scroll-m-[140px]"
            >
              {category}
            </CategoryHeader>

            <List category={category} contents={allTils} />
          </div>
        ))}
      </div>
    </section>
  )
}
