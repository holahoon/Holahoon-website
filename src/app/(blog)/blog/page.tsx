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
          <div key={`category-${category}`} className="mb-20">
            <h2 className="mb-6">
              <Link
                href={`/blog/${category}`}
                className="text-2xl font-semibold duration-300 hover:text-link"
              >
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
