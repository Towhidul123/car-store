import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";

const eslintPluginPrettierRecommended = require('eslint-plugin-prettier/recommended');

module.exports = [
  // Any other config imports go at the top
  eslintPluginPrettierRecommended,
];

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ["**/*.{js,mjs,cjs,ts}"] },
  { languageOptions: { globals: globals.browser } },
  {
    rules: {
      "no-unused-vars": "error",
      "no-unused-expressions": "error",
      "prefer-const": "error",
      "no-console": "warn",
      "no-undef": "error",
    },
  },
  {
    "globals": {
      "process": "readonly",
    },
  },
  {
    ignores: [".node_modules/*", ".dist/*"],
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
];