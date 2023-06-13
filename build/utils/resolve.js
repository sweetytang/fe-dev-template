const path = require('path');
const { CWD_PATH } = require('./env');

function resolve (suffix) {
  let ret = suffix + '';
  if (ret[0] === '/') {
    ret = ret.slice(1);
  }
  return path.resolve(CWD_PATH, ret);
}

module.exports = resolve;
