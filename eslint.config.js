import js from '@eslint/js';
import ts from '@typescript-eslint/eslint-plugin';
import parser from '@typescript-eslint/parser';
import prettier from 'eslint-config-prettier';
import globals from 'globals';
export default [
    {
        ignores: ['dist', 'node_modules']
    },
    js.configs.recommended,
    {
        languageOptions: {
            parser,
            parserOptions: {
                ecmaVersion: 'latest',
                sourceType: 'module'
            },
            globals: {
                ...globals.browser,
                ...globals.node
            }
        },
        plugins: {
            '@typescript-eslint': ts
        },
        rules: {
            ...ts.configs.recommended.rules
        }
    },
    prettier
];
