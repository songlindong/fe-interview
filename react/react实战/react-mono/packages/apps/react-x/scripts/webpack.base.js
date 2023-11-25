const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
module.exports = function(isDev) {
    return {
        // 最基础的，出入口
        entry: path.join(__dirname, '../src/index.tsx'),
        // 打包输出结果路径
        output: {
            path: path.join(__dirname, "../dist"),
            // 每个输出的 js 的名称
            // hash, contenthash, chunkhash
            filename: "static/js/[name].[hash:8].js",
            // webpack5 内置， 构建前删除一下dist, webpack4: clean-webpack-plugin
            clean: true,
            // 打包后文件的公共前缀路径
            // micro/childProject/xxx/xxx.js
            publicPath: '/'
        },
        module: {
            // loader 就是你在从入口文件去解析各种import地址的后缀时，这些不同
            // 后缀的文件，需要有一个解析器，去识别它的含义，从而保证可以最后形成一个bundle
            rules: [
                {
                    test: /.(ts|tsx)$/,
                    use: {
                        loader: 'babel-loader'
                    }
                },
                // postcss-loader 帮我们处理一些css 的语法转换, autoprefixer
                // css-loader: 主要是处理路径 <link>
                // style-loader: 其实是帮我们的css属性，挂到元素上
                // 在开发环境下，css嵌套在了 style 标签里，方便热替换
                // 生产环境下，我们希望把css单独抽离出来，方便配置缓存
                // 
                {
                    test: /.css$/,
                    use: [
                        isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
                        'css-loader',
                        'postcss-loader'
                    ]
                }
            ]
        },

        plugins: [
            new MiniCssExtractPlugin({
                filename: isDev ? "static/css/[name].css"
                 : "static/css/[name].[contenthash:8].css"
            })
        ]
    }
}