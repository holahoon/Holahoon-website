/** Contentlayer specific configuration */

import { defineDocumentType, makeSource } from "contentlayer/source-files"

const computedFields = {
  slug: { type: "string", resolve: (doc) => `/blog/${doc._raw.flattenedPath}` },
  slugAsParams: {
    type: "string",
    resolve: (doc) => doc._raw.flattenedPath,
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
    tags: { type: "list", of: { type: "string" }, required: true },
    category: {
      type: "enum",
      options: ["code", "algorithm", "database", "devops"],
      required: false,
    },
  },
  computedFields,
}))

export default makeSource({
  contentDirPath: "src/articles",
  documentTypes: [Post],
})
