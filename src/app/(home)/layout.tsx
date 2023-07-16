import { type ReactNode } from "react"

import PageHeader from "@/components/layout/page-header"

interface LayoutProps {
  children: ReactNode
}

export const metadata = {
  title: "DK",
  description: "DK's page",
}

export default function BlogLayout(props: LayoutProps) {
  const { children } = props

  return (
    <>
      <PageHeader header="Hi! I'm DK,">
        <p className="text-lg">a web developer.</p>
        <p>I constantly seek out innovative solutions to everyday problems</p>
      </PageHeader>

      <div className="flex">{children}</div>
    </>
  )
}
