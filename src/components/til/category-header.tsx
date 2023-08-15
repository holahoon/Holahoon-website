import Link from "next/link"
import type { HTMLAttributes } from "react"

import { cn } from "@/libs/utils/utils.helpers"
import { Icons } from "../icons"

interface CategoryHeaderProps extends HTMLAttributes<HTMLHeadingElement> {}

export default function CategoryHeader(props: CategoryHeaderProps) {
  const { children, id, className } = props

  return (
    <h2
      id={id}
      className={cn(
        "mb-4 flex items-center text-xl font-semibold md:text-2xl",
        className
      )}
    >
      {children}
      <Link
        href={{ pathname: "/til", query: { category: id } }}
        className="group ml-auto inline-flex items-center text-sm font-medium text-primary/70 hover:text-primary"
      >
        more posts
        <Icons.move.right
          width={16}
          className="ml-2 -translate-x-1 opacity-0 transition-all delay-150 group-hover:translate-x-0 group-hover:text-link group-hover:opacity-100"
        />
      </Link>
    </h2>
  )
}
