module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin', 'prettier'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'next',
    'next/core-web-vitals',
    "prettier" // Make sure this is the last item
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',   
    'next/link-passhref': 'error',
    'next/no-img-element': 'off', // if you prefer to use <img> tags directly  
    'react/function-component-definition': [
      'warn',
      {
        'namedComponents': 'arrow-function'
      }
    ],
    'sort-imports': ['error', {
      'ignoreCase': true,
      'ignoreDeclarationSort': true,
      'ignoreMemberSort': false
    }],
    'import/order': ['error', {
      'groups': ['builtin', 'external', 'internal'],
      'pathGroups': [
        {
          'pattern': 'react',
          'group': 'external',
          'position': 'before'
        }
      ],
      'newlines-between': 'always'
    }], 
    "prettier/prettier": "warn", // Or "error" if you prefer          
  },
};
