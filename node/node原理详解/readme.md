# node API

## node 内置对象

### Buffer
准确来说，Buffer是一种计算机中数据流结构。计算机中是以二进制的方式，进行数据存取的。而js 在一开始，没有文件读写能力的，就要借助Buffer来实现一些缓冲区的内容。
Buffer一般用于表示固定长度的缓冲区序列。

File new Blob

#### Buffer 的 API
##### Buffer 和 String 的转换
```js
buf.toString(buffer)
Buffer.from(string)
```

##### Buffer 的拼接
- copy
```js
let buf1 = Buffer.from('测试')
let buf2 = Buffer.from('测试')

let bigBuffer = Buffer.alloc(6); // 分配6个字节
// 第一个0， 表示从0这个位置开始拷贝
// 第二和第三个数字，表示拷贝从几到几的长度
buf1.copy(bigBuffer, 0, 0, 2)
buf2.copy(bigBuffer, 2, 2, 6)
```
- concat
```js
```

### Stream

### Event
koa / express

http 模块

net 模块

event


##  事件循环
浏览器下的事件循环：
宏任务 -- 微任务 -- RAF -- Layout -- RequestIdleCallback

```js
async function async1() {
    console.log('async1 started');
    await async2();
    console.log('async end');
}
async function async2() {
    console.log('async2');
}
console.log('script start');
setTimeout(() => {
    console.log('setTimeout0');
    setTimeout(() => {
        console.log('setTimeout1');
    }, 0);
    setImmediate(() => {
        console.log('setImmediate');
    })
}, 0);
process.nextTick(() => {
    console.log('nextTick');
})
async1();
new Promise((resolve) => {
    console.log('promise1');
    resolve();
    console.log('promise2');
}).then(() => {
    console.log('promise.then')
});
console.log('script end');
```