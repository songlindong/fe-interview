class RunPlugin {
    apply(compiler) {
        compiler.hooks.run.tap('RunPlugin', () => {
            console.log('RunPlugin钩子的事件监听被触发了')
        })
    }
}

module.exports = RunPlugin