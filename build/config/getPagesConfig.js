const HtmlWebpackPlugin = require('html-webpack-plugin');
const resolve = require('../utils/resolve');
const pageNames = require('./pageNames');

function getPagesConfig () {
  const entry = {};
  const htmlPlugins = [];
  for (let i = 0; i < pageNames.length; i++) {
    const pageName = pageNames[i];
    entry[pageName] = resolve(`route/client/${pageName}.js`);
    htmlPlugins.push(new HtmlWebpackPlugin({
      title: pageName,
      template: resolve('route/views/index.html'),
      filename: `views/${pageName}.html`,
      inject: true,
      chunks: [pageName],
      minify: false
    }))
  }

  return { entry, htmlPlugins };
}

module.exports = getPagesConfig;
