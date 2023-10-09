const path = require('path')

/**
 * 01 false 不给原代码信息，只有打包后的错误提示（有行有列）
https://app.diagrams.net/#Wf1804449e14ff498%2FF1804449E14FF498!422 * 02 source map, 生成一个.map 文件， 信息是最全的，有原始代码
 * 03 cheap, 它自己只有行没有列，且不包含loader 的source map
 * 04 module, 会包含第三方库的 source map
 * 05 inline, 所有的信息都放在行内
 * 06 eval
 */

module.exports = {
    mode: 'development',
    devtool: false,
    entry: "./src/index.js",
    output: {
        filename: "bundle.js",
        path: path.resolve('dist')
    },
    resolveLoader: {
        // alias: {
        //     'loader1': path.resolve(__dirname, 'loaders/loader1')
        // },
        modules: ['node_modules', path.resolve(__dirname, 'loaders')]
    },
    module: {
        rules: [{
            test: /\.js$/,
            use: [
                {
                    loader: 'loader1',
                }
            ]
        }]
    }
}