import { notFound } from "next/navigation"

import { getTilsFromParams } from "@/libs/blog"
import Mdx from "@/components/mdx/mdx-component"

import "@/styles/mdx.css"

interface PageProps {
  params: { slug: string[] }
}

export default async function BlogPage(props: PageProps) {
  const { params } = props
  const post = await getTilsFromParams(params)

  if (!post) notFound()

  return (
    // <div className="prose mx-auto dark:prose-invert">
    <div className="mx-auto">
      <Mdx code={post.body.code} />
    </div>
  )
}
