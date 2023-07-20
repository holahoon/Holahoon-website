import { useEffect, useState } from "react"

export function useActiveItem(itemIds: string[]): string | null {
  const [activeId, setActiveId] = useState<string | null>(null)

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
