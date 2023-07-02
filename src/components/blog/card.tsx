import Link from "next/link"
import type { Post } from "contentlayer/generated"

import { formatDate } from "@/libs/utils.helper"
import { Icons } from "@/components/icons"

interface Props {
  post: Post
}

export default function card(props: Props) {
  const { post } = props

  console.log(post)

  const Category = post.category ? Icons[post.category] : Icons.laugh

  return (
    <article className="group rounded-lg p-6 transition duration-300 hover:bg-accent/80">
      <Link href={`${post.slug}`} className="mb-2 block">
        <h3 className="mb-2 text-xl/6 font-semibold group-hover:text-link">
          {post.title}
        </h3>
        <p className="mb-4 truncate text-foreground/80">{post.description}</p>
        {/* <span className="inline-flex items-center text-sm group-hover:text-foreground/80">
          Read more
          <Icons.arrow.right
            className="ml-2 -translate-x-1 opacity-0 transition-all delay-150 group-hover:translate-x-0 group-hover:text-link group-hover:opacity-100"
            width={16}
          />
        </span> */}
      </Link>

      <div>
        <time className="mb-2 inline-flex items-center text-sm/4 text-foreground/80">
          <Icons.calendar size={12} className="mr-1" />
          {formatDate(post.date, 0)}
        </time>

        <ul>
          {post.tags.map((tag) => (
            <li
              key={`${post._id}-${tag}`}
              className="mr-1 inline-flex items-center rounded-xl border border-border px-1.5 py-0.5 text-xs text-foreground/80 last:mr-0"
            >
              <Category size={14} className="mr-1" />
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </article>
  )
}
