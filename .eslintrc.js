module.exports = {
  parserOptions: {
      parser: "@typescript-eslint/parser"
  },
  extends: [
      // add more generic rulesets here, such as:
      // "eslint:recommended",
      "plugin:vue/recommended",
      "plugin:vuetify/recommended",
      "plugin:@typescript-eslint/eslint-recommended",
      "plugin:@typescript-eslint/recommended",
      "@vue/typescript/recommended",
      "plugin:prettier/recommended"
  ],
  plugins: [
      "@typescript-eslint",
      'prettier'
  ],
  rules: {
      // override/add rules settings here, such as:
      // "vue/no-unused-vars": "error"
      "arrow-body-style" :["warn","as-needed",{ "requireReturnForObjectLiteral": true }],
      "array-bracket-spacing": ["warn", "never"],
      "arrow-spacing": ["warn", { "before": true, "after": true }],
      "block-spacing": ["warn","always"],
      "brace-style": ["warn", "1tbs", { "allowSingleLine": true }],
      "dot-notation": [0, {
          allowKeywords: false
      }],
      "arrow-parens": [2, "always"],
      'prettier/prettier': 0,
      "no-fallthrough": 0,
      "prefer-const": 0,
      "space-before-function-paren": 0,
      "comma-dangle": 0,
      "operator-linebreak": 0,
      "indent": ["warn", 2],
      "semi": [1, "always"],
      "quotes": [1, "double", { avoidEscape: true, allowTemplateLiterals: true }],
      "camelcase": 0,
      "eol-last": 0,
      "no-console": 0,
      "eqeqeq": "warn",
      "no-case-declarations": 0,
      "no-console": "off",
      "no-constant-condition": ["error", { "checkLoops": false }],
      "no-empty": ["error", { "allowEmptyCatch": true }],
      "no-useless-escape": "warn",
      "space-before-blocks": "warn",
      "key-spacing": "warn",
      "space-infix-ops": "warn",
      "keyword-spacing": "warn",
      "comma-spacing": "warn",
      "object-curly-spacing": ["warn", "always"],
      "computed-property-spacing": "warn",
      "@typescript-eslint/type-annotation-spacing": "warn",
      "vue/html-indent": ["error", 4, {}],
      "vue/html-self-closing": "off",
      "vue/attributes-order": "off",
      "vue/singleline-html-element-content-newline": "off",
      "vue/valid-v-slot": ["error", { "allowModifiers": false }],
      "vue/require-prop-types": "off",
      "vue/require-default-prop": "off",
      "vue/no-v-html": "off", // Not sure if we should ignore this or not, but let's ignore for now.
      "vue/no-mutating-props": "warn",
      "vuetify/no-legacy-grid": "warn", // temporarily mute legacy-grid rule
      "codebrick/no-deprecated-props": "warn",
      "codebrick/no-negative-margin-vrow": "off", // used for Vuetify 1 -> 2 migration
      "codebrick/no-data-table-default-mobile-breakpoint": "warn",
      "codebrick/no-chip-input-to-close": "warn",
      "codebrick/migrate-flex-wrap-to-cols-auto": "warn",
      "codebrick/no-separate-use-of-shrink": "warn",
      "codebrick/no-mutiple-list-item-content": "error",
      "codebrick/no-unmatched-translation-key": "off", // unmaintained
  },
}
