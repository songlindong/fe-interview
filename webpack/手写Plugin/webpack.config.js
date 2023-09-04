const path = require('path')
const SyncPlugin = require('./plugins/SyncPlugin')
const AsyncPlugin = require('./plugins/AsyncPlugin')
const FileListPlugin = require('./plugins/FileListPlugin')

module.exports = {
    mode: 'development',
    entry: './src/index',
    output: {
        filename: 'bundle.js',
        path: path.resolve('dist')
    },
    plugins: [
        // new SyncPlugin(),
        // new AsyncPlugin(),
        new FileListPlugin({
            filename: 'abc.md'
        })
    ]
}