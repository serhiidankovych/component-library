import storybook from "eslint-plugin-storybook";

import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";
import importPlugin from "eslint-plugin-import";

import prettierPlugin from "eslint-plugin-prettier";
import simpleImportSortPlugin from "eslint-plugin-simple-import-sort";
import unicornPlugin from "eslint-plugin-unicorn";
import { dirname } from "path";
import { fileURLToPath } from "url";

import { globalIgnores } from "eslint/config";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});


export default [
  globalIgnores(["node_modules/", ".next/", "dist/", "build/"]),
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    files: ["**/*.{js,ts,jsx,tsx}"],
    ignores: ["node_modules", ".next", "dist", "build"],

    plugins: {
      unicorn: unicornPlugin,
      import: importPlugin,
      prettier: prettierPlugin,
      "simple-import-sort": simpleImportSortPlugin,
    },
   rules: {
      "simple-import-sort/exports": "error",
      "simple-import-sort/imports": "error",
      "unicorn/no-array-callback-reference": "off",
      "unicorn/prevent-abbreviations": "off",
      "@typescript-eslint/no-unused-vars": "warn",
      "@typescript-eslint/no-unused-expressions": "warn",
      "react-hooks/exhaustive-deps": "warn",
      "import/no-unresolved": "error",
      "import/no-duplicates": "error",
      "prettier/prettier": "error",
    },
  
  },
  ...storybook.configs["flat/recommended"]
];
