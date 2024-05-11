const path = require('path');
const { compileTemplate } = require('vue/compiler-sfc')

module.exports = function (source) {
  this.cacheable && this.cacheable();

  const importType = this.resourceQuery.includes('component') ? 'component': this.resourceQuery.includes('raw') ? 'raw': 'url';
  let svg = source;

  if(importType !== 'component') {
    return source;
  }

  svg = svg.replace(/<style/g, '<component is="style"').replace(/<\/style/g, '</component')
  const fileName = path.basename(this.resourcePath);
  const { code } = compileTemplate({
    id: JSON.stringify(this.resourcePath),
    source: svg,
    filename: fileName,
    transformAssetUrls: false
  })
  const val = `${code}\nexport default { render: render }`
  return val;
}
