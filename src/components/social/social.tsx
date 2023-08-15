import Link from "next/link"
import type { HTMLAttributes } from "react"

import { cn } from "@/libs/utils"
import { Icons } from "@/components/icons"
import { socialConfig, type SocialConfig } from "@/config/social.config"

export default function Social(props: HTMLAttributes<HTMLUListElement>) {
  const { className } = props

  return (
    <ul className={cn("flex space-x-4", className)}>
      {Object.keys(socialConfig).map((link) => {
        const socialLink = link as keyof SocialConfig
        const SocialIcon = Icons.social[socialLink]

        return (
          <li key={`footer-${link}`}>
            <Link
              href={socialConfig[socialLink]}
              target="__blank"
              rel="noreferrer"
            >
              <SocialIcon
                width={18}
                className="text-primary/60 transition duration-300 hover:text-primary"
              />
            </Link>
          </li>
        )
      })}
    </ul>
  )
}
