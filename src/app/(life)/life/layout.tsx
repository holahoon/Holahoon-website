import { type ReactNode } from "react"

interface LayoutProps {
  children: ReactNode
}

export const metadata = {
  title: "DK, life",
  description: "David Kim, a web developer",
}

export default function LifeLayout(props: LayoutProps) {
  const { children } = props

  return <div className="flex h-full flex-1 flex-col">{children}</div>
}
