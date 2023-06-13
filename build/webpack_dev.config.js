const { merge } = require('webpack-merge');
const baseConfig = require('./webpack_base.config');

module.exports = merge(baseConfig, {
  mode: 'development',
  devtool: 'eval-noresources-cheap-module-source-map'
});
