import Link from "next/link"
import type { Post } from "contentlayer/generated"

import { Icons } from "@/components/icons"

interface Props {
  post: Post
}

export default function card(props: Props) {
  const { post } = props

  return (
    <article className="mb-4 flex max-h-[150px] rounded-lg p-6 transition duration-300 hover:bg-accent/80">
      <Link href={`${post.slug}`} className="flex-1">
        <h3 className="mb-2 text-xl/6 font-semibold">{post.title}</h3>
        <p className="mb-4 truncate">{post.description}</p>

        <time className="inline-flex items-center rounded-md border border-border bg-ring px-1 py-0.5 text-sm/4">
          <Icons.calendar size={12} className="mr-1" />
          {post.date}
        </time>
        <span className="rounded-full bg-green-300 px-1 py-0.5 text-xs text-green-800">
          {post.tag}
        </span>
      </Link>
    </article>
  )
}
