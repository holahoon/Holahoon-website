import { type Til } from "contentlayer/generated"

export const directoryMapper: Record<string, Til["category"] | undefined> = {
  css: "CSS",
  react: "React.js",
  git: "Git",
  next: "Next.js",
}
