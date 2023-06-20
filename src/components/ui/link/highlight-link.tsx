import Link, { type LinkProps } from "next/link"
import { type ReactNode } from "react"

import { cn } from "@/libs/utils.helper"

interface Props extends LinkProps {
   children: ReactNode
   className?: string
}

export default function HighlightLink(props: Props) {
   const { children, href, className, ...rest } = props

   return (
      <Link href={href} className={cn("", className)} {...rest}>
         {children}
      </Link>
   )
}