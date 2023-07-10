### 作用域 + 上下文
#### 作用域链 - 儿子能用爸爸的东西
* 面试题：
```js
    let a = 'global';
    console.log(a)

     function cource() {
        let b = 'zhaowa';
        console.log(b);

        session();
        function session() {
            let c = 'this';
            console.log(c);

            // 2. 函数提升 - 提升至当前作用域最初始
            teacher();
            function teacher() {
                let d = 'yy';
                console.log(d);

                console.log('test', b); // 1. 作用域向上查找
            }
        }
     }
     cource();
     // 3. 提升的优先级 - 函数 pk 变量(优先)
     console.log('zhaowa', zhaowa);

     function zhaowa() {
        this.cource = 'this';
     }

     zhaowa = 'zhaowa'

     // 4. 块级作用域
     if(true) {
        let e = 111;
        var f = 222;
     }
     console.log('e', e)
     console.log('f', f)
```
* 1. 对于作用域链，我们直接通过创建态来定位作用域链
* 2. 手动取消全局，使用块级作用域

### this 上下文 context
* 我家门前有条河，门前的河上有座桥，河里有群鸭；
* 我家门前有条河，这河上有座桥，这河里有群鸭；

* this是在执行时动态读取上下文决定的，而不是创建时

考察重点 - 各使用态中的指针指向
#### 函数直接调用 - this指向的是window => 函数表达式、匿名函数、嵌套函数
```js
   function foo() {
    console.log('函数内部的this' + this);
   }

   foo()
```

#### 隐式绑定 - this指向的是调用的上一级 => 对象、数组等引用关系逻辑之上
```js
   function fn() {
    console.log('隐式绑定'，this.a);
   }

   const obj = {
     a: 1;
     fn
   }
   obj.fn = fn;
   obj.fn();
```
#### 面试题：
```js
   const foo = {
     bar: 100,
     fn: function() {
        console.log(this.bar);
        console.log(this);
     }
   }
   // 取出
   let fn1 = foo.fn;
   // 执行
   fn1();

   // 追问1：如何改变属性的指向
   const o1 = {
    text: 'o1',
    fn: function() {
       // 直接使用上下文 - 领导直接分活
        console.log('o1fn_this', this);
        return  this.text;
    }
   }

   const o2 = {
    text: 'o2',
    fn: function() {
        return o1.fn();
    }
   }

   const o3 = {
    text: 'o3',
    fn: function() {
        let fn = o1.fn;
        return fn();
    }
   }

   console.log('o1fn', o1.fn());
   console.log('o2fn', o2.fn());
   console.log('o3fn', o3.fn());
```
* 1. 在执行函数时，函数被上一级调用，去找发起方
* 2. 直接变成公共执行时，指向全局

#### 追问2：就是要把console.log('o2fn'，o2.fn())结果是o2
```js
   // 1. 人为干涉，改变this - bind / call / apply
   o2.fn.call(o2)
   // 2. 不许人为干涉
   const o1 = {
    text: 'o1',
    fn: function() {
       // 直接使用上下文 - 领导直接分活
        console.log('o1fn_this', this);
        return  this.text;
    }
   }

   const o2 = {
    text: 'o2',
    fn: o1.fn
   }
   console.log('o2fn', o2.fn())
```
#### 显式绑定（bind | apply | call）
```js
function foo() {
   console.log('函数内部的this', this)
}
foo();

// 使用
foo.call({
   a: 1
});

foo.apply({
   a: 1
});

const bindFoo = foo.bind({
   a: 1
})
bindFoo();
```
#### 追问：call、apply、bind的区别
* 1. call <=> apply 传参不同 依次传入/数组传入
* 2. bind <=> call/apply 直接返回

#### 追问2：bind原理 / 手写bind
* 原理或者手写类题目，解题思路
* 1. 说明原理 - 写注释
* 2. 根据注释 - 补齐代码
```js
   // 1. 需求：手写bind => bind存放位置（挂载）=> Function.prototype
   // 2. bind是什么？=> 改变运行上下文 => 传入参数：newThis + args1~argsn
   // 3. bind要什么？=> 返回一个可执行函数 => 上下文被改变了的原函数(原函数参数不变)
   Function.prototype.newBind = function() {
      const _this = this
      const args = Array.prototype.slice.call(arguments);
      const newThis = args.shift();

      return function() {
         return _this.apply(newThis, args)
      }
   }

   Function.prototype.newApply = function(context) {
      // 边缘检测
      if(typeof this !== 'function') {
         throw new Error('type error');
      }

      // 参数检测
      context = context || window;

      // 临时挂载
      context.fn = this;

      // 区分传参 + 立即执行
      let result = arguments[1]
      ? context.fn(...arguments[1])
      : context.fn();

      // 销毁临时挂载
      delete context.fn;
      return result;
   }
```

#### new - this指向是new之后得到的实例
```js
  class Course {
   constructor(name) {
      this.name = name;
      console.log('构造函数中的this:', this);
   }

   test() {
      console.log('类方法中的this', this);
   }
  }

  const course = new Course('this');
  course.test();
```
#### 追问：类中异步方法，this有区别吗？
```js
  class Course {
   constructor(name) {
      this.name = name;
      console.log('构造函数中的this:', this);
   }

   test() {
      console.log('类方法中的this', this);
   }

   asyncTest() {
      console.log('异步方法外：'，this);
      setTimeout(function() {
         console.log('异步方法内'，this);
      })
   }
  }

  const course = new Course('this');
  course.test();
  course.asyncTest();
```
* 1. 执行setTimeout时，匿名方式执行上下文，在队列中和全局执行函数效果相同
* 2. 如何解决 - 记录this / 显式 / 箭头函数

### 聊完作用域、上下文 => 如何突破束缚
#### 闭包：一个函数和他周围状态的引用捆绑在一起的组合

#### 函数作为返回值的场景
```js
   function mail() {
      let content = '信';
      return function() {
         console.log(content);
      }      
   }
   const envelop = mail();
   envelop();
```
* 函数可以作为返回值传递的
* 函数外部可以通过一定方式获取到内部局部作用域的变量 => 导致内部局部变量不能被GC

#### 函数作为参数的时候
```js
   // 单一职责
   let content;
   
   function envelop(fn) {
      content = 1;

      fn();
   }
   
   function mail() {
      console.log(content);
   }

   envelop(mail);
```

#### 函数嵌套
```js
   let counter = 0;

   function outerFn() {
      function innerFn() {
         counter++;
         console.log(counter);
      }
      return innerFn;
   }

   outerFn()();
```

#### 事件处理（异步）的闭包
```js
   let lis = document.getElementsByTagName('li');

   for(var i = 0; i<lis.length; i++) {
      (function(i) {
         lis[i].onclick = function() {
            console.log(i)
         }
      })(i);
   }
```
#### 追问：立即执行函数 - 立即执行嵌套 => 拥有独立作用域
```js
   (function immediateA(a) {
      return (function immediateB(b) {
        console.log(a)
        console.log(b)
      })(1)
   })(0)
```
* 推动了js的模块化发展

#### 实现私有变量 - 高频
```js
   function createStack() {
      return {
         items: [],
         push(item) {
            this.items.push(item);
         }
      }
   }

   const stack = {
      items: [],
      push: function() {}
   }

   function createStack() {
      const items = [];

      return {
         push(item) {
            items.push(item);
         }
         getItems() {},
         setItems() {},
      }
   }
```