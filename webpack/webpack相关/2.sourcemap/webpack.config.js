const path = require('path')

module.exports = {
    mode: 'development',
    devtool: false,
    entry: "./src/index.js",
    output: {
        filename: "bundle.js",
        path: path.resolve('dist')
    },
    module: {
        rules: [{
            test: /\.js$/,
            use: [
                {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            ]
        }]
    }
}