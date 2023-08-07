import { type ReactNode } from "react"

import PrevLink from "@/components/til/prev-link"

interface TilSlugLayoutProps {
  children: ReactNode
}

export default function TilSlugLayout(props: TilSlugLayoutProps) {
  const { children } = props

  return (
    <div className="mb-6 mt-12">
      <PrevLink />
      {children}
    </div>
  )
}
