import type { Post } from "contentlayer/generated";
import Mdx from "../mdx/mdx-component";

interface Props {
  post: Post;
}

export default function card(props: Props) {
  const { post } = props;

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.description}</p>
      <time>{post.date}</time>

      <Mdx code={post.body.code} />
    </div>
  );
}
