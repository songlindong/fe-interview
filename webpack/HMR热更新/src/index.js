let render = function () {
    let title = require('./title')
    root.innerText = title
}

render()

// 思考： module.hot 是什么东西

if (module.hot) {
    // module 就是基于 webpack 打包内部实现上，会产生一个module
    // 告诉index.js 他以来了谁，如果后续这个被依赖的文件发生了变更，那么就会将变更后的内容告知客户端，然后还会拿到 render 这个回调函数去执行

    module.hot.accept(['./title.js'], render)
}