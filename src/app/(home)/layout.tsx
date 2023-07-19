import { type ReactNode } from "react"

interface LayoutProps {
  children: ReactNode
}

export const metadata = {
  title: "DK, web dev",
  description: "David Kim, a web developer",
}

export default function BlogLayout(props: LayoutProps) {
  const { children } = props

  return <main className="mt-12 flex flex-1 flex-col">{children}</main>
}
