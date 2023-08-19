import type { Metadata, ResolvingMetadata } from "next"
import type { ReactNode } from "react"

import { getTilFromParams } from "@/libs/til"

interface TilSlugLayoutProps {
  children: ReactNode
  params: { slug: string[] }
}

export const generateMetadata = async (
  props: TilSlugLayoutProps,
  parent: ResolvingMetadata
): Promise<Metadata> => {
  const { params } = props
  const til = await getTilFromParams(params)
  if (!til) return {}

  return {
    title: til.title,
    description: til.description,
    openGraph: {}, // TODO
  }
}

export default async function TilSlugLayout(props: TilSlugLayoutProps) {
  const { children } = props

  return <article className="mb-2 mt-12">{children}</article>
}
