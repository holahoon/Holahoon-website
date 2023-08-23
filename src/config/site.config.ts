import { socialConfig } from "./social.config"

export const siteConfig = {
  name: "Holahoon",
  url: "https://hooniverse.vercel.app", // TODO: needs to update
  description: "David Kim, a web developer",
  author: "David Kim",
  ogImage: "", // TODO: needs og image
  links: socialConfig,
} as const

export type SiteConfig = typeof siteConfig
