import { allPosts } from "contentlayer/generated";
import { compareDesc } from "date-fns";

import Card from "@/components/blog/card";

export default function Blog() {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );
  return (
    <div className="flex">
      {posts.map((post) => (
        <Card key={post._id} post={post} />
      ))}
    </div>
  );
}
