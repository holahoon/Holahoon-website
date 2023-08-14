import { getRecentTils } from "@/libs/til"

export default async function RecentTil() {
  const recentTils = await getRecentTils(3)

  return (
    <section>
      <h3>Recent TILs</h3>

      {recentTils.map((til) => (
        <span key={til.title}>{til.title}</span>
      ))}
    </section>
  )
}
