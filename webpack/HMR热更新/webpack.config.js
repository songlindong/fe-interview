const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { HotModuleReplacementPlugin } = require('webpack')

module.exports = {
    devtool: false,
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: '[name].js',
        path: path.resolve('dist'),
        // publicPath: ''
    },
    devServer: {
        port: 3000,
        writeToDisk: true,
        contentBase: path.resolve(__dirname, 'static')
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html'
        }),
        new HotModuleReplacementPlugin()
    ]
}