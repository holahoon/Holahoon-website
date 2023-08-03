import { type ReactNode } from "react"

interface LayoutProps {
  children: ReactNode
}

export const metadata = {
  title: "DK, web dev",
  description: "David Kim, a web developer",
}

export default function HomeLayout(props: LayoutProps) {
  const { children } = props

  return <div className="mt-12 flex h-full flex-col ">{children}</div>
}
