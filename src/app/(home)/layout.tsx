import { type ReactNode } from "react"

interface LayoutProps {
  children: ReactNode
}

export default function HomeLayout(props: LayoutProps) {
  const { children } = props

  return <div className="flex flex-col">{children}</div>
}
