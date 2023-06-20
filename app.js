const http = require("http");
const path = require("path");
const express = require("express");
const ejs = require("ejs");
const pageNames = require("@build/config/pageNames");

const serverRoutes = pageNames.reduce((ret, pageName) => {
  ret[pageName] = require(`@route/server/${pageName}.js`).render;
  return ret;
}, {});

function handleRoute(app, req, res) {
  const page = req.params.page;
  const content = serverRoutes[page]();
  res.render(page, {
    content,
  });
}

const app = express();

app.set("views", path.resolve(process.cwd(), "dist/views"));
app.set("view engine", "html");
app.engine("html", ejs.renderFile);

app.use(express.static(path.resolve(process.cwd(), "dist")));

// 调用构建出的 bundle_server.js 中暴露出的渲染函数，再拼接下 HTML 模版，形成完整的 HTML 文件
app.get("/:page.html", function (req, res, next) {
  const page = req.params.page;
  if (pageNames.includes(page)) {
    handleRoute(app, req, res);
  }
  next();
});

app.get("/", function (req, res) {
  req.params.page = "index";
  handleRoute(app, req, res);
});

const server = http.createServer(app);
const PORT = process.env.PORT || 80;
server.listen(PORT, function () {
  console.log(`app listening on port ${PORT}!`);
});
