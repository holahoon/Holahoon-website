import { allTils, type Til } from "contentlayer/generated"

import { getTilDirectories } from "@/libs/blog"
import PageHeader from "@/components/layout/page-header"
import TilList from "@/components/til/til-list"

const DIR = "src/articles/til"

export default async function Til() {
  const categories = await getTilDirectories(DIR)

  return (
    <section className="w-full">
      <PageHeader header="Today I Learned">
        <p className="text-primary/90">I share nuggets of knowledge</p>
        <p className="text-primary/90">
          and insights that I&apos;ve picked up along my journey.
        </p>
      </PageHeader>

      <TilList tils={allTils} categories={categories} />
    </section>
  )
}
