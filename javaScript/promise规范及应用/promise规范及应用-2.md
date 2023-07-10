## promise 解析
* 啥是异步
```js
  // 异步执行
  let count =1;
  let timer = setTimeout(function() {
    count++;
    console.log('in', count);
  }, 1000);
  
  console.log('out', count);

  // 循环执行 + 终止
  let count =1;
  let timer = setInterval(function() {
    count++;
    console.log('in', count);
  }, 1000);
  
  console.log('out', count);
  setTimeout(function() {
    clearInterval(timer);
    console.log('clear');
  }, 5000);

  // 看不见的队列，存放着他需要默默执行的命令
```

### 1. 进程 + 线程
#### b. 面试题：
* 映射到前端 - 浏览器， chrome新打开一个窗口，是进程还是线程？ - 进程
* 发散：
方向一: 窗口（进程间）通信？- storage、cookie => 多种存储区别 => 应用场景
方向二：浏览器原理

### 2. EVENT-LOOP
#### a. 执行栈

* JS单线程语言，单步执行

```js
function func2() {
  throw new Error('please check your call stack');
}

function func1() {
  func2();
}

function run() {
  func1();
}

run();
```

#### b. 面试题
* JS堆栈执行顺序与堆栈溢出 / 爆栈 / 性能卡顿 / 死循环 => JS 性能优化

```js
 function func() {
  func();
 }
 func();
 // vue - computed 对某个ob变量做个赋值 => 禁止
```
* 执行顺序题
解题思路 - 任务维度
```js
  setTimeout(() => {
    console.log('Timeout');
  }, 0);

  new Promise(resolve => {
    console.log('new Promise');
    resolve()
  }).then(() => {
    console.log('Promise then');
  }).then(() => {
    console.log('Promise then then');
  })

  console.log('hi');
```

### promise
#### a. 理论
```js
  // 1. 写一个异步定时
  setTimeout(() => {
    console.log('time out');
  }, 2000);

  // 2. 异步请求
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      const _status = request.status;
      if (_status === 200) {
        const _res = request.responseText;
        return success(_res);
      } else {
        return fail(_status);
      }
    }
  }

  // 3. 延时后再请求
  setTimeout(() => {
    console.log('time out');
      request.onreadystatechange = () => {
      if (request.readyState === 4) {
        const _status = request.status;
        if (_status === 200) {
          const _res = request.responseText;
          return success(_res);
        } else {
          return fail(_status);
        }
      }
    }
  }, 2000);

  // 4. 请求完成后，再等2s，再下一个请求
  // 回调地狱

  // 5. promise的出现拯救了回调导致的无穷嵌套
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('OK');
    })
  }).then(res => {
    console.log('then' + res);
  }).catch(err => {
    console.log('catch' + err);
  })

  // 6. 多个异步顺序执行 => 复合链式调用
  function wait500(input) {
    return new Promise((resolve, reject) => {
      console.log('500', input);
      setTimeout(() => {
        resolve(input + 500);
      }, 500)
    })
  }

  function wait1000(input) {
    return new Promise((resolve, reject) => {
      console.log('1000', input);
      setTimeout(() => {
        resolve(input + 1000);
      }, 1000)
    })
  }

  const p = new Promise((resolve, reject) => {
    resolve(1);
  });

  p.then(wait500)
   .then(wait1000)
   .then(wait500)
   .then(wait1000)
   .then(result => {
    console.log('end', result);
   })

   // 7. 全部执行，执行完成全部promise后，再回调
    Promise.all([wait500, wait1000]).then(result => {
      console.log('all end', result);
    });

   // 8. 有执行完成的，立刻操作
  Promise.race([wait500, wait1000]).then(result => {
        console.log('all end', result);
      });
```
#### b. 面试
* 1. promise有哪些状态？对应值有哪些？
promise: pending、fulfilled、rejected
executor: new Promise的时候立即执行，接收两个参数resolve、reject

* 2. promise的默认状态是？状态如何流转？
默认状态：pending
内部维护成功value：undefined、thenable、promise(成功)
内部维护失败变量reason

promise 状态流转 pending => rejected、 pending => fulfilled

* 3. promise的返回值？
then方法：接收onFulfilled和onRejected

如果then时，promise已经成功，执行onFulfilled, 参数value

如果then时，promise已经失败，执行onRejected, 参数reason

如果then中有异常传递onRejected

* 4. 手写promise - 基础版
```js
 const PENDING = 'PENDING';
 const FULFILLED = 'FULFILLED';
 const REJECTED = 'REJECTED';

 class Promise {
   construtor(executor) {
    
   }
 }
```

### async await & generator
```js
   function wait500(input) {
    return new Promise((resolve, reject) => {
      console.log('500', input);
      setTimeout(() => {
        resolve(input + 500);
      }, 500)
    })
  }

  async function asyncCall() {
    const result = undefined;
    result = await wait500(0);
    console.log('asyncCall', result);
  }
 
  asyncCall();

  // 2. 步进 手动代替then
  function* generator() {
   let index = 0;
   while(true) yield index++;
  }

  let gen = generator();
  console.log(gen.next().value);
  console.log(gen.next().value);
  console.log(gen.next().value);

  // 3. 结合流水线自动化
  const GEN_LINE = [1,2,3,4,5,6];

  (GEN_LINE || []).forEach(it => {
     console.log(gen.next(it).value)
  })

```