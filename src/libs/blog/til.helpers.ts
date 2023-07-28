import { allTils, type Til } from "contentlayer/generated"

/** TIL */

export const getRecentTils = async (qty: number): Promise<Til[]> => {
  return allTils.slice(0, qty)
}

export const getTilsFromParams = async (params: {
  slug: string[]
}): Promise<Til | null> => {
  const slug = params.slug?.join("/")
  const post = allTils.find((post) => post.slugAsParams === slug)

  if (!post) return null
  return post
}

export const getTilCategories = async (): Promise<Til["category"][]> => {
  const categories = allTils.map((post) => post.category)
  return categories.filter((post, idx, array) => array.indexOf(post) === idx)
}

export const ss = async () => {
  console.log(allTils)
}
