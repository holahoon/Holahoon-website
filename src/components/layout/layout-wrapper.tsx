import type { ReactNode } from "react"

import { cn } from "@/libs/utils"

interface WrapperProps {
  children: ReactNode
  className?: string
}

export default function LayoutWrapper(props: WrapperProps) {
  const { children, className } = props

  return (
    <div className={cn("mx-auto max-w-screen-full px-4 md:px-12", className)}>
      {children}
    </div>
  )
}
