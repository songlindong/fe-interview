// 1 引入原生的 webpack
const webpack = require('./webpack')

// 2 配置文件导入
const config = require('./webpack.config')

// 3 创建compiler 对象实例
const compiler = webpack(config)

// 4 调用 run 方法开始执行编译
compiler.run()
