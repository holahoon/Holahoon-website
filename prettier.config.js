module.exports = {
   semi: false,
   singleQuote: false,
   tabWidth: 3,
   trailingComma: "es5",
   importOrder: [
      "^(next/(.*)$)|^(next$)",
      "^(react/(.*)$)|^(react$)",
      "<THIRD_PARTY_MODULES>",
      "",
      "^@/providers/(.*)$",
      "^@/hooks/(.*)$",
      "^@/libs/(.*)$",
      "^@/components/(.*)$",
      "^@/articles/(.*)",
      "^@/styles/(.*)",
      "[./]",
   ],
   importOrderSeparation: false,
   importOrderSortSpecifiers: true,
   importOrderBuiltInModulesToTop: true,
   importOrderMergeDuplicateImports: true,
   importOrderCombineTypeAndValueImports: true,
   importOrderParserPlugins: ["typescript", "jsx", "decorators-legacy"],
   plugins: [
      "@ianvs/prettier-plugin-sort-imports",
      "prettier-plugin-tailwindcss",
   ],
}
