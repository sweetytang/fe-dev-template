module.exports = {
  '**/*.{js,jsx}': [
      'eslint --fix',
      'git add .'
  ],
  '**/*.{ts,tsx}': [
    'tsc',
    'eslint --fix',
    'git add .'
  ],
  '**/*.{css,scss}': [
    'stylelint --cache --fix',
    'git add .'
  ]
}
