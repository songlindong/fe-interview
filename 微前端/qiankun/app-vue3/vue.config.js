const { defineConfig } = require('@vue/cli-service')
const { name } = require('./package')


module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port: 8081,
    headers: {
      // 开启CORS 跨域
      'Access-Control-Allow-Origin': '*'
    }
  },
  configureWebpack: {
    output: {
      library: `${name}-[name]`,
      libraryTarget: 'umd', // 把微应用打包成umd库格式
      // jsonpFunction: `webpackJsonp_${name}`, // 自定义jsonp函数名称，如果要使用jsonp跨域加载资源的时候这个有用
    }
  }
})
