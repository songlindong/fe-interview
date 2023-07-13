# 1. JS运行机制

## 进程和线程

进程：CPU分配资源的最小单位 进行中的程序 + 进行中的程序所使用的内存和资源

CPU 时间片的轮转 -> 多进程

线程： CPU调度的最小单位

进程里可能包含多个线程 同一个进程中的线程能共享进程中的资源

程序 让线程执行不同的任务

JS 单线程

web worker 创建线程

主子关系 无法操作DOM

## 浏览器

Chrome 多进程的应用程序

新的Tab -> 进程

### 浏览器进程

1. Browser进程: 主进程
2. 插件进程
3. GPU进程
4. render进程：每个tab都有一套自己的进程 JS页面渲染 浏览器内核

### 渲染进程包含哪些线程

1. GPU的渲染线程： HTML DOM tree CSS tree render tree 与JS的执行线程是互斥
2. JS线程
  1. <script></script> defer async的区别-两个同时使用的话，优先async
   1. defer: JS延迟执行，直到DOM渲染完
   2. async： 不会让脚本阻塞文档
3. 事件触发线程 onclick methods handle task queue
4. 定时器触发线程
5. http异步请求线程 XMLHttpRequest

## 事件循环

```js
let setTimeoutCallBack = function() {
    console.log('我是定时器回调');
};
let httpCallback = function() {
    console.log('我是http请求回调')；
}

// 同步任务
console.log('我是同步任务1');

// 异步定时任务
setTimeout(setTimeoutCallBack, 1000);

// 异步http请求任务
ajax.get('/info', httpCallback);

// 同步任务
console.log('我是同步任务2');
```

## 宏任务 微任务

ECMAScript macrotask  task 宏任务

宏任务 JS线程同步执行，不能异中断

宏任务 -> 渲染UI -> 宏任务

1. 主代码块
2. requestAnimationFrame
3. setImmediate
4. setTimeout setInterval

microtask jobs Promise

1. Promise
2. Object.observe
3. MutationObserve

宏任务 -> 微任务 -> 渲染UI -> 宏任务 -> 微任务 -> XXXX

```js
setTimeout(() => console.log(4))

async function test() {
    console.log(1);
    await Promise.resolve()
    console.log(3)
}

test()

console.log(2)
```
```js
function test() {
    console.log(1);
    setTimeout(function () {
        console.log(2)
    }, 1000)
}

test();

setTimeout(function () {
    console.log(3);
})

new Promise(function (resolve) {
    console.log(4);
    setTimeout(function () {
        console.log(5);
    }, 100)
    resolve()
}).then(function () {
    setTimeout(function () {
        console.log(6)
    }, 0)
    console.log(7)
})

console.log(8)
```

```js
new Promise(function (resolve) {
    console.log(4)
    setTimeout(function () {
        console.log(5)
    }, 100)
    resolve();
}).then(function () {
    setTimeout(function () {
        console.log(6)
    }, 0)
    
    new Promise(function (resolve) {
        resolve()
    }).then(function () {
        setTimeout(function () {
            console.log('跟6同一个队列里面么')
        }, 0)
    })
    
    console.log(7)
})
```