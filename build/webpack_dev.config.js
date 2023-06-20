const webpack = require("webpack");
const { merge } = require("webpack-merge");
const baseConfig = require("./webpack_base.config");
const { DEV_TEXT } = require("./utils/env");

module.exports = merge(baseConfig, {
  mode: DEV_TEXT,
  devtool: "eval-nosources-cheap-module-source-map",
  plugins: [new webpack.HotModuleReplacementPlugin()],
});
