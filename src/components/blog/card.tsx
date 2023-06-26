import Link from "next/link"
import type { Post } from "contentlayer/generated"

interface Props {
  post: Post
}

export default function card(props: Props) {
  const { post } = props

  return (
    <article>
      <Link href={`${post.slug}`}>
        <h2>{post.title}</h2>
        <p>{post.description}</p>
        <time>{post.date}</time>
        <span>{post.tag}</span>
      </Link>
    </article>
  )
}
