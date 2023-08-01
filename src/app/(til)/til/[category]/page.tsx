import { getTilsByCategory } from "@/libs/blog"
import Card from "@/components/blog/card"
import CategoryHeader from "@/components/blog/category-header"

interface PageProps {
  params: { category: string }
}

export default async function CategoryPage(props: PageProps) {
  const {
    params: { category },
  } = props

  const tils = await getTilsByCategory(category)

  return (
    <section>
      <CategoryHeader>{category}</CategoryHeader>

      <div>
        <ul>
          {tils.map((til) => (
            <li key={til._id} className="mb-4 last:mb-0">
              <Card article={til} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
