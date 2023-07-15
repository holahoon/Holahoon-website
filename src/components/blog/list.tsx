import { type Til } from "contentlayer/generated"

import {
  useGetNumberOfTil,
  useGetTilByCategories,
  useSortTilByDate,
} from "@/hooks/blog"
import Card from "./card"

interface ListProps {
  category: Til["category"]
  contents: Til[]
}

const MAX_QTY = 6

export default function List(props: ListProps) {
  const { contents, category } = props

  const TilsByCategory = useGetTilByCategories(contents, category)
  const sortedTils = useSortTilByDate(TilsByCategory, "desc")
  const numberOfTils = useGetNumberOfTil(sortedTils, {
    position: "beginning",
    until: MAX_QTY,
  })

  if (!numberOfTils.length) return <div>Contents coming up</div>

  return (
    <ul>
      {numberOfTils.map((til) => (
        <li key={til._id} className="mb-4 last:mb-0">
          <Card post={til} />
        </li>
      ))}
    </ul>
  )
}
