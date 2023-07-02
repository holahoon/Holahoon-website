import { allPosts } from "contentlayer/generated"
import { compareDesc } from "date-fns"

import List from "@/components/blog/list"

export default function Blog() {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  )

  return (
    <main>
      <h1>끄적끄적</h1>
      <List posts={posts} />
    </main>
  )
}
