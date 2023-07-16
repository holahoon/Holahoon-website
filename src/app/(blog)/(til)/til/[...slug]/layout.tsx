import { type ReactNode } from "react"

interface TilSlugLayoutProps {
  children: ReactNode
}

export default function TilSlugLayout(props: TilSlugLayoutProps) {
  const { children } = props

  return <main>{children}</main>
}
