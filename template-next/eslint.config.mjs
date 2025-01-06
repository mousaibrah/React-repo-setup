import { FlatCompat } from '@eslint/eslintrc';
import prettierPlugin from 'eslint-plugin-prettier';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
];

export default eslintConfig;
const strictRules = {
  files: ['**/*.{js,jsx,ts,tsx}'],
  "plugins": {
    prettier: prettierPlugin,
  },
  rules: {
    'no-unused-vars': 'error',
    'no-console': 'warn',
    'no-debugger': 'error',
    'no-duplicate-imports': 'error',
    'no-var': 'error',
    'prefer-const': 'error',
    'arrow-body-style': ['error', 'as-needed'],
    complexity: ['error', { max: 15 }], // TODO: increase this
    'max-depth': ['error', { max: 3 }],
    'max-lines': ['error', { max: 300 }],
    'max-params': ['error', { max: 4 }], // TODO: check if we need more than this
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/no-unused-vars': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
};

eslintConfig.push(strictRules);
