module.exports = function delay (t = 1000, callback) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('delay finish');
      typeof callback === 'function' && callback(null, 'delay finish');
    }, t);
  });
}
