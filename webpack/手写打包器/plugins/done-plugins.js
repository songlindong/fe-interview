class DonePlugin {
    apply(compiler) {
        compiler.hooks.done.tap('DonePlugin', () => {
            console.log('DonePlugin钩子的事件监听被触发了')
        })
    }
}

module.exports = DonePlugin