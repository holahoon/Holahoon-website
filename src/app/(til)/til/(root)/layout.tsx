import type { Metadata } from "next"
import { type ReactNode } from "react"

import PageHeader from "@/components/layout/page-header"

interface TilLayoutProps {
  children: ReactNode
}

export const metadata: Metadata = {
  title: "TIL",
  description: "Hooniverse - Today I Learned",
}

export default async function TilLayout(props: TilLayoutProps) {
  const { children } = props

  return (
    <div className="mt-12">
      <PageHeader header="Today I Learned">
        <p className="text-primary/90">
          I share nuggets of knowledge and valuable tidbits
        </p>
        <p className="text-primary/90">
          with the world of software development.
        </p>
      </PageHeader>

      {children}
    </div>
  )
}
