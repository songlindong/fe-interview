const path = require('path')
const RunPlugins = require('./plugins/run-plugins')
const DonePlugins = require('./plugins/done-plugins')

module.exports = {
    mode: 'development',
    devtool: false,
    entry: {
        entry1: './src/entry1.js',
        entry2: './src/entry2.js',
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    path.resolve(__dirname, 'loaders', 'loader1.js'),
                    path.resolve(__dirname, 'loaders', 'loader2.js')
                ]
            }
        ]
    },
    plugins: [
        new RunPlugins(),
        new DonePlugins(),
    ]
}