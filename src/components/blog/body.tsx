import { Post } from "contentlayer/generated"

import Mdx from "@/components/mdx/mdx-component"

interface BodyProps {
  post: Post
}

export default function Body(props: BodyProps) {
  const { post } = props

  return <Mdx code={post.body.code} />
}
