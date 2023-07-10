### 前端异步处理 Promise

```js
let p1 = new Promise((resolve, reject) => {
    resolve('success')
    reject('fail')
})

console.log('p1', p1)

let p2 = new Promise((resolve, reject) => {
    reject('success')
    resolve('fail')
})

console.log('p2', p2)

let p3 = new Promise((resolve, reject) => {
    throw('error')
})
console.log('p3', p3)
```
1. resolve -> promise 状态转变未fulfilled
2. reject -> promise 转变为rejected
3. 状态不可逆
4. throw -> reject

pending

```js
class MyPromise {
    constructor(executor) { // (resolve, reject) => {}
    // 初始化值
    this.initValue();
    // 绑定this
    this.initBind();
    
    try {
    executor(this.resolve, this.reject);
    } catch (e) {
      this.reject(e)
    }
   }

   initValue() {
    this.PromiseResult = null;
    this.PromiseState = 'pending';
    this.onFulfillmentCallbacks = []; // 成功回调结果
    this.onRejectedCallbacks = []; // 失败的回调结果
   }

   initBind() {
    this.resolve = this.resolve.bind(this);
    this.reject = this.reject.bind(this);
   }
   resolve(value) {
    if(this.PromiseState !== 'pending') return
    this.PromiseState = 'fulfilled';
    this.PromiseResult = value;

    while(this.onFulfillmentCallbacks.length) {
        this.onFulfillmentCallbacks.shift()(this.PromiseResult)
    }
   }

   reject(reason) {
    if(this.PromiseState !== 'pending') return
    this.PromiseState = 'rejected';
    this.PromiseResult = reason;
     while(this.onRejectedCallbacks.length) {
        this.onRejectedCallbacks.shift()(this.PromiseResult)
    }
   }
   
   then(onFulfilled, onRejected) {
    onFulfilled  = typeof onFulfilled === 'function' ? onFulfilled : val => val
    onRejected  = typeof onRejected === 'function' ? onRejected : reason => { throw reason }

    var thenPromise = new MyPromise((resolve, reject) => {
    const resolvePromise = cb => {
        try {
            const x = cb(this.PromiseResult)

            
        }
    }
   })

   return thenPromise;

    if(this.PromiseState === 'fulfilled') {
        onFulfilled(this.PromiseResult)
    } else if (this.PromiseState === 'rejected') {
        onRejected(this.PromiseResult)
    } else { // 只有pending
        this.onFulfillmentCallbacks.push(onFulfilled.bind(this))
        this.onRejectedCallbacks.push(onRejected.bind(this))
    }
   }
}



let p3 = new MyPromise((resolve, reject) => {
    throw('fail')
})

const test1 = new MyPromise((resolve, reject) => {
    resolve(console.log('7788'))
})
console.log(test1)
const test2 = new MyPromise((resolve, reject) => {
    reject('fail')
})
console.log(test2)

const p3 = new Promise((resolve, reject) => {
    resolve(100)
})

p3.then(res => 2 * res, err => console.log(err))
  .then(res => console.log(res), err => console.log(err))
```
1. 能够接收两个回调 resolve reject
2. Promise 执行fulfilled -> success rejected -> fail
3. resolve reject then 会在结果出来时在执行
4. 多次then, 下次会受到上次的结果影响

```js
const p3 = new Promise((resolve, reject) => {
    resolve(100)
}).then(res => 2 * res, err => console.log(err))
  .then(res => console.log(res), err => console.log(err))
```
```js
function double(value) {
    setTimeout(() => setTimeout(console.log, 0, value * 2), 1000);
}
double(3);
```
```js
 function double(value, success, failure) {
    setTimeout(() => {
        try {
            if (typeof value !== 'number') {
                throw 'Must provide number as first argument';
            }
            success(2 * value);
        } catch (e) {
            failure(e);
        }
    }, 1000);
 }

 const successCallback = (x) => console.log(`Success: ${x}`);
 const failureCallback = (e) => console.log(`Failure: ${e}`);

 double(3, successCallback, failureCallback);
 double('b', successCallback, failureCallback);
```