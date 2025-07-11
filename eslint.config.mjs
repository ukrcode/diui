import js from '@eslint/js'
import globals from 'globals'

export default [
  js.configs.recommended,
  {
    files: ['**/*.{js,mjs,cjs}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2021,
      },
    },
    rules: {
      // Standard JavaScript Style rules
      indent: ['error', 2],
      quotes: ['error', 'single'],
      semi: ['error', 'never'],
      'comma-dangle': ['error', 'always-multiline'],
      'space-before-function-paren': ['error', 'always'],
      'keyword-spacing': ['error', { before: true, after: true }],
      'space-infix-ops': 'error',
      'eol-last': 'error',
      'no-trailing-spaces': 'error',
      'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0 }],
      'no-var': 'error',
      'prefer-const': 'error',
      'object-curly-spacing': ['error', 'always'],
      'array-bracket-spacing': ['error', 'never'],
      'computed-property-spacing': ['error', 'never'],
      'space-before-blocks': 'error',
      'brace-style': ['error', '1tbs', { allowSingleLine: true }],
      camelcase: ['error', { properties: 'never' }],
      'comma-spacing': ['error', { before: false, after: true }],
      'comma-style': ['error', 'last'],
      'key-spacing': ['error', { beforeColon: false, afterColon: true }],
      'new-cap': ['error', { newIsCap: true, capIsNew: false }],
      'no-unused-vars': [
        'error',
        { vars: 'all', args: 'after-used', ignoreRestSiblings: true },
      ],
      'no-console': 'warn',
    },
  },
  {
    // Ignore generated files and build outputs
    ignores: [
      '**/dist/**',
      '**/build/**',
      '**/.astro/**',
      '**/node_modules/**',
      '**/*.min.js',
      '**/packages/lib/css/**',
      '**/*.d.ts',
      // Ignore JSX/TSX and Astro files for now since they need special parsers
      '**/*.jsx',
      '**/*.tsx',
      '**/*.astro',
      '**/*.ts',
    ],
  },
]
