import { notFound } from "next/navigation"

import { getTilFromParams, getTilsByCategory } from "@/libs/til"
import MdxBody from "@/components/mdx/mdx-body"
import MdxHeader from "@/components/mdx/mdx-header"
import MdxPager from "@/components/mdx/mdx-pager"

import "@/styles/mdx.css"

interface PageProps {
  params: { slug: string[] }
}

export default async function BlogPage(props: PageProps) {
  const { params } = props

  const post = await getTilFromParams(params)
  const posts = await getTilsByCategory(post?.category)

  if (!post) notFound()

  return (
    <>
      <MdxHeader
        header={post.title}
        description={post.description}
        date={post.date}
        readTime={post.readTime}
      />
      <MdxBody code={post.body.code} />
      <MdxPager params={params} posts={posts} />
    </>
  )
}
