import { fixupConfigRules, fixupPluginRules } from '@eslint/compat';
import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import _import from 'eslint-plugin-import';
import globals from 'globals';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

/** @type {import('eslint').Linter.Config[]} */
export default [
  ...fixupConfigRules(
    compat.extends(
      'eslint:recommended',
      'plugin:@typescript-eslint/strict-type-checked',
      'plugin:import/recommended',
      'plugin:prettier/recommended',
    ),
  ),

  {
    plugins: {
      '@typescript-eslint': fixupPluginRules(typescriptEslint),
      import: fixupPluginRules(_import),
    },

    languageOptions: {
      globals: {
        ...globals.node,
      },

      parser: tsParser,
      ecmaVersion: 5,
      sourceType: 'commonjs',

      parserOptions: {
        project: true,
      },
    },

    rules: {
      '@typescript-eslint/consistent-type-exports': 'error',
      '@typescript-eslint/consistent-type-imports': 'error',
      '@typescript-eslint/member-ordering': 'error',
      '@typescript-eslint/method-signature-style': 'error',
      '@typescript-eslint/no-import-type-side-effects': 'error',
      '@typescript-eslint/no-loop-func': 'error',
      '@typescript-eslint/no-require-imports': 'error',
      '@typescript-eslint/no-shadow': 'error',
      '@typescript-eslint/only-throw-error': 'error',
      '@typescript-eslint/no-unnecessary-qualifier': 'error',
      '@typescript-eslint/no-unsafe-unary-minus': 'error',
      '@typescript-eslint/no-unused-expressions': 'error',

      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          varsIgnorePattern: '^_',
        },
      ],

      '@typescript-eslint/no-use-before-define': 'error',
      '@typescript-eslint/no-useless-empty-export': 'error',
      '@typescript-eslint/prefer-destructuring': 'error',
      '@typescript-eslint/prefer-regexp-exec': 'error',
      '@typescript-eslint/promise-function-async': 'error',
      '@typescript-eslint/require-array-sort-compare': 'error',
      '@typescript-eslint/return-await': ['error', 'always'],
      '@typescript-eslint/sort-type-constituents': 'error',
      '@typescript-eslint/strict-boolean-expressions': 'error',
      '@typescript-eslint/switch-exhaustiveness-check': 'error',
      'array-callback-return': 'error',
      'import/no-unresolved': 'off',

      'import/no-extraneous-dependencies': [
        'error',
        {
          devDependencies: true,
          peerDependencies: true,
        },
      ],

      'import/order': [
        'error',
        {
          groups: [
            ['builtin', 'external'],
            ['internal', 'sibling', 'parent', 'index'],
          ],
          'newlines-between': 'always',

          alphabetize: {
            order: 'asc',
          },
        },
      ],

      'no-constant-binary-expression': 'error',
      'no-constructor-return': 'error',
      'no-duplicate-imports': 'error',
      'no-promise-executor-return': 'error',
      'no-self-compare': 'error',
      'no-template-curly-in-string': 'error',
      'no-unmodified-loop-condition': 'error',
      'no-unreachable-loop': 'error',
      'require-atomic-updates': 'error',
      'accessor-pairs': 'error',
      'block-scoped-var': 'error',
      camelcase: 'error',
      'capitalized-comments': 'error',
      'consistent-return': 'error',
      curly: ['error', 'multi-line', 'consistent'],
      'default-case-last': 'error',
      eqeqeq: 'error',
      'func-name-matching': 'error',
      'func-names': ['error', 'as-needed'],
      'func-style': ['error', 'declaration'],
      'grouped-accessor-pairs': ['error', 'getBeforeSet'],
      'guard-for-in': 'error',

      'id-length': [
        'error',
        {
          min: 0,
          max: 32,
        },
      ],

      'logical-assignment-operators': 'error',
      'no-alert': 'error',
      'no-console': 'error',
      'no-else-return': 'error',
      'no-empty-static-block': 'error',
      'no-eval': 'error',
      'no-extra-bind': 'error',
      'no-extra-label': 'error',

      'no-implicit-coercion': [
        'error',
        {
          allow: ['!!'],
        },
      ],

      'no-implicit-globals': 'error',
      'no-lone-blocks': 'error',
      'no-lonely-if': 'error',
      'no-loop-func': 'off',
      'no-multi-assign': 'error',
      'no-new-func': 'error',
      'no-new-wrappers': 'error',
      'no-object-constructor': 'error',
      'no-octal-escape': 'error',
      'no-proto': 'error',
      'no-return-assign': 'error',
      'no-return-await': 'off',
      'no-script-url': 'error',
      'no-sequences': 'error',
      'no-shadow': 'off',
      'no-throw-literal': 'off',
      'no-unneeded-ternary': 'error',
      'no-unused-expressions': 'off',
      'no-useless-call': 'error',
      'no-useless-computed-key': 'error',
      'no-useless-concat': 'error',
      'no-useless-rename': 'error',
      'no-useless-return': 'error',
      'no-use-before-define': 'off',
      'no-var': 'error',
      'object-shorthand': 'error',
      'operator-assignment': 'error',
      'prefer-arrow-callback': 'error',
      'prefer-const': 'error',
      'prefer-destructuring': 'off',
      'prefer-exponentiation-operator': 'error',
      'prefer-object-has-own': 'error',
      'prefer-object-spread': 'error',

      'prefer-regex-literals': [
        'error',
        {
          disallowRedundantWrapping: true,
        },
      ],

      'prefer-rest-params': 'error',
      'prefer-spread': 'error',
      'prefer-template': 'error',
      radix: 'error',
    },
  },
];
