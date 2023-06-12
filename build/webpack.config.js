const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const getPagesConfig = require('./config/getPagesConfig');

const { entry, htmlPlugins } = getPagesConfig();

module.exports = {
  mode: 'development',
  // TS 执行入口文件
  entry,
  output: {
    filename: 'assets/js/[name]_browser.js',
    path: path.resolve(process.cwd(), './dist'),
    clean: true,
  },
  resolve: {
    // 先尝试 ts，tsx 后缀的 TypeScript 源码文件
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    alias: {
      '@src': path.resolve(process.cwd(), 'src'),
      '@route': path.resolve(process.cwd(), 'route'),
      '@build': path.resolve(process.cwd(), 'build')
    }
  },
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        loader: 'babel-loader'
      }
    ]
  },
  plugins: [
      ...htmlPlugins
  ],
  devtool: 'source-map',// 输出 SourceMap 方便在浏览器里调试 TS 代码
};
