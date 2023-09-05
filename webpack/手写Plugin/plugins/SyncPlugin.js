

class SyncPlugin {
    apply(compiler) {
        compiler.hooks.afterDone.tap('SyncPlugin', (stats) => {
            console.log('afterDone结束了')
        })
    }
}

module.exports = SyncPlugin