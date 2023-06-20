module.exports = {
  root: true,
  env: {
    browser: true,
    es2022: true,
    node: true,
    jest: true
  },
  extends: [
    'eslint:recommended',
    'prettier',
    'plugin:prettier/recommended',
  ],
  overrides: [
    {
      files: ['**/*.js', '**/*.jsx'],
      excludedFiles: ['.eslintrc.js'],
      parser: '@babel/eslint-parser',
      parserOptions: {
        sourceType: 'module',
        allowImportExportEverywhere: false,
        ecmaFeatures: {
          jsx: true,
          globalReturn: false,
        },
      },
      extends: [
        'plugin:react/recommended',
      ]
    },
    {
      files: ['**/*.ts', '**/*.tsx'],
      extends: [
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended'
      ]
    }
  ],
  rules: {
    'arrow-body-style': 'off',
    'prefer-arrow-callback': 'off',
    'semi': 'off'
  }
}
