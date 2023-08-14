import { HTMLAttributes } from "react"

import { cn } from "@/libs/utils/utils.helpers"
import LayoutWrapper from "@/components/layout/layout-wrapper"
import Social from "@/components/social/social"

function Footer(props: HTMLAttributes<HTMLElement>) {
  const { className } = props

  const year = new Date().getFullYear()

  return (
    <footer className={cn("mb-6 mt-10 w-full", className)}>
      <LayoutWrapper>
        <div className="flex flex-col items-center border-t border-border pt-6 md:flex-row">
          <p className="text-sm text-primary/50">
            © {year} David Kim. All rights reserved.
          </p>

          <Social className="mt-2 md:ml-auto md:mt-0" />
        </div>
      </LayoutWrapper>
    </footer>
  )
}

export default Footer
