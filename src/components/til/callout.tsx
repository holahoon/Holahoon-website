import { type HTMLAttributes } from "react"

import { Icons } from "@/components/icons"

interface Props extends HTMLAttributes<HTMLElement> {
  title?: string
}

export default function Callout(props: Props) {
  const { title, children, ...rest } = props

  return (
    <div className="rounded-md bg-accent px-4 py-2">
      <div className="font-medium text-primary/90" {...rest}>
        {children}
      </div>
    </div>
  )
}
