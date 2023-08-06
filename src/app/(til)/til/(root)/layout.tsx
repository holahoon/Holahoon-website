import { type ReactNode } from "react"

import PageHeader from "@/components/layout/page-header"
import AsideMenu from "@/components/til/aside-menu"

interface TilLayoutProps {
  children: ReactNode
}

export default async function TilLayout(props: TilLayoutProps) {
  const { children } = props

  return (
    <div className="mt-12">
      <PageHeader header="Today I Learned">
        <p className="text-primary/90">I share nuggets of knowledge</p>
        <p className="text-primary/90">
          and insights that I&apos;ve picked up along my journey.
        </p>
      </PageHeader>

      {children}
    </div>
  )
}
