const http = require('http');
const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const resolve = require('./utils/resolve');
const config = require('./webpack_dev.config');

const app = express();

app.use(express.static(resolve('dist')));

config.entry = Object.entries(config.entry).reduce(function (ret, [key, value]) {
  ret[key] = ['webpack-hot-middleware/client', value];
  return ret;
}, {});

const compiler = webpack(config);
app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath || '',
  writeToDisk: true
}));

app.use(webpackHotMiddleware(compiler));

const PORT = process.env.PORT || 80;
const devServer = http.createServer(app);
devServer.listen(PORT, function () {
  console.log(`app is listening at port ${PORT}`);
});
