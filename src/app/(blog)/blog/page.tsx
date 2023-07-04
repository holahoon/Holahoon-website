import Link from "next/link"
import { allPosts } from "contentlayer/generated"
import { compareDesc } from "date-fns"

import List from "@/components/blog/list"

export default function Blog() {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  )

  return (
    <>
      <div className="mb-10">
        <h2 className="mb-4 text-xl font-semibold backdrop-blur-sm">
          <Link href="/blog/programming" className="hover:text-link">
            Programming
          </Link>
        </h2>
        <List posts={posts} />
      </div>

      <div className="mb-10">
        <h2 className="stimb-4 text-xl font-semibold backdrop-blur-sm">
          <Link href="/blog/living" className="hover:text-link">
            Living
          </Link>
        </h2>
        <List posts={posts} />
      </div>

      <div className="mb-10">
        <h2 className="stimb-4 text-xl font-semibold backdrop-blur-sm">
          <Link href="/blog/living" className="hover:text-link">
            test
          </Link>
        </h2>
        <List posts={posts} />
      </div>
    </>
  )
}
