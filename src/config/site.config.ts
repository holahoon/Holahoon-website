import { socialConfig } from "./social.config"

export const siteConfig = {
  name: "Hooniverse",
  url: "localhost:3000",
  description: "David Kim, a web developer",
  author: "David Kim",
  ogImage: "", // TODO: needs og image
  links: socialConfig,
} as const

export type SiteConfig = typeof siteConfig
