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