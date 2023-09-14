# Promise 基础

## Promise意义
- Promise的出现是为了解决ES6之前JS代码中频繁嵌套回调函数所导致的回调地狱问题 - Promise为ES6特性

- 什么是回调地狱，来看一个简单的示例
```js
 setTimeout(() => {
    console.log(1111);
    setTimeout(() => {
        console.log(2222);
        setTimeout(() => {
        console.log(3333);
         setTimeout(() => {
            console.log(4444);
         }, 4000)
        }, 3000)
    }, 2000)
 }, 1000)
```
- 那么Promise怎么解决回调地狱的
```js
 function f1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(111), 1000)
    }).then(data => console.log(data))
 }
 function f2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(222), 2000)
    }).then(data => console.log(data))
 }
 function f3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(333), 3000)
    }).then(data => console.log(data))
 }
 function f4() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(444), 4000)
    }).then(data => console.log(data))
 }
 f1.().then(f2).then(f3).then(f4)
```
## Promise 使用
- Promise构造函数只有一个参数，该参数是一个函数，被称作执行器，执行器有2两个参数，分别是resolve()和reject(), 一个表示成功的回调，一个表示失败的回调

```js
 new Promise(function(resolve, reject) => {
    setTimeout(() => resolve(5), 0)
 }).then(v => console.log(v))
```
记住，Promise实例只能通过resolve或者reject函数来返回，并且使用then() 或者catch() 获取，不能在 new Promise 里面直接return，这样是获取不到Promise返回值的，
```js
 // 1. resolve(value)
 Promise.resolve(5).then(v => console.log(v))
 // 2. reject(value)
 Promise.reject(5).catch(v => console.log(v))
 // 执行器错误通过catch捕捉
 new Promise(function(resolve, reject) => {
    if(true) {
        throw new Error('error!!')
    }
 }).catch(v = console.log(v.message)) // error !!
```
## Promise.prototype.then(onFulfilled, onRejected)

```js
new Promise((resolve, reject) => {
    setTimeout(() => resolve(111), 1000)
}).then(data => {
    console.log(data)
    return data + 111 // 相当于resolve(data + 111)
}).then(data => {
    console.log(data)
})
```
## Promise.prototype.catch(onRejected)

```js
new Promise((resolve, reject) => {
  setTimeout(() => reject(111), 1000);
}).then(data => {
  console.log('then data:', data);
}).catch(e => {
  console.log('catch e: ', e);
});
```
## Promise.prototype.finally(fn)
- Promise提供了标准结束方法 finally(), 只要Promise状态变成settled, 无论是rejected还是fulfilled，都会在finally里捕获

```js
new Promise((resolve, reject) => {
    setTimeout(() => reject(111), 1000);
}).then(data => {
    console.log('then data:', data);
}).catch(e => {
    console.log('catch e:', e)
    return e
}).then(data => {
    console.log('catch data:', data)
    return data
}).finally(() => {
    console.log('promise finally');
    return 222;
})
```
## Promise 获取数据(串行)之then写法注意
```js
 const setDelay = (millisecond) => {
    return new Promise((resolve, reject) => {
        if (typeof millisecond != 'number') {
            reject(new Error('参数必须是number类型'))
        }

        setTimeout(() => {
            resolve(`我延迟了${millisecond}毫秒后输出的`)
        }, millisecond)
    })
 }

 arr = [setDelay(1000), setDelay(1000), setDelay(1000)]

 arr[0].then(result => {
    console.log(result)
    return arr[1]
 }).then(result => {
    console.log(result)
    return arr[2]
 }).then(result => {
    console.log(result)
 })

 arr = [setDelay, setDelay, setDelay]
 arr[0](1000).then(result => {
    return arr[1](1000)
 }).then(result => {
    console.log(result)
    return arr[2](1000)
 }).then(result => {
    console.log(result)
 })


class U {
  constructor() {
    this.promise = Promise.resolve();
  }

  console(val) {
    this.promise = this.promise.then(() => {
      return new Promise((resolve) => {
        console.log(val);
        resolve();
      })

    });
    console.log(this.promise)
    return this;
  }

  setTimeout(wait) {
    this.promise = this.promise.then(() => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve();
        }, wait);
      });
    });
    return this;
  }
}
const u = new U();
u.console("breakfast")
  .setTimeout(3000)
  .console("lunch")
  .setTimeout(3000)
  .console("dinner");

```
## promise.all的实现
```js
Promise.myAll = (promises) => {
    return new Promise((rs, rj) => {
        let count = 0;
        let result = [];
        let len = promises.length;
        promises.forEach((item, index) => {
         Promise.resolve(item).then((res) => {
            count += 1;
            result[ index ] = res

            if (count === len) {
                rs(result)
            }
         }).catch(rj)
        })
    })
}

let p1 = Promise.resolve(1)
let p2 = Promise.resolve('我是p2')

let p3 = Promise.reject('出错了')

    Promise.myAll([p1, p2]).then((res) => {
        console.log(res)
    }).catch((err) => {
        console.log(err)
    })
```

```js
const demo = async ()=>{
  let result = await new Promise((resolve, reject) => {
    setTimeout(()=>{
      resolve('我延迟了一秒');
    }, 1000)
  });
  console.log('我由于上面的程序还没执行完，先不执行“等待一会”');
  return result;
}
// demo的返回当做Promise
demo().then(result=>{
console.log('输出',result); // 输出 我延迟了一秒
});

```