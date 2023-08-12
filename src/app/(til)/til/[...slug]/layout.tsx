import { type ReactNode } from "react"

interface TilSlugLayoutProps {
  children: ReactNode
}

export default function TilSlugLayout(props: TilSlugLayoutProps) {
  const { children } = props

  return <article className="mb-6 mt-12">{children}</article>
}
