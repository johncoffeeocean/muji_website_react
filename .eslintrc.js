module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ["eslint:recommended", "plugin:react/recommended"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  extends: ["prettier"],
  plugins: ["react", "prettier"],
  rules: {
    "sort-imports": [
      "error",
      {
        ignoreCase: true,
        ignoreDeclarationSort: true,
        ignoreMemberSort: false,
        allowSeparatedGroups: false,
        memberSyntaxSortOrder: ["all", "single", "multiple", "none"],
      },
    ],
    quotes: ["error", "double"],
    semi: ["error", "always"],
    eqeqeq: ["error", "always"],
    "comma-dangle": [
      "error",
      {
        imports: "never",
        exports: "never",
        functions: "always-multiline",
        objects: "always-multiline",
        arrays: "always-multiline",
      },
    ],
    "space-unary-ops": [
      "error",
      {
        words: true,
        nonwords: true,
        overrides: {
          "!": false,
          "!!": false,
          "+": false,
          "-": false,
          "++": false,
          "--": false,
        },
      },
    ],
  },
};
