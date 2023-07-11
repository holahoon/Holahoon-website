import { useEffect, useState } from "react"

export function useActiveItem(itemIds: string[]): string | null {
  const [activeId, setActiveId] = useState<string | null>(null)

  // Not sure if accessing directly into the DOM and getting element by id is a good approach.
  // I might need to forwards reference of the DOM object instead?
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id)
        })
      },
      { rootMargin: `0% 0% -70% 0%` }
    )

    itemIds.forEach((itemId) => {
      const element = document.getElementById(itemId)
      if (element) observer.observe(element)
    })

    return () => {
      itemIds.forEach((itemId) => {
        const element = document.getElementById(itemId)
        if (element) observer.unobserve(element)
      })
    }
  }, [itemIds])

  return activeId
}
