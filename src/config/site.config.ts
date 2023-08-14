import { socialConfig } from "./social.config"

export const siteConfig = {
  name: "David Kim",
  url: "localhost:3000",
  description: "OkDk TIL blog",
  links: socialConfig,
} as const

export type SiteConfig = typeof siteConfig
