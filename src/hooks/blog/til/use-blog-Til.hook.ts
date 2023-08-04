import { useMemo } from "react"
import type { Til } from "contentlayer/generated"
import { compareDesc } from "date-fns"

export function useSortTilByDate(
  contents: Til[],
  order: "desc" | "asc"
): Til[] {
  return useMemo(() => {
    if (order === "desc")
      return contents.sort((a, b) =>
        compareDesc(new Date(a.date), new Date(b.date))
      )
    return contents.sort((a, b) =>
      compareDesc(new Date(b.date), new Date(a.date))
    )
  }, [contents, order])
}

export function useGetTilCategories(contents: Til[]): Til["category"][] {
  return useMemo(() => {
    const categories = contents.map((post) => post.category)
    const uniqueCategories = categories.filter(
      (post, idx, array) => array.indexOf(post) === idx
    )
    return uniqueCategories
  }, [contents])
}

export function useGetTilByCategories(
  contents: Til[],
  category: Til["category"] | null
): Til[] {
  return useMemo(() => {
    if (!category) return contents
    return contents.filter((post) => post.category === category)
  }, [contents, category])
}

interface BeginningOption {
  position: "beginning"
  until: number
}
interface EndOption {
  position: "end"
  from: number
}
export function useGetNumberOfTil(
  contents: Til[],
  option: BeginningOption | EndOption
) {
  const { position } = option

  const end = position === "beginning" ? option.until : 0
  const beginning = position === "end" ? option.from : 0

  return useMemo(
    () => contents.slice(beginning, end),
    [contents, beginning, end]
  )
}
