import { type Programming } from "contentlayer/generated"

import {
  useGetNumberOfProgramming,
  useGetProgrammingByCategories,
  useSortProgrammingByDate,
} from "@/hooks/blog"
import Card from "./card"

interface ListProps {
  category: Programming["category"]
  programmings: Programming[]
}

const MAX_QTY = 6

export default function List(props: ListProps) {
  const { programmings, category } = props

  const programmingsByCategory = useGetProgrammingByCategories(
    programmings,
    category
  )
  const sortedProgrammings = useSortProgrammingByDate(
    programmingsByCategory,
    "desc"
  )
  const numberOfProgrammings = useGetNumberOfProgramming(sortedProgrammings, {
    position: "beginning",
    until: MAX_QTY,
  })

  if (!numberOfProgrammings.length) return <div>Contents coming up</div>

  return (
    <ul>
      {numberOfProgrammings.map((programming) => (
        <li key={programming._id} className="mb-4 last:mb-0">
          <Card post={programming} />
        </li>
      ))}
    </ul>
  )
}
