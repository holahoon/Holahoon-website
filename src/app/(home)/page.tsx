import Link from "next/link"

import { getRecentTils } from "@/libs/blog/til"
import Card from "@/components/blog/card"
import { Icons } from "@/components/icons"

const MAX_ARTICLES_QTY = 4

export default async function Home() {
  const articles = await getRecentTils(MAX_ARTICLES_QTY)

  return (
    <>
      <div className="mb-20">
        <h3 className="mb-6 text-2xl font-semibold">Recent TILs</h3>

        <ul>
          {articles.map((article) => (
            <li key={article._id} className="mb-4 last:mb-0">
              <Card article={article} />
            </li>
          ))}
        </ul>

        <div className="mt-8 flex">
          <Link
            href="/til"
            className="ml-auto flex items-center text-sm font-medium transition duration-300 hover:text-link"
          >
            View All TILs <Icons.arrow.right width={16} className="ml-2" />
          </Link>
        </div>
      </div>
    </>
  )
}
