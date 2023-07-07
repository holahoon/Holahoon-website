import { useMemo } from "react"
import type { Post } from "contentlayer/generated"
import { compareDesc } from "date-fns"

export function useSortPostsByDate(
  posts: Post[],
  order: "desc" | "asc"
): Post[] {
  return useMemo(() => {
    if (order === "desc")
      return posts.sort((a, b) =>
        compareDesc(new Date(a.date), new Date(b.date))
      )
    return posts.sort((a, b) => compareDesc(new Date(b.date), new Date(a.date)))
  }, [posts, order])
}

export function useGetPostsCategories(posts: Post[]): Post["category"][] {
  return useMemo(() => {
    const categories = posts.map((post) => post.category)
    const uniqueCategories = categories.filter(
      (post, idx, array) => array.indexOf(post) === idx
    )
    return uniqueCategories
  }, [posts])
}

export function useGetPostsByCategories(
  posts: Post[],
  category: Post["category"]
): Post[] {
  return useMemo(
    () => posts.filter((post) => post.category === category),
    [posts, category]
  )
}
