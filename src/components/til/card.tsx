import Link from "next/link"
import type { Til } from "contentlayer/generated"

import { formatDateFromNow } from "@/libs/utils/utils.helpers"
import { Icons } from "@/components/icons"

interface Props {
  article: Til
}

export default function Card(props: Props) {
  const { article } = props

  // const Category = article.category ? Icons[article.category] : Icons.laugh

  return (
    <article className="hover:bg-accent/85 group rounded-lg bg-accent/50 p-6 transition duration-300">
      <Link href={`/${article.slug}`} className="block">
        {/* Content */}
        <h3 className="mb-3 line-clamp-2 text-lg/6 font-medium text-primary transition-colors duration-300 group-hover:text-link md:text-xl/6">
          {article.title}
        </h3>
        <p className="mb-4 line-clamp-2 text-primary/80">
          {article.description}
        </p>

        <div className="flex">
          {/* <span className="mr-auto inline-flex items-center text-sm font-medium text-primary/70 group-hover:text-primary">
            Read more
            <Icons.move.right
              className="ml-2 -translate-x-1 opacity-0 transition-all delay-150 group-hover:translate-x-0 group-hover:text-link group-hover:opacity-100"
              width={16}
            />
          </span> */}

          {/* Views */}
          <span className="mr-6 inline-flex items-center text-sm/4 text-primary/70">
            <Icons.clock size={14} className="mr-1" />
            {article.readTime} min read
          </span>

          {/* Date */}
          <time className="inline-flex items-center text-sm/4 text-primary/70">
            <Icons.calendar size={12} className="mr-1" />
            {formatDateFromNow(article.date, 0)}
          </time>

          {/* Tags (Not sure if I'm going to use tags) */}
          {/* <ul>
          {article.tags.map((tag) => (
            <li
              key={`${article._id}-${tag}`}
              className="mr-1 inline-flex items-center rounded-md border border-primary/50 px-2 py-0.5 text-xs text-primary/80 last:mr-0"
            >
              <Category size={14} className="mr-1" />
              {tag}
            </li>
          ))}
        </ul> */}
        </div>
      </Link>
    </article>
  )
}
