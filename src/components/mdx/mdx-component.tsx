import { useMDXComponent } from "next-contentlayer/hooks"

import { cn } from "@/libs/utils"
import type { MDXComponents } from "mdx/types"

interface Props {
  code: string
}

const components: MDXComponents = {
  pre: ({ className, ...props }) => (
    <pre
      className={cn("overflow-x-auto rounded-md border p-4", className)}
      {...props}
    />
  ),
  code: ({ className, ...rest }) => (
    <code
      className={cn(
        "relative rounded border px-[0.3rem] py-[0.2rem] font-mono text-sm",
        className
      )}
      {...rest}
    />
  ),
}

export default function Mdx(props: Props) {
  const { code } = props

  const MDXContent = useMDXComponent(code)

  return <MDXContent components={components} />
}
