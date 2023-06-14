import Mdx from "../mdx/mdx-component"
import type { Post } from "contentlayer/generated"

interface Props {
   post: Post
}

export default function card(props: Props) {
   const { post } = props

   return (
      <article className="prose prose-slate">
         <h2>{post.title}</h2>
         <p>{post.description}</p>
         <time>{post.date}</time>

         <Mdx code={post.body.code} />
      </article>
   )
}
