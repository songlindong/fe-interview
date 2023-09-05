

class AsyncPlugin {
    apply(compiler) {
        compiler.hooks.emit.tapAsync('AsyncPlugin', (compilation) => {
            console.log(compilation)
        })
    }
}

module.exports = AsyncPlugin