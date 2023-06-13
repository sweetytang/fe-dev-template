function realModule (resource) {
  const NMS = 'node_modules';
  resource = resource || '';
  const idx = resource.lastIndexOf(NMS);

  let ret = '';
  if (idx !== -1) {
    ret = `${NMS}/${resource.slice(idx + NMS.length)}`
  }

  return ret;
}

module.exports = realModule;
