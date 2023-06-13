const presetEnv = require('postcss-preset-env');
const autoprefixer = require('autoprefixer');

module.exports = {
  presets: [
    presetEnv
  ],
  plugins: [
    autoprefixer
  ]
}
