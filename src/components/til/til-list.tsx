"use client"

import { useSearchParams } from "next/navigation"
import { type Til } from "contentlayer/generated"

import type { Directories } from "@/libs/blog"
import CategoryHeader from "@/components/blog/category-header"
import List from "@/components/blog/list"

interface ListProps {
  tils: Til[]
  categories: Directories
}

export default function TilList(props: ListProps) {
  const { tils, categories } = props

  const searchParams = useSearchParams()
  const categorySearch = searchParams.get("category")

  return (
    <div>
      {Object.entries(categories)
        .filter((list) => !categorySearch || list[0] === categorySearch)
        .map(([key, category]) => (
          <div key={`blog-${key}`} className="mb-16">
            <CategoryHeader id={key as string} className="scroll-m-[140px]">
              {category}
            </CategoryHeader>

            <List category={key} contents={tils} />
          </div>
        ))}
    </div>
  )
}
