# 防抖函数的实现
```html
 <button onclick="debounceClickTest()">防抖测试</button>
<script>
   const debounceClickTest = debounce(function () {
       console.log('4444')
   }, 3000)

   function debounce(fn, wait) {
    let timer = null;
    return  function () {
        let args = arguments;
        let _this = this;
        if (timer) {
            clearTimeout(timer);
            timer = null;
        }
        
        timer = setTimeout(() => {
            fn.apply(_this, args);
        }, wait);
    }
   }
</script>
```
# 节流函数的实现

```js
   function throttle(fn, delay) {
    let currentTime = Date.now();
    
    return function () {
        let _this = this;
        let args = arguments;
        let nowTime = Date.now();

        if(nowTime - currentTime >= delay) {
            currentTime = Date.now();
            fn.apply(_this, args);
        }
    }

   }
```
# 深拷贝的实现

```js
  function deepCopy(obj) {
    if(!obj || typeof obj !== 'object') return

    let result = Array.isArray(obj) ? [] : {}
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            result[key] = typeof obj[key] === 'object' ? deepCopy(obj[key]) : obj[key]
        }
    }
    return result
  }
```
# JS 数值千分位分隔

## 数组转字符串遍历拼接

```js
 function  format(number) {
    const [int, fraction] = String(number).split('.')

    const intArr = int.split('')

    let res = ''

    intArr.forEach((item, index) => {
        if (index !==0 && index % 3 === 0) {
            res = res + ',' + item
        } else {
            res = res + item
        }
    })

    return res + (!!fraction ? `.${fraction}` : '')
 }
```

## 字符串 + substring 截取
```js
 function  format(number) {
    const [int, fraction] = String(number).split('.')

    const f = int.length % 3

    let res = int.substring(0, f)

    for (let i =0; i < Math.floor(int.length / 3); i++) {
        res += ',' + int.substring(f + i * 3, f + (i + 1) * 3)
    }

    if (f === 0) {
        res = res.substring(1)
    }

    return  res + (!!fraction ? `.${fraction}` : '')
 }
```

## 利用正则实现

```js
 function formatNumber(num) {
    num = num.toString();
    let reg = num.indexOf('.') > -1 ? /(\d)(?=(\d{3})+\.)/g : /(\d)(?=(\d{3})+$)/g;

    return num.replace(reg, '$1,')
 }
```
## Number.prototype.toLocaleString()

```js
 const number = 123456.789;
 number.toLocaleString()
```

## Intl.NumberFormat()

```js
 const number = 3500;
 console.log(new Intl.NumberFormat().format(number));
```

# call、apply、bind实现
```js
 // ES5
 Function.prototype.call = function(context) {
    context = context || window;
    context.fn = this;

    let args = [...arguments].slice(1);
    context.fn(...args)
    delete context.fn
 }
 // ES6
 Function.prototype.call = function(context, ...args) {
    if (typeof context === 'undefined' || context === null) {
        context = window;
    }

    let fnSymbol = Symbol();
    context[fnSymbol] = this;
    let fn = context[fnSymbol](...args)
    delete context[fnSymbol]
    return fn
 }
 // apply
 Function.prototype.apply = function(context, arr) {
    let context = Object(context) || window;
    context.fn = this;
    let result;

    if (!arr) {
        result = context.fn();
    } else {
        result = context.fn(...arr);
    }

    delete context.fn
    return result;
 }
 // bind
 Function.prototype.bind = function (context) {
    let _this = this
    let args = Array.prototype.slice.call(arguments, 1);

    let fBound = function() {
        let bindArgs = Array.prototype.slice.call(arguments)

        return _this.apply(this instanceof fBound ? this : context, args.concat(bindArgs))
    }
    fBound.prototype = this.prototype

    return fBound;
 }
```

# 数组拍平
## 普通方法
```js
  let arr = [1, [2, [3, 4, 5]]]

  const flatten = function(arr) {
    let result = []

    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            result = result.concat(flatten(arr[i]))
        } else {
            result.push(arr[i])
        }

        return result
    }
  }
```
## toString()
```js 
 function flatten(arr) {
    return arr.toString().split(',').map(function(item) {
        return +item
    });
 }
```
## reduce
```js 
  function flatten(arr) {
    return arr.reduce(function(prev, cur) {
        return prev.concat(Array.isArray(cur) ? flatten(cur) : cur)
    }, [])
  }
```

# 数组去重
## set
```js
 function unique(arr) {
    return [...new Set(arr)]
 }
```
## reduce
```js
 function unique(arr) {
    return arr.reduce((pre, cur) => {
        !pre.includes(cur) && pre.push(cur)
        return pre
    }, [])
 }
```
## 普通方式

```js
 function unique(arr) {
  var result = [];
  for (let i = 0; i < arr.length; i++) {
    if (!result.includes(arr[i])) {
       result.push(arr[i])
    }
  }

  return result
 }
```

# 对象转树
```js
编程： 
/ / 有如下无序数组，共100条；id是每条数据的唯一标识， pid的值是父级元素的id，pid=0是第一层节点，每层节点可能有多个；层深不限。
const list = [
  {pid: 0, id: 1, name: ""},  
  {pid: 1, id: 2, name: ""},
  {pid: 1, id: 3, name: ""},
  {pid: 2, id: 4, name: ""},
  {pid: 0, id: 5, name: ""},
  // ...
]
// 将该数组转为树形结构（使用children数组表示下级列表）
function arrToTree(arr) {
  let result = []

  if(!Array.isArray(arr)){
     return []
  }

  let map = {}
  arr.forEach(item => {
     map[item.id] = item
  })

  arr.forEach(item => {
    let _parent = map[item.pid];

    if(_parent){
     (_parent.children || (_parent.children = [])).push(item)
    } else {
      result.push(item)
    }
  })
  return result
}

arrToTree(list)
```

# 实现 getValue
```js
function getValue(obj, keys) {
   if (typeof keys !== 'string') {
     throw new Error('参数类型错误')
   }
   const list = keys.split('.')
   const len = list.length

   for(let i = 0; i < len; i++) {
     const item = obj[list[i]]
     if ( item !== undefined) {
       obj = item
     } else {
       throw new Error('参数路径有误')
     }
   }

   return obj
 }
 const obj = {
   a: {
     b: {
       c: {
         name: 'Martin'
       }
     }
   }
 }
let result = getValue(obj, 'a.b.c')
console.log(result)
```
# 用栈实现队列
```js
var MyQueue = function() {
  this.is= [];
  this.os = [];
};

MyQueue.prototype.push = function(x) {
   this.is.push(x)
};

MyQueue.prototype.pop = function() {
   if (!this.os.length) {
       while (this.is.length) {
           this.os.push(this.is.pop())
       }
   }
   return this.os.pop()
};
MyQueue.prototype.peek = function() {
     if (!this.os.length) {
         while (this.is.length) {
             this.os.push(this.is.pop())
         }
     }
     return this.os[this.os.length - 1]
};
MyQueue.prototype.empty = function() {
    return !this.is.length && !this.os.length;
};
const myQueue = new MyQueue()
myQueue.push(1)
```
# 链式调用
## 高阶
```js
 function Person(name) {
   this.name = name;
   this.queue = [];

   let fn = () => {
    console.log('init组要做的事情')
    this.next()
   }

   this.queue.push(fn)

   setTimeout(() => {
    this.next()
   }, 0)
 }

 Person.prototype = {
  eat(food) {
    let fn = () => {
      console.log('吃' + '' + food)
      this.next();
    }

    this.queue.push(fn);
    return this;
  },
  sleep(time) {
    let fn = () => {
      setTimeout(() => {
        console.log('碎觉' + '' + time)
        this.next()
      }, time*1000)
    }

    this.queue.push(fn);
    return this;
  },
  sleepFirst(time) {
    let fn = () => {
      setTimeout(() => {
        console.log('等待' + '' + time)
        this.next()
      }, time*1000)
    }
    this.queue.unshift(fn)
    return this;
  },
  next() {
    let fn = this.queue.shift();
    fn && fn();
  }
 }

 new Person('Hank').sleep(1).sleepFirst(5).eat('晚饭');
```
## 对象链式调用-promise的异步调用原理

```js
function MyPromise(fn) {

  this.callbackList = []

  const resolve = (value) => {
    console.log(value)
  }

  fn(resolve)
}

var p1 = new MyPromise((resolve, reject) => {
  console.log('p1')
  setTimeout(() => {
    resolve(1)
  }, 1000)
})
```

## 函数的链式调用- 洋葱圈调用

```js
 function fn1(ctx, next) {
  console.log(ctx, '函数fn1执行')
  next();
  console.log(ctx, 'fn1 ending');
 }
 function fn2(ctx, next) {
  console.log(ctx, '函数fn2执行')
  next();
  console.log(ctx, 'fn2 ending');
 }
 function fn3(ctx, next) {
  console.log(ctx, '函数fn3执行')
  next();
  console.log(ctx, 'fn3 ending');
 }

 function wrap(fns) {
  return (ctx) => {
    let l = fns.length;

    return next(0);

    function next(i) {
      if (i === l) return;

      let fn = fns[i];

      return fn(ctx, next.bind(null, (i + 1)))
    }
  }
 }

 let arr = [fn1, fn2, fn3];

 let fn = wrap(arr);

 fn({ word: 'winter is coming!' })
```
## 函数的链式调用-组合（reduce）链式调用

```js
 function fn1(arg1) {
  console.log('fn1的参数：', arg1);
  let arg = arg1 + 30;
  return arg;
 }
 function fn2(arg2) {
  console.log('fn2的参数：', arg2);
  let arg = arg2 + 30;
  return arg;
 }
 function fn1(arg3) {
  console.log('fn3的参数：', arg3);
  let arg = arg3 + 30;
  return arg;
 }

 function compose(fns) {
  let l = fns.length;
  if (!l) throw new Error('至少得有一个函数呀');

  if (l === 1) return fns[0];

  return fns.reduce((a, b, i) => {
    return function c(...arg) {
      return a(b(...arg))
    }
  })
 }

 let fns = [fn1, fn2, fn3];

 let fn = compose(fns);

 let r = fn(10);

 console.log(r);
```
## 实现promise.all()

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
```
## 实现promise.race()

```js
Promise.race = function (promises) {
  return new Promise((resolve, reject) => {
    promises.forEach((item, index) => {
      Promise.resolve(item).then(res => {
        resolve(res)
      }).catch(err => {
        reject(err)
      })
    })
  })
}
```

## 如何实现并发请求数量控制？

```js
// 并发请求函数
const concurrencyRequest = (urls, maxNum) => {
    return new Promise((resolve) => {
        if (urls.length === 0) {
            resolve([]);
            return;
        }
        const results = [];
        let index = 0; // 下一个请求的下标
        let count = 0; // 当前请求完成的数量

        // 发送请求
        async function request() {
            if (index === urls.length) return;
            const i = index; // 保存序号，使result和urls相对应
            const url = urls[index];
            index++;
            console.log(url);
            try {
                const resp = await fetch(url);
                // resp 加入到results
                results[i] = resp;
            } catch (err) {
                // err 加入到results
                results[i] = err;
            } finally {
                count++;
                // 判断是否所有的请求都已完成
                if (count === urls.length) {
                    console.log('完成了');
                    resolve(results);
                }
                request();
            }
        }

        // maxNum和urls.length取最小进行调用
        const times = Math.min(maxNum, urls.length);
        for(let i = 0; i < times; i++) {
            console.log(11111)
            request();
        }
    })
}




const urls = [];
for (let i = 1; i <= 20; i++) {
    urls.push(`https://jsonplaceholder.typicode.com/todos/${i}`);
}
concurrencyRequest(urls, 3).then(res => {
    console.log(res);
})
```
```js
在JavaScript中，可以使用一些方法来判断是否存在循环引用。以下是两种常用的方法：

使用"Map"或"Set"来存储已经访问过的对象：

function hasCircularReference(obj) {
  const visited = new Map();

  function checkCircular(obj) {
    if (typeof obj !== 'object' obj === null) {
      return false;
    }

    if (visited.has(obj)) {
      return true;
    }

    visited.set(obj, true);

    for (let key in obj) {
      if (checkCircular(obj[key])) {
        return true;
      }
    }

    return false;
  }

  return checkCircular(obj);
}

const obj1 = {};
const obj2 = { obj1 };
obj1.obj2 = obj2;

console.log(hasCircularReference(obj1));  // true
通过使用"Map"来存储已经访问过的对象，如果在遍历过程中发现当前对象已经存在于"Map"中，则存在循环引用的情况。

使用try-catch语句:

function hasCircularReference(obj) {
  try {
    JSON.stringify(obj);
    return false;
  } catch (e) {
    return true;
  }
}

const obj1 = {};
const obj2 = { obj1 };
obj1.obj2 = obj2;

console.log(hasCircularReference(obj1));  // true
JSON.stringify()方法在序列化对象时，会自动处理循环引用的情况，如果发现循环引用，则会抛出异常。通过使用try-catch语句，我们可以判断是否存在循环引用。

无论使用哪种方法，判断循环引用需要对对象进行遍历，因此对于复杂的对象结构，可能会带来一定的性能开销。因此，要根据实际情况选择合适的方法来判断循环引用。

希望以上的解答能对你有所帮助。如果你有任何其他问题，请随时提问。
```

# tree 扁平化
```js
let tree = [
    {
        "id": 1,
        "name": "1",
        "pid": 0,
        "children": [
            {
                "id": 2,
                "name": "2",
                "pid": 1,
                "children": []
            },
            {
                "id": 3,
                "name": "3",
                "pid": 1,
                "children": [
                   {
                     "id": 4,
                     "name": "4",
                     "pid": 3,
                     "children": []
                   }
                ]
            }
        ]
    }
]
function treeToArray(tree) {
  let res = []
  for (const item of tree) {
    console.log('item', item)
    const { children, ...i } = item
    if (children && children.length) {
      res = res.concat(treeToArray(children))
    }
    res.push(i)
  }
  return res
}
treeToArray(tree)
```