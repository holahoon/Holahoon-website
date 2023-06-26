import { type Post } from "contentlayer/generated"

import Card from "./card"

interface ListProps {
  posts: Post[]
}

export default function List(props: ListProps) {
  const { posts } = props

  return (
    <ul className="grid grid-cols-3 gap-4">
      {posts.map((post) => (
        <li key={post._id}>
          <Card post={post} />
        </li>
      ))}
    </ul>
  )
}
