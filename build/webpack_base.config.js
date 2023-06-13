const path = require('path');
const getPagesConfig = require('./config/getPagesConfig');

const { entry, htmlPlugins } = getPagesConfig();

module.exports = {
  // TS 执行入口文件
  entry,
  output: {
    path: path.resolve(process.cwd(), 'dist'),
    filename: 'assets/js/[name]-[chunkhash:8].js',
    clean: true,
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    alias: {
      '@src': path.resolve(process.cwd(), 'src'),
      '@app': path.resolve(process.cwd(), 'src/app'),
      '@route': path.resolve(process.cwd(), 'route'),
      '@build': path.resolve(process.cwd(), 'build'),
    }
  },
  module: {
    rules: [
      {
        resourceQuery: /raw/,
        type: 'asset/source',
      },
      {
        test: /\.[jt]sx?$/,
        use: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                modules: true,
                importLoaders: 1,
              }
            },
            'postcss-loader'
        ]
      },
      {
        test: /\.s[ac]ss$/,
        use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                modules: true,
                importLoaders: 1,
              }
            },
            'postcss-loader',
            'sass-loader'
        ]
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        type: 'asset',
        generator: {
          filename: 'assets/images/[name]-[hash:8][ext]'
        }
      },
      {
        test: /\.(ttf|woff|woff2|otf|eot)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/fonts/[name]-[contenthash:8][ext]'
        }
      }
    ]
  },
  plugins: [
      ...htmlPlugins
  ]
}
