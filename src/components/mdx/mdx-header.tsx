import type { HTMLAttributes } from "react"

import { cn, formatDate } from "@/libs/utils"
import { Icons } from "../icons"

interface MdxHeaderProps extends HTMLAttributes<HTMLDivElement> {
  header: string
  description: string
  date?: string
  readTime?: number
}

export default function MdxHeader(props: MdxHeaderProps) {
  const { header, description, date, readTime, className } = props

  return (
    <div className={cn("my-10", className)}>
      <div className="space-y-4">
        <h1 className="mb- text-3xl font-bold tracking-tight md:text-4xl">
          {header}
        </h1>
        <p className="text-lg text-primary/80">{description}</p>

        <div className="space-x-6">
          {date ? (
            <time className="inline-flex items-center text-sm text-primary/70">
              <Icons.calendar size={12} className="mr-1" />
              {formatDate(date, 0)}
            </time>
          ) : null}

          {readTime ? (
            <span className="inline-flex items-center text-sm text-primary/70">
              <Icons.clock size={14} className="mr-1" />
              {readTime} min read
            </span>
          ) : null}
        </div>
      </div>
      <hr className="mt-6" />
    </div>
  )
}
