import js from '@eslint/js'
import globals from 'globals'
import tseslint from 'typescript-eslint'
import pluginVue from 'eslint-plugin-vue'
import { defineConfig } from 'eslint/config'

export default defineConfig([
  // 1️⃣ JS/TS + Vue files
  {
    files: ['**/*.{js,ts,vue}'],
    plugins: { js, ts, vue },
    extends: [
      'plugin:@typescript-eslint/recommended',  // TS recommended rules
      'plugin:vue/vue3-essential',             // minimal Vue rules
      'eslint:recommended',                     // basic JS rules
    ],
    languageOptions: {
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
  },

  // 2️⃣ Vue files with TypeScript parser
  {
    files: ['**/*.vue'],
    languageOptions: {
      parserOptions: {
        parser: '@typescript-eslint/parser',
      },
    },
  },
])


