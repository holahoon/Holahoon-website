import { readdir } from "fs/promises"
import { allTils, type Til } from "contentlayer/generated"

import { directoryMapper } from "./til.constants"

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

export const getUniqueTilCategories = async (): Promise<Til["category"][]> => {
  const categories = allTils.map((post) => post.category)
  return categories.filter((post, idx, array) => array.indexOf(post) === idx)
}

export const getTilDirectories = async (
  dir: string
): Promise<Til["category"][]> => {
  const directories = await readdir(dir)
  return directories.map((directory) => directoryMapper[directory])
}
