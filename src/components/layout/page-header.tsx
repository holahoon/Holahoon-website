import type { HTMLAttributes } from "react"

import { cn } from "@/libs/utils/utils.helpers"

interface PageHeaderProps extends HTMLAttributes<HTMLElement> {
  header: string | JSX.Element
}

export default function PageHeader(props: PageHeaderProps) {
  const { children, header, className } = props

  return (
    <section className={cn("mb-20 border-b border-border pb-8", className)}>
      <h1 className="mb-6 text-3xl font-bold">{header}</h1>
      {children}
    </section>
  )
}
