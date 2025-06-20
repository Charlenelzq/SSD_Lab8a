// import js from "@eslint/js";
// import globals from "globals";
// import pluginReact from "eslint-plugin-react";
// import { defineConfig } from "eslint/config";

// export default defineConfig([
//   {
//     files: ["**/*.{js,mjs,cjs,jsx}"],
//     plugins: { js },
//     extends: ["js/recommended"],
//   },
//   {
//     files: ["**/*.{js,mjs,cjs,jsx}"],
//     languageOptions: { globals: globals.browser },
//   },
//   pluginReact.configs.flat.recommended,
// ]);

import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import pluginSecurity from "eslint-plugin-security";
import pluginSecurityNode from "eslint-plugin-security-node";
import pluginNoUnsanitized from "eslint-plugin-no-unsanitized";

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ["**/*.{js,mjs,cjs,jsx}"] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    plugins: {
      security: pluginSecurity,
      "security-node": pluginSecurityNode,
      "no-unsanitized": pluginNoUnsanitized,
    },
    rules: {
      ...pluginJs.configs.recommended.rules,
      ...pluginReact.configs.flat.recommended.rules,
      ...pluginSecurity.configs.recommended.rules,
      ...pluginSecurityNode.configs.recommended.rules,
      ...pluginNoUnsanitized.configs.recommended.rules,
      "security/detect-eval-with-expression": "error",
    },
  },
];
