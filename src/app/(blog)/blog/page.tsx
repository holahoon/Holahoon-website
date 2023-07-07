import Link from "next/link"
import { allPosts } from "contentlayer/generated"

import { useGetPostsCategories, useSortPostsByDate } from "@/hooks/blog"
import { capitalizeWord } from "@/libs/utils.helper"
import List from "@/components/blog/list"
import AsideMenu from "@/components/blog/menu-aside"

export default function Blog() {
  const posts = useSortPostsByDate(allPosts, "desc")
  const categories = useGetPostsCategories(posts)

  return (
    <>
      <AsideMenu menus={categories} />

      <section className="min-w-0">
        {categories.map((category) => (
          <div key={`category-${category}`} className="mb-14 last:mb-0">
            <h2 className="mb-4 text-2xl font-semibold backdrop-blur-sm">
              <Link href={`/blog/${category}`} className="hover:text-link">
                {capitalizeWord(category)}
              </Link>
            </h2>

            <List category={category} posts={posts} />
          </div>
        ))}
      </section>
    </>
  )
}
