import Link from "next/link"
import type { Til } from "contentlayer/generated"

import { getTilPager } from "@/libs/til"
import { cn } from "@/libs/utils"
import { Icons } from "@/components/icons"
import { buttonVariants } from "../ui/button"

interface MdxPagerProps {
  params: { slug: string[] }
  posts: Til[]
}

export default function MdxPager(props: MdxPagerProps) {
  const {
    params: { slug },
    posts,
  } = props

  const { nextPost, prevPost } = getTilPager(posts, slug)

  if (!prevPost && !nextPost) return null

  return (
    <>
      <hr className="mt-14" />

      <div className="mt-6 flex items-center justify-between gap-4">
        {prevPost ? (
          <div className="flex flex-1 justify-start">
            <Link
              href={`/til/${prevPost.slugAsParams}`}
              className={cn(
                buttonVariants({ variant: "ghost" }),
                "space-x-2 text-base text-primary/80 hover:text-primary"
              )}
            >
              <Icons.chevron.left width={16} />
              <span>{prevPost.title}</span>
            </Link>
          </div>
        ) : (
          <div />
        )}

        {nextPost ? (
          <div className="flex flex-1 justify-end">
            <Link
              href={`/til/${nextPost.slugAsParams}`}
              className={cn(
                buttonVariants({ variant: "ghost" }),
                "space-x-2 text-base text-primary/80 hover:text-primary"
              )}
            >
              <span>{nextPost.title}</span>
              <Icons.chevron.right width={16} />
            </Link>
          </div>
        ) : (
          <div />
        )}
      </div>
    </>
  )
}
