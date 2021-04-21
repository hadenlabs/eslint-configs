module.exports = {
  env: {
    es2020: true,
    jest: true
  },
  reportUnusedDisableDirectives: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    sourceType: 'module'
  },
  ignorePatterns: ['dist', '.eslintrc.js'],
  settings: {
    ['import/resolver']: {
      node: {
        paths: ['src'],
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      }
    },
    jest: {
      version: 'detect'
    }
  },
  plugins: [
    '@typescript-eslint',
    'jest',
    'prettier',
    'promise',
    'simple-import-sort',
    'sort-keys-fix',
    'typescript-sort-keys',
    'unicorn'
  ],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:promise/recommended',
    'plugin:prettier/recommended', // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
    'jest',
    'prettier',
    'promise',
    'simple-import-sort',
    'sort-keys-fix',
    'typescript-eslint',
    'typescript-sort-keys',
    'unicorn'
  ].map((path) => require.resolve(`./rules/${path}`)),
  overrides: [
    {
      files: ['*.js'],
      parser: 'babel-eslint'
    }
  ]
}
