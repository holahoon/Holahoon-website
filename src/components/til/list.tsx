import { type Til } from "contentlayer/generated"

import {
  useGetNumberOfTil,
  useGetTilByCategories,
  useSortTilByDate,
} from "@/hooks/til"
import Card from "./card"

interface ListProps {
  category: Til["category"]
  contents: Til[]
}

const MAX_QTY = 6

export default function List(props: ListProps) {
  const { contents, category } = props

  const tilsByCategory = useGetTilByCategories(contents, category)
  const sortedTils = useSortTilByDate(tilsByCategory, "desc")
  const numberOfTils = useGetNumberOfTil(sortedTils, {
    position: "beginning",
    until: MAX_QTY,
  })

  return (
    <ul>
      {numberOfTils.map((til) => (
        <li key={til._id} className="mb-4 last:mb-0">
          <Card article={til} />
        </li>
      ))}
    </ul>
  )
}
