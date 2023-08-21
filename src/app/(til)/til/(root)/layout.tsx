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
          Here, I write and document things I&apos;ve picked up in the realm of
          software development.
        </p>
        <p className="text-primary/90">
          I&apos;m a firm believer that{" "}
          <i>consistency is the key to a great achievement.</i>
        </p>
      </PageHeader>

      {children}
    </div>
  )
}
