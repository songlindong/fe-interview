function loader(source) {
    console.log('loader1.....')
    return source
}

loader.pitch = function() {
    console.log('loader-pitch')
}

module.exports = loader


/**
 * 所谓loader就是一个函数，接收 loader 转换之前的原始数据，返回 loader 转换之后的数据
 * 交给下一个环境，同时这个返回值必须是 JS 最终能处理的，string 或者 Buffer
 * 
 */