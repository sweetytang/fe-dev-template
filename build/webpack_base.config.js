const resolve = require("./utils/resolve");
const getPagesConfig = require("./config/getPagesConfig");
const realModule = require("./utils/realModule");

const { entry, htmlPlugins } = getPagesConfig();

module.exports = {
  // TS 执行入口文件
  entry,
  output: {
    path: resolve("dist"),
    filename: "assets/js/[name]-[chunkhash:8].js",
    clean: true,
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
  stats: "errors-only",
  optimization: {
    runtimeChunk: "single",
    splitChunks: {
      chunks: "initial",
      maxAsyncRequests: 30,
      maxInitialRequests: 30,
      minChunks: 1,
      cacheGroups: {
        vendor: {
          name: "vendor",
          chunks: "all",
          test: function (module) {
            return /node_modules[\\/](?!react)/.test(
              realModule(module.resource)
            );
          },
        },
        react_vendor: {
          name: "react_vendor",
          chunks: "all",
          test: function (module) {
            return /node_modules[\\/](?=react)/.test(
              realModule(module.resource)
            );
          },
        },
        common: {
          name: "commons_vendor",
          chunks: "all",
          minChunks: 2,
        },
      },
    },
  },
  module: {
    rules: [
      {
        resourceQuery: /raw/,
        type: "asset/source",
      },
      {
        test: /\.[jt]sx?$/,
        use: "babel-loader",
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
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
          "style-loader",
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
  plugins: [...htmlPlugins],
};
