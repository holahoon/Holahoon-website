import { readdir } from "fs/promises"
import { allTils, type Til } from "contentlayer/generated"

import { directoryMapper } from "./til.constants"
import { Directories } from "./til.types"

/** TIL */

export const getRecentTils = async (qty: number): Promise<Til[]> => {
  return allTils.slice(0, qty)
}

export const getTilsFromParams = async (params: {
  slug: string[]
}): Promise<Til | null> => {
  const slug = params.slug?.join("/")
  const til = allTils.find((til) => til.slugAsParams === slug)

  if (!til) return null
  return til
}

export const getTilsByCategory = async (category: string): Promise<Til[]> => {
  return allTils.filter((til) => til.category === category)
}

export const getTilsByCategories = async (categories: string[]): Promise<> => {
  // return categories.
}

export const getUniqueTilCategories = async (): Promise<Til["category"][]> => {
  const categories = allTils.map((post) => post.category)
  return categories.filter((post, idx, array) => array.indexOf(post) === idx)
}

export const getTilDirectories = async (dir: string): Promise<Directories> => {
  const directories = await readdir(dir)
  return directories.reduce(
    (dirs, dir) => ({
      ...dirs,
      [dir]: directoryMapper[dir],
    }),
    {} as Directories
  )
}
