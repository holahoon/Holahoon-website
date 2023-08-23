import type { Metadata } from "next"
import { type ReactNode } from "react"

import PageHeader from "@/components/layout/page-header"

interface LayoutProps {
  children: ReactNode
}

export const metadata: Metadata = {
  title: "About",
  description: "Holahoon - About David Kim",
}

export default function ProjectsLayout(props: LayoutProps) {
  const { children } = props

  return (
    <div className="flex h-full flex-1 flex-col">
      <PageHeader header="About">
        <p className="text-primary/90">Hi there! I&apos;m David Kim,</p>
        <p className="text-primary/90">but you can call me DK.</p>
      </PageHeader>
      {children}
    </div>
  )
}
