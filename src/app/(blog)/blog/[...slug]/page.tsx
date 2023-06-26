import { notFound } from "next/navigation"
import { allPosts, type Post } from "contentlayer/generated"

import Mdx from "@/components/mdx/mdx-component"

interface BlogDetailProps {
  params: { slug: string[] }
}

const getBlogFromParams = async (
  params: BlogDetailProps["params"]
): Promise<Post | null> => {
  const slug = params.slug?.join("")
  const post = allPosts.find((post) => post.slugAsParams === slug)
  if (!post) return null
  return post
}

export default async function BlogPage(props: BlogDetailProps) {
  const { params } = props
  const post = await getBlogFromParams(params)

  if (!post) notFound()

  return (
    <div className="mx-dark:prose-invert prose">
      <Mdx code={post.body.code} />
    </div>
  )
}
