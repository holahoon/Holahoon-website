/** Contentlayer specific configuration */

import { defineDocumentType, makeSource } from "contentlayer/source-files"

const calculateReadingTime = (rawText) => {
  const wpm = 185
  const countedWords = rawText.split(/(\s+)/)
  const minutes = countedWords.length / wpm
  return Math.ceil(minutes)
}

const computedFields = {
  slug: { type: "string", resolve: (doc) => `/blog/${doc._raw.flattenedPath}` },
  slugAsParams: {
    type: "string",
    resolve: (doc) => doc._raw.flattenedPath,
  },
  readTime: {
    type: "number",
    resolve: (doc) => calculateReadingTime(doc.body.raw),
  },
}

export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: "**/*.mdx",
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    description: { type: "string", required: true },
    date: { type: "string", required: true },
    category: {
      type: "enum",
      options: ["programming", "life", "etc"],
      required: true,
    },
    tags: { type: "list", of: { type: "string" }, required: false },
  },
  computedFields,
}))

export default makeSource({
  contentDirPath: "src/articles",
  documentTypes: [Post],
})
