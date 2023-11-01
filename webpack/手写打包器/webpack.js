const Compiler = require('./compiler')

function webpack (config) {

    //* 在实例化 compiler 之前我们需要将用户配置参数和shell命令行参数合并
    const shellOptions = process.argv.slice(2).reduce((config, arg) => {
        let [key, value] = arg.split('=')
        config[key.slice(2)] = value
        return config
    }, {})

    const finalOptions = { ...config, ...shellOptions}

    // 实例化 Compiler 类接收配置参数 返回compiler实例对象
    const compiler = new Compiler(finalOptions)
    
    // 创建完 Compiler 类接收配置参数返回 compiler 实例对象
    finalOptions.plugins.forEach(plugin => {
        plugin.apply(compiler)
    })

    return compiler
}

module.exports = webpack