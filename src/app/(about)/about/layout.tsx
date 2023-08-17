import type { Metadata } from "next"
import { type ReactNode } from "react"

interface LayoutProps {
  children: ReactNode
}

export const metadata: Metadata = {
  title: "About",
  description: "Hooniverse - About David Kim",
}

export default function ProjectsLayout(props: LayoutProps) {
  const { children } = props

  return <div className="flex h-full flex-1 flex-col">{children}</div>
}
