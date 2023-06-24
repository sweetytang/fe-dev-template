const presetEnv = require('postcss-preset-env');
const autoprefixer = require('autoprefixer');
const postcssNested = require("postcss-nested");

module.exports = {
  presets: [
    presetEnv
  ],
  plugins: [
    autoprefixer,
    postcssNested
  ]
}
