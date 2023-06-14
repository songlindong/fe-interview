# node 突击

## 如何理解node中模块的概念
模块化规划
### 软件工程的本质是什么？
- 管理数据 - 管理变量
 - DB
 - BE： 数据的组织，查询
 - FE：runtime的时间，管理变量
  - 管理变量的生命周期[model] 和展示形式[view]
- 进行通信

JS 脚本语言
window
```js
 
```
什么是模块？模块就是通过 函数作用域，把变量和函数，进行隔离。
***闭包 - 模块化的集市***
### 模块化的方案
```js
  function foo(){
    var bar = 1
    var baz = 2
  }
  function foo2(){
    var bar = 'hello'
    var baz = 'world'
  }
```
只做到了隔离，没有做到通信
```js
  var obj = {
    foo: {

    }
  }
  function resolve(obj, foo){
    var bar = 'hello'
    var baz = 'world'
    obj.foo = {
        bar, baz
    }
  }

  resolve(obj, obj.foo)
```
```js
  var module = {
    exports: {

    }
  }
  function resolve(module, exports){
    var bar = 'hello'
    var baz = 'world'
    module.exports = {
        bar, baz
    }
  }

  resolve(module, module.exports)
```
webpack 打包以后的 runtime.js
```js
var module = {
    './src/A.js':{
        exports:{}
    },
    './src/B.js':{
        exports:{}
    }
}
function require(id){
    return module[id].exports;
}

(function(module, exports, require){
    const foo = require('./src/B.js')
    const bar = 1
    const baz = 2
    module.exports = {
        foo, bar, baz
    }
})(module['./src/A.js'], module['./src/A.js'].exports, require)

```
### 模块化的历史
commonjs 规范的实现， 是以node为代表
 ESM是2015年出现的
amd 规范的实现，是以require.js为代表
cmd 规范的实现，是以sea.js为代表
```js
  
```
## 简述require的模块加载机制
commonjs遵循的是 ，文件直接获取，node是commonjs的实现
在node端，我的文件，是不是可以直接fs.read

### 为什么浏览器端，不能require？

require的模块加载机制，是通过文件的读取，和script上下执行实现的，浏览器端不能读

## 如何理解node的事件循环流程

```bash
             同步的代码
                 |
     process.nextTick / promise...
                 |
   ┌───────────────────────────┐
┌─>│           timers          │ 定时器： setTimeout / setInterval
│  └─────────────┬─────────────┘
|    process.nextTick / promise...
│  ┌─────────────┴─────────────┐
│  │     pending callbacks     │ 执行延迟到下一个循环迭代的I/O回调
│  └─────────────┬─────────────┘
|    process.nextTick / promise...
│  ┌─────────────┴─────────────┐
│  │       idle, prepare       │ 系统内部使用
│  └─────────────┬─────────────┘      ┌───────────────┐
|    process.nextTick / promise...
│  ┌─────────────┴─────────────┐      │   incoming:   │
│  │           poll            │<─────┤  connections, │
│  └─────────────┬─────────────┘      │   data, etc.  │
|    process.nextTick / promise...
│  ┌─────────────┴─────────────┐      └───────────────┘
│  │           check           │ setImmediate 
│  └─────────────┬─────────────┘
|    process.nextTick / promise...
│  ┌─────────────┴─────────────┐
└──┤      close callbacks      │ 关闭回调函数
   └───────────────────────────┘

```

### 做个题
```js

async function async1() {
    console.log('async1 started'); 2
    await async2();
    console.log('async end');  8
}

// function async1() {
//   new Promise((resolve, reject) => {
//     console.log('async1 started'); 2
//     console.log('async2'); 3
//     resolve(console.log('async2')) 3
//   }).then(res => {
//     console.log('async end');  8
//   })
// }


async function async2() {
    console.log('async2'); 3
}
console.log('script start.'); 1
setTimeout(() => {
    console.log('setTimeout0'); 10
    setTimeout(() => {
        console.log('setTimeout1'); 12
    }, 0);
    setImmediate(() => {
        console.log('setImmediate'); 11
    })
}, 0);

async1();
process.nextTick(() => {
    console.log('nextTick'); 7
})

new Promise((resolve) => {
    console.log('promise1'); 4
    resolve();
    console.log('promise2'); 5
}).then(() => {
    console.log('promise.then') 9
});
console.log('script end.'); 6
```

## 如何描述异步I/O的流程
### 什么是异步IO
  什么是阻塞和非阻塞
  系统接收输入时，再到输出的时候，能不能接收其他的输入
   - 食堂打饭的时候，能不能打着你的，同时给别人打？阻塞的
   - 餐厅的服务员，再给你下了单以后，能不能去给别人下单？



思考一个问题：多个任务执行时，存在 I/O 和 cpu 计算任务，如何合理地利用资源？
#### 方案1：多线程
线程之间要切换，代码也要枷锁

#### 方案2：单线程 + 异步 I/O
- I/O 是不能阻塞CPU的执行
- 不要带来锁的问题
- 性能要OK


## 简述V8的垃圾回收机制以及关键点
### 为什么会产生垃圾
```js
  window.foo = funciton(){

  }
```
### 垃圾回收是如何实现的
引用计数，
a -> b b -> a

标记清除
我从根节点出发，所有的能够索引到的，都不是垃圾，其他的在，就是垃圾
GC root
 - 全局 window / global 对象
 - DOM 树
 - 存在栈上的变量

### 两个垃圾回收器 / 代际假说
  - Major 主垃圾回收器 / 老生代 / 老而不死
  - Major 副垃圾回收器 / 新生代 / 朝生而死 / Scavenge

## 内存泄露是什么，常见的内存泄露原因以及排查方法是什么
1. 全局变量
2. 闭包
3. 事件监听

检测方法：
1. heapdump / npm
2. chrome / devtoos

## websocket与常规的http有何区别
websocket 是一个双向的通信协议，客户端可以通过upgrade 一个http, 升级websocket,和服务器保持长链接
http 是一个在tcp协议纸上的单向协议

## 简述对于node的多进程架构的理解
- Master -Worker 的一个模式，主从模式
- fork 复制出一个独立的进程
- libuv进行提供的

## 如何创建子进程，以及子进程crash后如何自动重启
四种方式。
spawn fork exec execfile
- spawn
```js
  // 在父进程中
  const cp = spawn
```
### 如何重启
一般在生产环境中，使用pm2进行进程守护，原理是，父进程监听子进程的退出事件，然后 restart
## 简述 koa 的中间件原理
```js
```