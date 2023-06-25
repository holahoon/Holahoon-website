// import Image from "next/image";
import { useMDXComponent } from "next-contentlayer/hooks"

// import type { MDXComponents } from 'mdx/types'

interface Props {
  code: string
}

// const components: MDXComponents = {
//    Image
// }

export default function Mdx(props: Props) {
  const { code } = props

  const MDXContent = useMDXComponent(code)

  return <MDXContent />
}
