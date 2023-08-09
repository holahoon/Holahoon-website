import { notFound } from "next/navigation"

import { getTilsFromParams } from "@/libs/blog"
import Mdx from "@/components/mdx/mdx-component"
import MdxHeader from "@/components/mdx/mdx-header"

import "@/styles/mdx.css"

interface PageProps {
  params: { slug: string[] }
}

export default async function BlogPage(props: PageProps) {
  const { params } = props

  const post = await getTilsFromParams(params)

  if (!post) notFound()

  return (
    <>
      <MdxHeader
        header={post.title}
        description={post.description}
        date={post.date}
        readTime={post.readTime}
      />
      <Mdx code={post.body.code} />
    </>
  )
}
