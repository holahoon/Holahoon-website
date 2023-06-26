import Link from "next/link"
import type { Post } from "contentlayer/generated"

interface Props {
  post: Post
}

export default function card(props: Props) {
  const { post } = props

  return (
    <article className="h-[250px] rounded-md border border-border p-6">
      <Link href={`${post.slug}`}>
        <h3 className="mb-2 text-lg/6 font-semibold">{post.title}</h3>
        <p>{post.description}</p>
        <time>{post.date}</time>
        <span className="rounded-full bg-green-300 px-1 py-0.5 text-xs">
          {post.tag}
        </span>
      </Link>
    </article>
  )
}
