import type { HTMLAttributes } from "react"

import { cn } from "@/libs/utils/utils.helpers"

function Skeleton(props: HTMLAttributes<HTMLDivElement>) {
  const { className, ...rest } = props

  return (
    <div
      className={cn("animate-pulse rounded-md bg-primary/10", className)}
      {...rest}
    />
  )
}

export default Skeleton
