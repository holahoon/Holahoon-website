import type { HTMLAttributes } from "react"

import { formatDateFromNow } from "@/libs/utils"
import { Icons } from "../icons"

interface MdxHeaderProps extends HTMLAttributes<HTMLDivElement> {
  header: string
  description: string
  date?: string
  readTime?: number
}

export default function MdxHeader(props: MdxHeaderProps) {
  const { header, description, date, readTime } = props

  return (
    <>
      <header>
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
          {header}
        </h1>

        <p className="mt-6 text-lg text-primary/80">{description}</p>

        <div className="my-4 space-x-6">
          {date ? (
            <time className="inline-flex items-center text-sm text-primary/70">
              <Icons.calendar size={12} className="mr-1" />
              {formatDateFromNow(date, 0)}
            </time>
          ) : null}

          {readTime ? (
            <span className="inline-flex items-center text-sm text-primary/70">
              <Icons.clock size={14} className="mr-1" />
              {readTime} min read
            </span>
          ) : null}
        </div>
      </header>

      <hr className="mb-6 mt-6" />

      <div className="mb-2 font-medium">TABLE OF CONTENTS</div>
    </>
  )
}
