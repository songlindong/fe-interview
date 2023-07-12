# js的垃圾回收和内存泄漏

## 垃圾回收

garbage collection

引擎 V8
C C++ 手动清除

```js
 let test = {
    name: 'xianzao'
 },
 test = {1,2,3,4,5}
```

栈     堆
test   {name: 'xianzao'}

test   [1,2,3,4,5]

可达性

定期找到无用的内存， 然后释放

### 标记清除

mark-sweep

binary tag 0 -> 1

list1: 进入环境的变量
list2: 退出环境的变量

1. 遍历内存中的所有的对象加tag，初始化，默认都是0
2. 0 -> 1
3. 销毁为0的垃圾
4. 重置为0，等待下一次GC


1. first-fit: 在找到第一个符合大小空间的内存就直接加上新的变量
2. best-fit: 先进行遍历，找到满足的空间内存中，最小size的空间
3. worst-fit: 先进行空余的，找到最大的，然后拆分出符合当前大小的返回

缺点
1. 内存碎片化

mark-compact 标记整理

1. 遍历内存中的所有的对象加tag，初始化，默认都是0
2. 0 -> 1
3. 将1移动向一边，清理0
4. 销毁为0的垃圾
5. 重置为0，等待下一次GC

### 引用计数

Reference counting

如何判断要被清除？ 为0引用

1. 定义变量a 引用为1
2. 变量a赋值给b a引用2
3. 变量c赋值给b a引用1
4. 引用值为0

```js
 let a = new Object() // 对象的引用：1
 let b = a // 对象的引用2
 a = null
 b = null // 对象无引用，GC
```
```js
function test() {
   let A = new Object()
   let B = new Object()

   A.b = B
   B.a = A
}

test()
```
缺点
1. 无法解决循环引用
2. 计数器也是要占用内存的

## V8 对GC的优化

针对内存中存放的对象类型

新生代：小的、新的、存活时间短
老生代：大的、老的、存活时间长

新生代：Cheney

1. 当对象多次复制后依然存在 -> 老生代
2. 空闲区大小超过25% -> 老生代

老生代：sweep-compact

### 并行回收

stop-the-world 全停顿

垃圾回收超过60ms

webpack parallel uglify plugin

## 内存泄漏

```js
function fn1() {
   let test = new Array(1000).fill('xianzao')
   return function() {
      console.log('zaoxian')
   }
}
let fn1Child = fn1()
fn1Child()
```

```js
function fn2() {
   let test = new Array(1000).fill('xianzao')
   return function() {
      console.log(test)
      return test
   }
}
let fn2Child = fn2()
fn2Child()
fn2Child = null
```
全局变量

```js
 function fn() {
   // 没有声明从而制造了隐式全局变量test1
   test1 = new Array(1000).fill('xianzao')

   // 函数内部this指向window,制造了隐式全局变量test2
   this.test2 = new Array(1000).fill('xianzao')

   this.test2 = null
 }
 fn()

 test1 = null;
```
- 清除不用的DOM
```html
  <div id="root">
     <ul id="ul">
        <li></li>
        <li></li>
        <li id="li3"></li>
        <li></li>
     </ul>
  </div>
  <script>
    let root = document.querySelector('#root')
    let ul = document.querySelector('#ul')
    let li3 = document.querySelector('#li3')
    
    console.log(root);
    // 由于ul变量存在，整个ul及其子元素都不能GC
    root.removeChild(ul);

    // 虽置空了ul变量，但由于li3变量引用ul的子节点
    ul = null;

    // 已无变量引用, 此时可以GC
    li3 = null;

  </script>
```
定时器清空
```js
  // 获取数据
  let someResource = getData()
  const interValId = setInterval(() =>{
   const node = document.getElementById('Node')
    if(node) {
      node.innerHTML = JSON.stringfy(someResource)
    }

  }, 1000)

  clearInterval(interValId)
```
```html
 <template>
    <div></div>
 </template>
 <script>
   export defalut {
      created() {
         window.addEventListener('resize', this.doSomething)
      },
      beforeDestroy() {
         window.removeEventListener('resize', this.doSomething)
      },
      methods: {
         doSomething() {

         }
      }
   }
 </script>
```
```js
console也会导致内存泄漏
```