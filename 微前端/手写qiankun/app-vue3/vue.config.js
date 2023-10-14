const packageName = require('./package.json').name

module.exports = {
  configureWebpack: {
    output: {
      library: `${packageName}-[name]`,
      libraryTarget: 'umd',
      jsonpFunction: `webpackJsonp_${packageName}`
    }
  },
  devServer: {
    port: 9003,
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  }
}
