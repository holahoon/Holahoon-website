import { readdir } from "fs/promises"
import { allTils, type Til } from "contentlayer/generated"
import { compareDesc } from "date-fns"

import { directoryMapper } from "./til.constants"
import type { Directories, TilCounts, TilPager } from "./til.types"

export const getRecentTils = async (qty: number): Promise<Til[]> => {
  const descOrder = allTils.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  )
  return descOrder.slice(0, qty)
}

export const getTilFromParams = async (params: {
  slug: string[]
}): Promise<Til | null> => {
  const slug = params.slug?.join("/")
  const til = allTils.find((til) => til.slugAsParams === slug)

  if (!til) return null
  return til
}

export const getTilsByCategory = async (
  category: string | undefined
): Promise<Til[]> => {
  if (!category) return []
  return allTils.filter((til) => til.category === category)
}

export const getTilCountsByCategories = async (): Promise<TilCounts> => {
  return allTils.reduce((tils, til) => {
    return {
      ...tils,
      [til.category]: (tils[til.category] || 0) + 1,
    }
  }, {} as TilCounts)
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
      [dir]: directoryMapper[dir] ?? dir,
    }),
    {} as Directories
  )
}

export const getTilPager = (posts: Til[], slugs: string[]): TilPager => {
  const firstIdx = 0
  const lastIdx = posts.length - 1
  const foundPostIdx = posts.findIndex((post) =>
    slugs.includes(post.slugAsParams)
  )

  const prevPost = foundPostIdx === firstIdx ? null : posts[foundPostIdx - 1]
  const nextPost = foundPostIdx === lastIdx ? null : posts[foundPostIdx + 1]

  return {
    prevPost,
    nextPost,
  }
}
