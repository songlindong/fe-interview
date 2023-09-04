const { RawSource } = require('webpack-sources')


class FileListPlugin {
    constructor({filename}) {
        this.filename = filename
    }
    apply(compiler) {
        compiler.hooks.emit.tapAsync('FileListPlugin', (compilation, cb) => {
            let assetsList = ``
            for (let file in compilation.assets) {
                let source = compilation.assets[file].source()
                assetsList += `${file}      ${source.length} bytes \r\n`

                // 只要能往 assets 中添加一个RoaSource 实例对象就可以
                compilation.assets[this.filename] = new RawSource(assetsList)
                cb()
            }
        })
    }
}

module.exports = FileListPlugin