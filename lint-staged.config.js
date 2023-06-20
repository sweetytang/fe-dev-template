module.exports = {
  '**/*.{js,jsx,ts,tsx}': [
      'eslint --fix',
      'git add .'
  ],
  '**/*.{css,scss}': [
    'stylelint --cache --fix',
    'git add .'
  ]
}
