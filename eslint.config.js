import js from '@eslint/js';
import globals from 'globals';

export default [
  {
    ignores: ['.netlify-dist/**', 'node_modules/**'],
  },
  js.configs.recommended,
  {
    files: ['js/**/*.js', 'netlify/functions/**/*.js', 'scripts/**/*.mjs'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      'no-console': 'off',
    },
  },
];
