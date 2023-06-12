const path = require('path');

module.exports = {
  presets: [
      ['@babel/preset-env', {
        useBuiltIns: 'usage',
        corejs: '3'
      }],
      ['@babel/preset-react', {
        runtime: 'automatic'
      }],
      '@babel/preset-typescript'
  ],
  plugins: [
      ['@babel/plugin-transform-runtime', {
        corejs: false
      }]
  ],
  exclude: path.resolve(__dirname, 'node_modules')
}
