import Mdx from "../mdx/mdx-component"
import type { Post } from "contentlayer/generated"

interface Props {
   post: Post
}

export default function card(props: Props) {
   const { post } = props

   return (
      <article className="prose prose-slate">
         <div className="">
            <h2>{post.title}</h2>
            <p>{post.description}</p>
            <time>{post.date}</time>
         </div>

         <Mdx code={post.body.code} />
      </article>
   )
}
