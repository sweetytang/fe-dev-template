const presetEnv = require('postcss-preset-env');
const autoprefixer = require('autoprefixer');
const postcssNested = require("postcss-nested");
const purgecss = require("@fullhuman/postcss-purgecss");

module.exports = {
  presets: [
    presetEnv
  ],
  plugins: [
    autoprefixer,
    postcssNested,
    purgecss({
      content: [
        './src/**/*.{ts,tsx,js,jsx,html}'
      ],
      css: [
        './src/**/*.{scss,css}'
      ],
      safelist: [
        ":global"
      ],
      skippedContentGlobs: [
        "node_modules/**/*"
      ],
      fontFace: true,
      keyframes: true,
      variables: true,
      rejected: true
    })
  ]
}
