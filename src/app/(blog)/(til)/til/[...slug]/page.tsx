import { notFound } from "next/navigation"
import { allProgrammings, type Programming } from "contentlayer/generated"

import Mdx from "@/components/mdx/mdx-component"

interface PageProps {
  params: { slug: string[] }
}

const getArticleFromParams = async (
  params: PageProps["params"]
): Promise<Programming | null> => {
  const slug = params.slug?.join("/")
  const post = allProgrammings.find((post) => post.slug === slug)
  if (!post) return null
  return post
}

export default async function BlogPage(props: PageProps) {
  const { params } = props
  const post = await getArticleFromParams(params)

  if (!post) notFound()

  return (
    <div className="prose mx-auto max-w-screen-full dark:prose-invert">
      <Mdx code={post.body.code} />
    </div>
  )
}
