import type { Post } from "contentlayer/generated"

interface Props {
  post: Post
}

export default function card(props: Props) {
  const { post } = props

  return (
    <article>
      <h2>{post.title}</h2>
      <p>{post.description}</p>
      <time>{post.date}</time>
    </article>
  )
}
