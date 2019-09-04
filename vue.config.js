const merge = require('deepmerge')
const pkgVersion = require('./package.json').version

const VERSION = {
  'process.env': {
    VUE_APP_VERSION: JSON.stringify(pkgVersion),
  },
}

module.exports = {
  publicPath: '',
  css: {
    sourceMap: true,
  },
  chainWebpack: config =>
    config
      .plugin('define')
      .tap(
        args => merge(args, [VERSION])
      ),
}
