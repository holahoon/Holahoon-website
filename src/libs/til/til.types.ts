import { type Til } from "contentlayer/generated"

export type Directories = Record<string, Til["category"]>

export type TilCounts = Record<Til["category"], number>

export type TilPager = Record<"prevPost" | "nextPost", Til | null>
