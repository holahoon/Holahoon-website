import { type ReactNode } from "react"

import MenuAside from "@/components/blog/menu-aside"

interface LayoutProps {
  children: ReactNode
}

export const metadata = {
  title: "Hooniverse blog",
  description: "This is DK's blog",
}

const MENUS = ["programming", "living", "etc"]

export default function BlogLayout(props: LayoutProps) {
  const { children } = props

  return (
    <main className="mt-10">
      <div className="mb-14">
        <h1 className="mb-8 text-4xl font-bold">Blog</h1>
        <p>
          A place where I want to store and share my thoughts and experience.
        </p>
      </div>

      <div className="flex">
        <aside className="sticky top-[175px] mr-8 h-full">
          <MenuAside menus={MENUS} />
        </aside>

        <section className="min-w-0">{children}</section>
      </div>
    </main>
  )
}
