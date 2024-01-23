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
        <p className="text-primary/90">
          A committed frontend developer with 4 years of experience ni web
          development, motivated by a desire for continuous learning and
          consistent growth. Eager to apply both passion and skills to
          collaborate and contribute within a dynamic team environment.
        </p>
      </PageHeader>
      {children}
    </div>
  )
}
