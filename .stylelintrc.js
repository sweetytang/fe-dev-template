module.exports = {
  root: true,
  extends: ['stylelint-config-standard'],
  overrides: [
    {
      files: ['*.scss', '**/*.scss'],
      customSyntax: 'postcss-scss'
    },
  ],
  rules: {
    'selector-pseudo-class-no-unknown': [
        true,
        {
          ignorePseudoClasses: ['global']
        }
    ]
  }
}
