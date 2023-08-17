import { useMDXComponent } from "next-contentlayer/hooks"

import { cn } from "@/libs/utils"
import { ExternalLink } from "@/components/ui/link"
import Callout from "@/components/til/callout"
import type { MDXComponents } from "mdx/types"

interface Props {
  code: string
}

const components: MDXComponents = {
  h1: ({ className, ...rest }) => (
    <h1
      className={cn(
        "mb-12 mt-10 scroll-m-20 text-4xl font-bold tracking-tight",
        className
      )}
      {...rest}
    />
  ),
  h2: ({ className, ...rest }) => (
    <h2
      className={cn(
        "mb-6 mt-12 scroll-m-20 text-2xl font-semibold tracking-tight first:mt-0 md:text-3xl",
        className
      )}
      {...rest}
    />
  ),
  h3: ({ className, ...rest }) => (
    <h3
      className={cn(
        "mt-8 scroll-m-20 text-xl font-semibold tracking-tight md:text-2xl",
        className
      )}
      {...rest}
    />
  ),
  h4: ({ className, ...rest }) => (
    <h4
      className={cn(
        "mt-8 scroll-m-20 text-lg font-semibold tracking-tight md:text-xl",
        className
      )}
      {...rest}
    />
  ),
  h5: ({ className, ...rest }) => (
    <h5
      className={cn(
        "mt-8 scroll-m-20 text-base font-semibold tracking-tight md:text-lg",
        className
      )}
      {...rest}
    />
  ),
  h6: ({ className, ...rest }) => (
    <h6
      className={cn(
        "mt-8 scroll-m-20 text-base font-semibold tracking-tight",
        className
      )}
      {...rest}
    />
  ),
  a: ({ className, ...rest }) => (
    <a
      className={cn("font-medium underline underline-offset-4", className)}
      {...rest}
    />
  ),
  p: ({ className, ...rest }) => (
    <p
      className={cn("leading-[1.6] [&:not(:first-child)]:mt-4", className)}
      {...rest}
    />
  ),
  ul: ({ className, ...rest }) => (
    <ul className={cn("my-6 ml-6 list-disc", className)} {...rest} />
  ),
  ol: ({ className, ...rest }) => (
    <ol className={cn("my-6 ml-6 list-decimal", className)} {...rest} />
  ),
  li: ({ className, ...rest }) => (
    <li className={cn("mt-2", className)} {...rest} />
  ),
  blockquote: ({ className, ...rest }) => (
    <blockquote
      className={cn(
        "mt-6 border-l-2 pl-6 italic [&>*]:text-muted-foreground",
        className
      )}
      {...rest}
    />
  ),
  strong: ({ className, ...rest }) => (
    <strong className={cn("font-bold", className)} {...rest} />
  ),
  img: ({ className, alt, ...rest }) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img className={cn("rounded-md border", className)} alt={alt} {...rest} />
  ),
  hr: ({ ...rest }) => <hr className="my-4 md:my-8" {...rest} />,
  table: ({ className, ...rest }) => (
    <div className="my-6 w-full overflow-y-auto">
      <table className={cn("w-full", className)} {...rest} />
    </div>
  ),
  tr: ({ className, ...rest }) => (
    <tr className={cn("m-0 border-t p-0 even:bg-muted", className)} {...rest} />
  ),
  th: ({ className, ...rest }) => (
    <th
      className={cn(
        "border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right",
        className
      )}
      {...rest}
    />
  ),
  td: ({ className, ...rest }) => (
    <td
      className={cn(
        "border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right",
        className
      )}
      {...rest}
    />
  ),
  pre: ({ className, ...rest }) => (
    <pre
      className={cn("overflow-x-auto rounded-md p-4", className)}
      {...rest}
    />
  ),
  code: ({ className, ...rest }) => (
    <code
      className={cn(
        "relative rounded bg-secondary px-2 py-1 font-mono text-[calc(1em-(1em*0.15))]",
        className
      )}
      {...rest}
    />
  ),
  Callout,
  ExternalLink,
}

export default function MdxBody(props: Props) {
  const { code } = props

  const MDXContent = useMDXComponent(code)

  return <MDXContent components={components} />
}
