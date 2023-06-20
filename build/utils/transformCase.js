function toCamel(src, opt) {
  let ret = src.replace(/_([a-z])/g, (_, $1) => `${$1}`.toUpperCase());
  if (opt?.capitalized) {
    ret = ret.slice(0, 1).toUpperCase() + ret.slice(1);
  }
  return ret;
}

function toSnake(src) {
  let ret = src.replace(/[A-Z]/g, (ctx) => `_${ctx.toUpperCase()}`);
  return ret;
}

module.exports = {
  toCamel,
  toSnake,
};
