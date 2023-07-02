import { allPosts } from "contentlayer/generated"
import { compareDesc } from "date-fns"

import List from "@/components/blog/list"

export default function Blog() {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  )

  return (
    <>
      <header className="mb-14">
        <h1 className="mb-4 text-5xl font-bold">Hooniverse Blog</h1>
        <p>I write about stuffs to change the world</p>
      </header>

      <section className="mb-8">
        <h2 className="sticky top-[88px] mb-4 bg-inherit text-3xl font-semibold">
          Programming
        </h2>
        <List posts={posts} />
      </section>

      <section className="mb-8">
        <h2 className="sticky top-[88px] mb-4 bg-inherit text-3xl font-semibold">
          Living
        </h2>
        <List posts={posts} />
      </section>
    </>
  )
}
