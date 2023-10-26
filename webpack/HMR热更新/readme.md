## 热更新流程分析
1. 当我们使用热更新功能的时候，在浏览器（客户端）当中输入地址能访问到资源，就说明背后一定有一个服务端
2. 这个服务端需要完成两件事
    1. 以watch的方式来执行webpack打包，一旦文件系统发生了变更就会重新打包，产生新的hash值
    2. 开启一个websocket服务端，将新的hash值发送给客户端（浏览器）
3. 基于websocket服务，浏览器在接到服务端发送的ok hash消息之后，就可以执行热更新操作
4. 不论中间的过程如何实现，最终还是会执行被依赖文件设置时定义的回调

## 寻找 serve 源码入口
- @webpack-cli\serve\lib\index.js
- startDevServer.js
> vscode调试别人的源码

## 关于node_modules\.bin 目录
- 我们自己也会用nodejs来开发工具包，所以你应该知道你的包里会有一个 package.json文件
- 这个 package.json 文件当中会存在一个bin字段，假如说是 aaa
- 将来如果有人下载了你的这个安装包，首先这个包的内容肯定是放在了node_modules目录当中，同时它会把上面那个aaa 给自动的添加至node_modules\bin目录里
- 再之后我们在拿命令行当中执行 npm run xxx 的时候，又会自动的将node_modules\.bin 所在的路径添加至系统 Path 当中
- 结论：相当于我们可以直接使用aaa 这个全局命令了，那么这个文件对应的代码就能运行了

## 开启服务
### 01 开启http服务
- 在热更新功能使用中，它有一个静态资源服务器，这是走Http协议的
### 02 开启websocket 服务
- 在webpack重新打包之后，需要告知浏览器，内容发生了变更，所以要采用websocket服务