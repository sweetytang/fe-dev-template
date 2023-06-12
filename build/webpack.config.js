const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  // TS 执行入口文件
  entry: {
    index: path.resolve(process.cwd(), 'route/client/index.js')
  },
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
      '@route': path.resolve(process.cwd(), 'route')
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
      new htmlWebpackPlugin({
        title: 'ssr-demo',
        template: path.resolve(process.cwd(), 'route/views/index.html'),
        filename: 'views/index.html',
        inject: true,
        minify: false
      })
  ],
  devtool: 'source-map',// 输出 SourceMap 方便在浏览器里调试 TS 代码
};
