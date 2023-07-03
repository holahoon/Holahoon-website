import { type Post } from "contentlayer/generated"

import Card from "./card"

interface ListProps {
  posts: Post[]
}

export default function List(props: ListProps) {
  const { posts } = props

  return (
    <ul className="mx-auto max-w-2xl">
      {posts.map((post) => (
        <li key={post._id} className="mb-4 last:mb-0">
          <Card post={post} />
        </li>
      ))}
    </ul>
  )
}
