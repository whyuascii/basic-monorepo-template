import js from '@eslint/js';
import typescriptPlugin from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';
import prettierConfig from 'eslint-config-prettier';
import prettierPlugin from 'eslint-plugin-prettier';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import globals from 'globals';

export default [
  // Base configurations
  js.configs.recommended,
  prettierConfig,

  // TypeScript configuration
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: typescriptParser,
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        ...globals.node,
        ...globals.browser,
      },
    },
    plugins: {
      '@typescript-eslint': typescriptPlugin,
      'simple-import-sort': simpleImportSort, // prettier and simple-import-sort are not compatible
    },
    rules: {
      ...typescriptPlugin.configs.recommended.rules,
      '@typescript-eslint/no-unused-vars': 'warn',
      'react/jsx-uses-react': 0,
      'react/react-in-jsx-scope': 0,
      'no-unused-vars': 'off', // disable default eslint unused variable
      'simple-import-sort/imports': 'warn', // prettier and simple-import-sort are not compatible so warn for now
      'simple-import-sort/exports': 'warn', // prettier and simple-import-sort are not compatible so warn for now
    },
  },

  // React configuration
  {
    files: ['**/*.jsx', '**/*.tsx'],
    plugins: {
      'react': reactPlugin,
      'react-hooks': reactHooksPlugin,
    },
    settings: {
      react: {
        version: 'detect', // Automatically detect the React version
      },
    },
    rules: {
      ...reactPlugin.configs.recommended.rules,
      ...reactHooksPlugin.configs.recommended.rules,
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
    },
  },

  // Prettier plugin enforcement
  {
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      'prettier/prettier': 'error', // Enforce Prettier formatting
    },
  },

  // Ignore patterns
  {
    ignores: ['node_modules/', 'dist/', 'coverage/'],
  },

  // Tailwind configuration
  {
    files: ['tailwind.config.js'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        ...globals.node, // Explicitly include Node.js globals
      },
    },
    rules: {
      // Add any Tailwind-specific rules here
    },
  },
];
