import { type Post } from "contentlayer/generated"

import { useGetPostsByCategories } from "@/hooks/blog"
import Card from "./card"

interface ListProps {
  category: Post["category"]
  posts: Post[]
}

export default function List(props: ListProps) {
  const { posts, category } = props

  const postsByCategory = useGetPostsByCategories(posts, category)

  return (
    <ul className="mx-auto max-w-2xl">
      {postsByCategory.map((post) => (
        <li key={post._id} className="mb-4 last:mb-0">
          <Card post={post} />
        </li>
      ))}
    </ul>
  )
}
