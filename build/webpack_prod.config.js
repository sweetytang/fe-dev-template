const { merge } = require('webpack-merge');
const baseConfig = require('./webpack_base.config');

module.exports = merge(baseConfig, {
  mode: 'production',
  devtool: 'hidden-cheap-module-source-map',// 输出 SourceMap 方便在浏览器里调试 TS 代码
});
