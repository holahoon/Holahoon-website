import { notFound } from "next/navigation"

import { getTilsFromParams } from "@/libs/blog"
import Mdx from "@/components/mdx/mdx-component"

interface PageProps {
  params: { slug: string[] }
}

export default async function BlogPage(props: PageProps) {
  const { params } = props
  const post = await getTilsFromParams(params)

  if (!post) notFound()

  return (
    <div className="prose dark:prose-invert">
      <Mdx code={post.body.code} />
    </div>
  )
}
