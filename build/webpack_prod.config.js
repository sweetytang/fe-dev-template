const { merge } = require('webpack-merge');
const baseConfig = require('./webpack_base.config');
const { PRO_TEXT } = require('./utils/env');

module.exports = merge(baseConfig, {
  mode: PRO_TEXT,
  devtool: 'hidden-cheap-module-source-map',// 输出 SourceMap 方便在浏览器里调试 TS 代码
});
