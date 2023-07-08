import { type ReactNode } from "react"

interface LayoutProps {
  children: ReactNode
}

export const metadata = {
  title: "Hooniverse blog",
  description: "This is DK's blog",
}

export default function BlogLayout(props: LayoutProps) {
  const { children } = props

  return (
    <main className="mt-10">
      <div className="mb-20 border-b border-border pb-8">
        <h1 className="mb-8 text-4xl font-bold">Blog</h1>
        <p>I like to share my thoughts and expertise with the world.</p>
        <p>blah blah blah blah.. I don't know what to write</p>
      </div>

      <div className="flex">{children}</div>
    </main>
  )
}
