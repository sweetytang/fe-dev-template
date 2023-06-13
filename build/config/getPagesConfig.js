const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const pageNames = require('./pageNames');

function getPagesConfig () {
  const entry = {};
  const htmlPlugins = [];
  for (let i = 0; i < pageNames.length; i++) {
    const pageName = pageNames[i];
    entry[pageName] = path.resolve(process.cwd(), `route/client/${pageName}.js`);
    htmlPlugins.push(new HtmlWebpackPlugin({
      title: pageName,
      template: path.resolve(process.cwd(), 'route/views/index.html'),
      filename: `views/${pageName}.html`,
      inject: true,
      chunks: [pageName],
      minify: false
    }))
  }

  return { entry, htmlPlugins };
}

module.exports = getPagesConfig;
