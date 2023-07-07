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
      <div className="mb-14">
        <h1 className="mb-8 text-4xl font-bold">Blog</h1>
        <p>A place where I share my life.</p>
      </div>

      <div className="flex">{children}</div>
    </main>
  )
}
