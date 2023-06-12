const path = require('path');
const express = require('express');
const ejs = require('ejs');
const { render } = require('@route/server/index');
const app = express();

app.set('views', path.resolve(process.cwd(), 'dist/views'));
app.set('view engine', 'html');
app.engine('html', ejs.renderFile);

app.use(express.static(path.resolve(process.cwd(), 'dist')))

// 调用构建出的 bundle_server.js 中暴露出的渲染函数，再拼接下 HTML 模版，形成完整的 HTML 文件
app.get('/', function (req, res) {
  const content = render();
  res.render('index', {
    content: content
  });
//   res.send(`
// <html>
// <head>
//   <meta charset="UTF-8">
// </head>
// <body>
// <div id="app">${render()}</div>
// <!--导入 Webpack 输出的用于浏览器端渲染的 JS 文件-->
// <script src="./dist/bundle_browser.js"></script>
// </body>
// </html>
//   `);
});

// 其它请求路径返回对应的本地文件
app.use(express.static('.'));

app.listen(3000, function () {
  console.log('app listening on port 3000!')
});
