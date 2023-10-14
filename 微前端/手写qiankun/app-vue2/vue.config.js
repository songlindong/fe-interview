const packageName = require('./package.json').name

module.exports = {
  // webpack 支持运行时的 publicPath
  // publicPath: 'http://localhost:9002/', // 在 VueCLI 中通过这种方式来设置 publicPath
  configureWebpack: {
    mode: 'development',
    output: {
      // publicPath: '', // webpack 构建的资源的公共路径是这样设置的
      // 必须打包出一个库文件
      library: `${packageName}-[name]`,
      // 库的格式必须是 umd
      libraryTarget: 'umd',
      jsonpFunction: `webpackJsonp_${packageName}`
    }
  },
  devServer: {
    port: 9002,
    headers: {
      // 允许 CORS 跨域
      'Access-Control-Allow-Origin': '*'
    }
  }
}
