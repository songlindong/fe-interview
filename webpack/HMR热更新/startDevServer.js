const config = require('./webpack.config')
const webpack = require('webpack')



//!当前目的是开启服务，这个服务将来还需要和webpack打包结合起来
//！所以我们这里还需要拿到一个能完成webpack打包的“人”（compiler）
//! 如果你想要获得compiler 那就需要依赖webpack与配置文件[webpack自带的]