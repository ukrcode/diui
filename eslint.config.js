import js from '@eslint/js'
import standard from 'eslint-config-standard'
import astro from 'eslint-plugin-astro'

export default [
  js.configs.recommended,
  ...standard,
  ...astro.configs.recommended,
  {
    files: ['**/*.{js,mjs,cjs,jsx,ts,tsx,astro}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    rules: {
      // Standard rules are already included
      'comma-dangle': ['error', 'es5'],
      'space-before-function-paren': ['error', 'always'],
    },
  },
  {
    files: ['**/*.astro'],
    parser: 'astro-eslint-parser',
    parserOptions: {
      parser: '@typescript-eslint/parser',
      extraFileExtensions: ['.astro'],
    },
  },
]
