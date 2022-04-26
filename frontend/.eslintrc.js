module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'airbnb/hooks',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:cypress/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'prettier',
  ],
  globals: {
    cy: 'readonly',
    Cypress: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    project: './tsconfig.eslint.json',
    sourceType: 'module',
    tsconfigRootDir: __dirname,
  },
  plugins: [
    '@typescript-eslint',
    'import',
    'jsx-a11y',
    'prefer-arrow',
    'react',
    'react-hooks',
    'cypress',
  ],
  root: true,
  rules: {
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
    '@typescript-eslint/no-misused-promises': [
      'error',
      {
        checksVoidReturn: false,
      },
    ],
    'lines-between-class-members': [
      'error',
      'always',
      {
        exceptAfterSingleLine: true,
      },
    ],
    'no-void': [
      'error',
      {
        allowAsStatement: true,
      },
    ],
    'padding-line-between-statements': [
      'error',
      {
        blankLine: 'always',
        prev: '*',
        next: 'return',
      },
    ],
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'after-used',
        argsIgnorePattern: '_',
        ignoreRestSiblings: false,
        varsIgnorePattern: '_',
      },
    ],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          '**/setupTests.ts',
          '.storybook/**',
          'stories/**',
          '**/*/*.story.*',
          '**/*/*.stories.*',
          '**/__specs__/**',
          '**/*/*.spec.*',
          '**/__tests__/**',
          '**/*/*.test.*',
        ],
      },
    ],
    'prefer-arrow/prefer-arrow-functions': [
      'error',
      {
        disallowPrototype: true,
        singleReturnOnly: false,
        classPropertiesAllowed: false,
      },
    ],
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['.jsx', '.tsx'],
      },
    ],
    'react/jsx-props-no-spreading': [
      'error',
      {
        html: 'enforce',
        custom: 'enforce',
        explicitSpread: 'ignore',
      },
    ],
    'react/react-in-jsx-scope': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react/require-default-props': [0],
    'react-hooks/exhaustive-deps': [
      'warn',
      {
        additionalHooks: 'useRecoilCallback',
      },
    ],
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
      },
    ],
  },
  overrides: [
    {
      files: ['*.tsx'],
      rules: {
        'react/prop-types': 'off',
      },
    },
  ],
  settings: {
    'import/resolver': {
      node: {
        paths: ['src/'],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
};
