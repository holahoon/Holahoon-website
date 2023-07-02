import Link from "next/link"
import type { Post } from "contentlayer/generated"

import { formatDate } from "@/libs/utils.helper"
import { Icons } from "@/components/icons"

interface Props {
  post: Post
}

export default function card(props: Props) {
  const { post } = props

  // const Category = post.category ? Icons[post.category] : Icons.laugh

  return (
    <article className="group rounded-lg p-4 transition duration-300 hover:bg-accent/80">
      <Link href={`${post.slug}`} className="mb-2 block">
        {/* Content */}
        <h3 className="mb-2 text-xl/6 font-medium text-primary group-hover:text-link">
          {post.title}
        </h3>
        <p className="mb-2 truncate text-primary/80">{post.description}</p>
        <span className="inline-flex items-center text-sm font-medium text-primary group-hover:text-primary/80">
          Read more
          <Icons.arrow.right
            className="ml-2 -translate-x-1 opacity-0 transition-all delay-150 group-hover:translate-x-0 group-hover:text-link group-hover:opacity-100"
            width={16}
          />
        </span>
      </Link>

      <div className="flex items-center">
        {/* Date */}
        <time className="mr-4 inline-flex items-center text-sm/4 text-primary/80">
          <Icons.calendar size={12} className="mr-1" />
          {formatDate(post.date, 0)}
        </time>

        {/* Views */}
        <span className="inline-flex items-center text-sm/4 text-primary/80">
          <Icons.eye size={14} className="mr-1" />0
        </span>

        {/* Tags (Not sure if I'm going to use tags) */}
        {/* <ul>
          {post.tags.map((tag) => (
            <li
              key={`${post._id}-${tag}`}
              className="mr-1 inline-flex items-center rounded-md border border-primary/50 px-2 py-0.5 text-xs text-primary/80 last:mr-0"
            >
              <Category size={14} className="mr-1" />
              {tag}
            </li>
          ))}
        </ul> */}
      </div>
    </article>
  )
}
