// let buf1 = Buffer.alloc(5); // 单位是字节

// let buf2 = Buffer.from('测试');// node中一般编码使用的是utf-8,所以一个汉字是3个字节

// //e6 b5 8b
// let buf3 = Buffer.from([0xe6, 0xb5, 0x8b])

// console.log(buf1)
// console.log(buf2)

// console.log(buf3.toString())

// let buf1 = Buffer.from('测试')
// let buf2 = Buffer.from('测试')

// let bigBuffer = Buffer.alloc(6); // 分配6个字节
// // 第一个0， 表示从0这个位置开始拷贝
// // 第二和第三个数字，表示拷贝从几到几的长度
// buf1.copy(bigBuffer, 0, 0, 2)
// buf2.copy(bigBuffer, 2, 2, 6)
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
// process.nextTick(() => {
//     console.log('nextTick');
// })
async1();
new Promise((resolve) => {
    console.log('promise1');
    resolve();
    console.log('promise2');
}).then(() => {
    console.log('promise.then')
});
console.log('script end');


