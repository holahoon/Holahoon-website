import { type Post } from "contentlayer/generated"

import { useGetNumberOfPosts, useGetPostsByCategories } from "@/hooks/blog"
import Card from "./card"

interface ListProps {
  category: Post["category"]
  posts: Post[]
}

const MAX_QTY = 6

export default function List(props: ListProps) {
  const { posts, category } = props

  const postsByCategory = useGetPostsByCategories(posts, category)
  const numberOfPosts = useGetNumberOfPosts(postsByCategory, {
    position: "beginning",
    until: MAX_QTY,
  })

  return (
    <ul>
      {numberOfPosts.map((post) => (
        <li key={post._id} className="mb-4 last:mb-0">
          <Card post={post} />
        </li>
      ))}
    </ul>
  )
}
