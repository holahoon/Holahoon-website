import { type ReactNode } from "react"

interface TilSlugLayoutProps {
  children: ReactNode
}

export default function TilSlugLayout(props: TilSlugLayoutProps) {
  const { children } = props

  return <article className="mb-2 mt-12">{children}</article>
}
