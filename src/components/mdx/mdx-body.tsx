import { useMDXComponent } from "next-contentlayer/hooks"

import { cn } from "@/libs/utils"
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
        "mb-6 mt-10 scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0",
        className
      )}
      {...rest}
    />
  ),
  h3: ({ className, ...props }) => (
    <h3
      className={cn(
        "mt-8 scroll-m-20 text-2xl font-semibold tracking-tight",
        className
      )}
      {...props}
    />
  ),
  h4: ({ className, ...props }) => (
    <h4
      className={cn(
        "mt-8 scroll-m-20 text-xl font-semibold tracking-tight",
        className
      )}
      {...props}
    />
  ),
  h5: ({ className, ...props }) => (
    <h5
      className={cn(
        "mt-8 scroll-m-20 text-lg font-semibold tracking-tight",
        className
      )}
      {...props}
    />
  ),
  h6: ({ className, ...props }) => (
    <h6
      className={cn(
        "mt-8 scroll-m-20 text-base font-semibold tracking-tight",
        className
      )}
      {...props}
    />
  ),
  a: ({ className, ...props }) => (
    <a
      className={cn("font-medium underline underline-offset-4", className)}
      {...props}
    />
  ),
  p: ({ className, ...props }) => (
    <p
      className={cn("leading-[1.6] [&:not(:first-child)]:mt-4", className)}
      {...props}
    />
  ),
  ul: ({ className, ...props }) => (
    <ul className={cn("my-6 ml-6 list-disc", className)} {...props} />
  ),
  ol: ({ className, ...props }) => (
    <ol className={cn("my-6 ml-6 list-decimal", className)} {...props} />
  ),
  li: ({ className, ...props }) => (
    <li className={cn("mt-2", className)} {...props} />
  ),
  blockquote: ({ className, ...props }) => (
    <blockquote
      className={cn(
        "mt-6 border-l-2 pl-6 italic [&>*]:text-muted-foreground",
        className
      )}
      {...props}
    />
  ),
  img: ({ className, alt, ...props }) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img className={cn("rounded-md border", className)} alt={alt} {...props} />
  ),
  hr: ({ ...props }) => <hr className="my-4 md:my-8" {...props} />,
  table: ({ className, ...props }) => (
    <div className="my-6 w-full overflow-y-auto">
      <table className={cn("w-full", className)} {...props} />
    </div>
  ),
  tr: ({ className, ...props }) => (
    <tr
      className={cn("m-0 border-t p-0 even:bg-muted", className)}
      {...props}
    />
  ),
  th: ({ className, ...props }) => (
    <th
      className={cn(
        "border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right",
        className
      )}
      {...props}
    />
  ),
  td: ({ className, ...props }) => (
    <td
      className={cn(
        "border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right",
        className
      )}
      {...props}
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
}

export default function MdxBody(props: Props) {
  const { code } = props

  const MDXContent = useMDXComponent(code)

  return <MDXContent components={components} />
}
