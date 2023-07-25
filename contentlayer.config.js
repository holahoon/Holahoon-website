/** Contentlayer specific configuration */

import { defineDocumentType, makeSource } from "contentlayer/source-files"
import remarkGfm from "remark-gfm"

const calculateReadingTime = (rawText) => {
  const wpm = 215
  const countedWords = rawText.split(/(\s+)/)
  const minutes = countedWords.length / wpm
  return Math.ceil(minutes)
}

const computedFields = {
  slug: {
    type: "string",
    resolve: (doc) => doc._raw.flattenedPath,
  },
  directory: { type: "string", resolve: (doc) => doc._raw.sourceFileDir },
  slugAsParams: {
    type: "string",
    resolve: (doc) => doc._raw.flattenedPath.split("/").slice(1).join("/"),
  },
  readTime: {
    type: "number",
    resolve: (doc) => calculateReadingTime(doc.body.raw),
  },
}

export const Til = defineDocumentType(() => ({
  name: "Til",
  filePathPattern: "til/**/*.mdx",
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    description: { type: "string", required: true },
    date: { type: "string", required: true },
    tags: { type: "list", of: { type: "string" }, required: false },
    category: {
      type: "enum",
      options: ["JavaScript", "React", "CSS"],
      required: true,
    },
  },
  computedFields,
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
    rehypePlugins: [],
  },
})
