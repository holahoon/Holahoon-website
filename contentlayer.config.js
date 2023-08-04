/** Contentlayer specific configuration */

import { defineDocumentType, makeSource } from "contentlayer/source-files"
import rehypePrettyCode from "rehype-pretty-code"
import rehypeSlug from "rehype-slug"
import remarkGfm from "remark-gfm"

const calculateReadingTime = (rawText) => {
  const wpm = 215
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

/** @type {import('contentlayer/source-files').ComputedFields} */
const computedFields = {
  slug: {
    type: "string",
    resolve: (doc) => doc._raw.flattenedPath,
  },
  directory: {
    type: "string",
    resolve: (doc) => doc._raw.sourceFileDir,
  },
  slugAsParams: {
    type: "string",
    resolve: (doc) => doc._raw.flattenedPath.split("/").slice(1).join("/"),
  },
  readTime: {
    type: "number",
    resolve: (doc) => calculateReadingTime(doc.body.raw),
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
    date: { type: "string", required: true },
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

export const Life = defineDocumentType(() => ({
  name: "Life",
  filePathPattern: "life/**/*.mdx",
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    description: { type: "string", required: true },
    date: { type: "string", required: true },
  },
  computedFields,
}))

export default makeSource({
  contentDirPath: "src/articles",
  documentTypes: [Til, Life],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      // rehypeAccessibleEmojis,
      // rehypeAutolinkHeadings,
      // rehypeCodeTitles,
      [rehypePrettyCode, rehypePrettyCodeOptions],
    ],
  },
})
