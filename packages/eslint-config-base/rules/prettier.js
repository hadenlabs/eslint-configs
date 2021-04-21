module.exports = {
  rules: {
    'prettier/prettier': [
      'error',
      {
        arrowParens: 'always',
        printWidth: 100,
        semi: false,
        singleQuote: true,
        quoteProps: 'as-needed',
        tabWidth: 2,
        trailingComma: 'none',
        overrides: [
          {
            files:
              '{*.js?(on),*.y?(a)ml,.*.js?(on),.*.y?(a)ml,*.md,.prettierrc,.stylelintrc,.babelrc}',
            options: {
              arrowParens: 'always',
              printWidth: 100,
              semi: false,
              singleQuote: true,
              quoteProps: 'as-needed',
              tabWidth: 2,
              trailingComma: 'none'
            }
          },
          {
            files: '{**/.vscode/*.json,**/tsconfig.json,**/tsconfig.*.json}',
            options: {
              parser: 'json',
              quoteProps: 'preserve',
              singleQuote: false
            }
          },
          {
            files: '*.md',
            options: {
              parser: 'markdown',
              printWidth: 120,
              proseWrap: 'never',
              semi: false,
              trailingComma: 'none'
            }
          },
          {
            files: '*.mdx',
            options: {
              printWidth: 120,
              proseWrap: 'never',
              semi: false,
              trailingComma: 'none'
            }
          },
          {
            files: '*.{sass,scss}',
            options: {
              parser: 'scss'
            }
          },
          {
            files: '*.less',
            options: {
              tabWidth: 4,
              printWidth: 80,
              parser: 'less'
            }
          }
        ]
      }
    ]
  }
}
