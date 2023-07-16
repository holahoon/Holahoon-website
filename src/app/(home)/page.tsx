import { getRecentTils } from "@/libs/blog/til"

export default async function Home() {
  const articles = await getRecentTils(4)

  console.log(articles)

  return <>blah blah blah</>
}
