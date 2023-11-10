## node 基础
```js
<div>
  <button type="primary">{{message}}</button>
</div>

data() {
    return {
        message: 'hello'
    }
},
methods: {
    apiGetData() {
        getDate().then(res => this.message = res)
    }
}
```

命令式编程

### 一、node 是什么？
Node.js是一个JS的服务端运行环境，基于V8,是在JS语言规范的基础上，封装了一些服务端的runtime,让我们能够简单实现非常多的业务功能，
Node.js在2009年（第一版npm被创建）诞生之初是为了实现高性能的web服务器，再后来Node.js慢慢演化为了一门服务端“语言”

- common js是一个规范，nodejs 是cjs的实现

LAMP
- Linux + Apache + MySQL + php(thinkPhP)
MEAN
- mongoDB + express + angular + node.js 2014年

#### node 能做哪些事情？
npm run start 运行node.

- 跨平台开发：PC web H5 RN Weex
- 后端开发：API，RPC
- 前端开发：前端工具链
- 工具开发：脚本、脚手架、命令行

#### 分类举例
压缩：UglifyJS, JSMin
管理：npm, yarn, bower,
模块系统：Commonjs, ESM
模块构建：Babel, Browserify, Webpack,Gulp, Grunt,
yeoman
slush
CRA, CLI

#### 问题
`new Thread()`
- 单线程很脆弱，但是可以通过cluster / pm2 多核并发实现负载均衡
- node 对MongoDB， Mysql, redis / neo4j, tigerGraph
- 安全问题

#### 和浏览器的区别
- Node 环境中是没有DOM，BOM, 同样的，浏览器中也没有fs,path这些模块
 - why? 如果浏览器支持fs会怎么样？
- 事件循环
- `cjs`和`esm`
 - Node.js 使用 CommonJS 模块系统，而在浏览器中我们开始看到正在实施的ESM标准，

 ### 二、npm相关

 #### npm 的目标？
 >c给你和你的团队、你的公司带来最好的开源库和依赖

 #### npm install 工作原理
开始 => npm install => 检查，有没有lock文件 => 如果有 => 是否和package.json的版本一致 =>如果不一样 => 如果一样 => 检查缓存 => 是否有 => 如果有解压到node_modules => 生产lock 文件

 #### npm 缓存

 ### npm CI

 和 install 不同的是，必须要有 package-lock.json文件，且下载完全依赖该文件；
 如果和package.json冲突，则直接报错

 #### npm 的包依赖关系
 `npm dedupe`;

 ##### xxxDependencies 项目依赖
 

