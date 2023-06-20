const nodeExternals = require("webpack-node-externals");
const resolve = require("./utils/resolve");
const { PRO_TEXT } = require("./utils/env");

module.exports = {
  mode: PRO_TEXT,
  // JS 执行入口文件
  entry: "./app.js",
  // 为了不把 Node.js 内置的模块打包进输出文件中，例如 fs net 模块等
  target: "node",
  // 为了不把 node_modules 目录下的第三方模块打包进输出文件中
  externals: [nodeExternals()],
  output: {
    // 输出文件都放到 dist 目录下
    path: resolve("./dist"),
    // 把最终可在 Node.js 中运行的代码输出到一个 bundle_server.js 文件
    filename: "app.js",
    // 为了以 CommonJS2 规范导出渲染函数，以给采用 Node.js 编写的 HTTP 服务调用
    libraryTarget: "commonjs2",
  },
  stats: "errors-only",
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        use: ["babel-loader"],
      },
      {
        test: /\.css$/,
        use: [
          // CSS 代码不能被打包进用于服务端的代码中去，忽略掉 CSS 文件
          "ignore-loader",
          {
            loader: "css-loader",
            options: {
              modules: true,
              importLoaders: 1,
            },
          },
          "postcss-loader",
        ],
      },
      {
        test: /\.s[ac]ss$/,
        use: [
          // CSS 代码不能被打包进用于服务端的代码中去，忽略掉 CSS 文件
          "ignore-loader",
          {
            loader: "css-loader",
            options: {
              modules: true,
              importLoaders: 1,
            },
          },
          "postcss-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        type: "asset",
        generator: {
          filename: "assets/images/[name]-[hash:8][ext]",
        },
      },
      {
        test: /\.(ttf|woff|woff2|otf|eot)$/i,
        type: "asset/resource",
        generator: {
          filename: "assets/fonts/[name]-[contenthash:8][ext]",
        },
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
    alias: {
      "@src": resolve("src"),
      "@app": resolve("src/app"),
      "@route": resolve("route"),
      "@build": resolve("build"),
    },
  },
  devtool: "source-map", // 输出 source-map 方便直接调试 ES6 源码
};
