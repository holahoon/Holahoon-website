import { notFound } from "next/navigation"

import { getTilsFromParams, ss } from "@/libs/blog"
import Mdx from "@/components/mdx/mdx-component"

interface PageProps {
  params: { slug: string[] }
}

export default async function BlogPage(props: PageProps) {
  const { params } = props
  const post = await getTilsFromParams(params)
  const s = await ss()

  if (!post) notFound()

  return (
    <div className="prose mx-auto dark:prose-invert">
      <Mdx code={post.body.code} />
    </div>
  )
}
