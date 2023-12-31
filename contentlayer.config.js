/** Contentlayer specific configuration */
import { defineDocumentType, makeSource } from "contentlayer/source-files"
import rehypePrettyCode from "rehype-pretty-code"
import rehypeSlug from "rehype-slug"
import remarkGfm from "remark-gfm"

import rehypeToc from "@jsdevtools/rehype-toc"

const calculateReadingTime = (rawText) => {
  const wpm = 210
  const countedWords = rawText.split(/(\s+)/)
  const minutes = countedWords.length / wpm
  return Math.ceil(minutes)
}

/** @type {import('rehype-pretty-code').Options} */
const rehypePrettyCodeOptions = {
  theme: "one-dark-pro",
  onVisitLine(node) {
    if (!node.children.length) node.children = [{ type: "text", value: " " }]
  },
}

/** @type {import('@jsdevtools/rehype-toc').Options} */
const rehypeTocOptions = {
  customizeTOC: (toc) => {
    return false
  },
  headings: ["h1", "h2", "h3"],
  cssClasses: {
    toc: "dk-toc",
    list: "dk-toc-list list-none ml-4 my-0",
    listItem: "dk-toc-item",
    link: "dk-toc-link",
  },
}

/** @type {import('contentlayer/source-files').DocumentTypeDef} */
export const Til = defineDocumentType(() => ({
  name: "Til",
  filePathPattern: "til/**/*.mdx",
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    description: { type: "string", required: true },
    date: { type: "date", required: true },
    // tags: { type: "list", of: { type: "string" }, required: false },
  },
  computedFields: {
    readTime: {
      type: "number",
      resolve: (doc) => calculateReadingTime(doc.body.raw),
    },
    category: {
      type: "string",
      resolve: (doc) => doc._raw.sourceFileDir.split("/")[1],
    },
    slug: {
      type: "string",
      resolve: (doc) => {
        const paths = doc._raw.flattenedPath.split("/")
        return paths[0] + "/" + paths[paths.length - 1]
      },
    },
    slugAsParams: {
      type: "string",
      resolve: (doc) => {
        const paths = doc._raw.flattenedPath.split("/")
        return paths[paths.length - 1]
      },
    },
  },
}))

export default makeSource({
  contentDirPath: "src/articles",
  documentTypes: [Til],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [rehypeToc, rehypeTocOptions],
      [rehypePrettyCode, rehypePrettyCodeOptions],
    ],
  },
})
