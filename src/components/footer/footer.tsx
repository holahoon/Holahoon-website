import Link from "next/link"
import { HTMLAttributes } from "react"

import { cn } from "@/libs/utils/utils.helper"
import { Icons } from "@/components/icons"
import { siteConfig } from "@/config/site"

function Footer(props: HTMLAttributes<HTMLElement>) {
  const { className } = props

  const year = new Date().getFullYear()
  return (
    <footer
      className={cn(
        "mb-14 mt-10 flex items-center border-t border-border pt-14",
        className
      )}
    >
      <p className="text-sm text-primary/50">
        © {year} David Kim. All rights reserved.
      </p>

      <div className="ml-auto flex">
        <Link
          href={`mailto:${siteConfig.links.email}`}
          target="__blank"
          rel="noreferrer"
        >
          <Icons.social.email
            width={18}
            className="text-primary/60 transition duration-300 hover:text-primary"
          />
        </Link>
        <Link
          href={siteConfig.links.linkedin}
          target="__blank"
          rel="noreferrer"
          className="ml-4"
        >
          <Icons.social.linkedin
            width={18}
            className="text-primary/60 transition duration-300 hover:text-primary"
          />
        </Link>
        <Link
          href={siteConfig.links.github}
          target="__blank"
          rel="noreferrer"
          className="ml-4"
        >
          <Icons.social.github
            width={18}
            className="text-primary/60 transition duration-300 hover:text-primary"
          />
        </Link>
      </div>
    </footer>
  )
}

export default Footer
