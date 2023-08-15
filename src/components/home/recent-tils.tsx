import { getRecentTils } from "@/libs/til"
import Card from "@/components/til/card"
import CategoryHeader from "../til/category-header"

export default async function RecentTil() {
  const recentTils = await getRecentTils(3)

  return (
    <section className="mt-20">
      <CategoryHeader>Recent TILs</CategoryHeader>

      <ul className="space-y-4">
        {recentTils.map((til) => (
          <li key={til._id}>
            <Card article={til} />
          </li>
        ))}
      </ul>
    </section>
  )
}
