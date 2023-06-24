const webpack = require("webpack");
const { merge } = require("webpack-merge");
const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const baseConfig = require("./webpack_base.config");
const { DEV_TEXT } = require("./utils/env");

const smp = new SpeedMeasurePlugin();

module.exports = smp.wrap(
  merge(baseConfig, {
    mode: DEV_TEXT,
    devtool: "eval-nosources-cheap-module-source-map",
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new BundleAnalyzerPlugin(),
    ],
  })
);
