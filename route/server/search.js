import React from "react";
import { renderToString } from "react-dom/server";
import Main from "@app/Search";

// 导出渲染函数，以给采用 Node.js 编写的 HTTP 服务器代码调用
export function render() {
  // 把根组件渲染成 HTML 字符串
  return renderToString(<Main />);
}
