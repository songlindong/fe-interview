const { merge }  = require('webpack-merge')
const baseConfig = require('./webpack.base.js')
const path = require('path')

module.exports = merge(baseConfig(), {
    // 开发模式，打包速度更快，不干一些优化呗
    mode: 'development',
    // 源码调试
    devtool: "eval-cheap-module-source-map",
    // resolve: {
    //     alias: {
    //         '@': path.resolve(__dirname, 'src')
    //     }
    // },
    devServer: {
        port: 3000,
        compress: false, // gzip压缩，开发环境不压缩，提升热更新速度
        hot: true, // 热更新
        historyApiFallback: true, // 解决开发环境下，history路由404的问题
        static: {
            // 托管静态资源 public 文件夹
            directory: path.join(__dirname, "../public")
        }
    }
})