module.exports = {
  printWidth: 80,
  singleQuote: true,
  semi: true,
  trailingComma: 'es5',
  tabWidth: 2,

  overrides: [
    {
      files: '*.yaml',
      options: {
        singleQuote: false,
      },
    },
  ],
};
