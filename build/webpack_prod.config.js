const { merge } = require("webpack-merge");
const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");
const baseConfig = require("./webpack_base.config");
const { PRO_TEXT } = require("./utils/env");

const smp = new SpeedMeasurePlugin();
module.exports = smp.wrap(
  merge(baseConfig, {
    mode: PRO_TEXT,
    devtool: "hidden-cheap-module-source-map", // 输出 SourceMap 方便在浏览器里调试 TS 代码
  })
);
