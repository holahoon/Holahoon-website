import { type ReactNode } from "react"

interface TilSlugLayoutProps {
  children: ReactNode
}

export default function TilSlugLayout(props: TilSlugLayoutProps) {
  const { children } = props

  return <div className="mt-12">{children}</div>
  // return <main className="mx-auto mt-12 w-full flex-1">{children}</main>
}
