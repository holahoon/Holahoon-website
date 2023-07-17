"use client"

import { usePathname } from "next/navigation"
import { useEffect, type ReactNode } from "react"

import PageHeader from "@/components/layout/page-header"

interface LayoutProps {
  children: ReactNode
}

// export const metadata = {
//   title: "DK",
//   description: "DK's page",
// }

export default function BlogLayout(props: LayoutProps) {
  const { children } = props
  const pathname = usePathname()

  useEffect(() => {
    console.log(pathname)
    window.scroll(0, 0)
  }, [pathname])

  return (
    <>
      <PageHeader header="Delighted to meet you!">
        <p className="text-primary/90">
          I&apos;m <strong>David</strong>, a web developer
        </p>
        <p className="text-primary/90">
          passionate about transforming ideas into interactive digital
          realities.
        </p>
      </PageHeader>

      <section>{children}</section>
    </>
  )
}