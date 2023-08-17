import Link, { type LinkProps } from "next/link"
import type { ReactNode } from "react"

import { cn } from "@/libs/utils"

interface Props extends LinkProps {
  children: ReactNode
  className?: string
}

export default function ExternalLink(props: Props) {
  const { children, href, className, ...rest } = props

  return (
    <Link
      href={href}
      target="__blank"
      rel="noreferrer"
      className={cn("font-medium underline underline-offset-4", className)}
      {...rest}
    >
      {children}
    </Link>
  )
}
