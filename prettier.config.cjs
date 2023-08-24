/** @type {import("prettier").Options} */
module.exports = {
  plugins: [
    require.resolve("@trivago/prettier-plugin-sort-imports"),
    require.resolve("prettier-plugin-tailwindcss"),
  ],
  importOrder: [
    "^next$",
    "^next",
    "^react$",
    "^react",
    "<THIRD_PARTY_MODULES>",
    "^@/(.*)",
    "^[./]",
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  arrowParens: "avoid",
  bracketSpacing: true,
  endOfLine: "lf",
  jsxSingleQuote: false,
  quoteProps: "consistent",
  semi: true,
  singleQuote: false,
  tabWidth: 2,
  trailingComma: "all",
};
