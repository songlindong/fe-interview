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

// 服务端 + 客户端 + 监听
// 1.当我们使用热更新功能的时候，在浏览器（客户端）当中输入地址能访问到资源，就说明背后一定有一个服务端
// 2. 这个服务端需要完成两件事
    // 1. 以watch的方式来执行webpack打包，一旦文件系统发生了变更就会重新打包，产生新的hash值
    // 2. 开启一个websocket服务端，将新的hash值发送给客户端（浏览器）
// 3. 基于websocket服务，浏览器在接到服务端发送的ok hash消息之后，就可以执行热更新操作
// 4. 不论中间的过程如何实现，最终还是会执行被依赖文件设置时定义的回调