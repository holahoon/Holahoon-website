import Link, { type LinkProps } from "next/link"
import { type ReactNode } from "react"

import { cn } from "@/libs/utils/utils.helper"

interface Props extends LinkProps {
  children: ReactNode
  className?: string
}

function HighlightLink(props: Props) {
  const { children, href, className, ...rest } = props

  return (
    <Link href={href} className={cn("", className)} {...rest}>
      {children}
    </Link>
  )
}

export default HighlightLink
