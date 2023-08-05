import type { HTMLAttributes } from "react"

import { cn } from "@/libs/utils/utils.helpers"

interface CategoryHeaderProps extends HTMLAttributes<HTMLHeadingElement> {}

export default function CategoryHeader(props: CategoryHeaderProps) {
  const { children, id, className } = props

  return (
    <h2 id={id} className={cn("mb-6 text-2xl font-semibold", className)}>
      {children}
    </h2>
  )
}
