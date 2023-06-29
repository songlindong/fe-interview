# JS 高级用法 1/2

## 1. 前端原型&原型链
```js
  function Person() {

  }

  const person = new Person();
  person.name = 'xianzao';
  console.log(person.name);
```

```js
  function Person() {}

  Person.prototype.name = 'xianzao';

  const person1 = new Person();
  const person2 = new Person();

  console.log(person1.name, person2.name);

  
```
Person的prototype属性指向的是一个对象 person1 person2 new Person()创建的实例的原型

__proto__ 除了null

```js
 function Person() {}

 const person = new Person();
 
 Person.prototype.name = 'zhansan';
 person.name = 'lisi'
 console.log(person.__proto__, Person.prototype)
```
```js
function Person() {}

console.log(Person, Person.prototype.constructor)
```
```js
function Person() {}

const person  = new Person()
console.log(person.__proto__ === Person.prototype);
console.log(Person.prototype.constructor === Person);
console.log(Object.getPrototypeOf(person) === Person.prototype)
console.log(Object.getPrototypeOf(person) === person.__proto__)
```
```js
  function Person() {}
  Person.prototype.name = 'xianzao';
  const person = new Person();

  person.name = 'zaoxian';
  console.log(person.name);
  
  delete person.name;

  console.log(person.name);

  console.log(Object.prototype.name);
```

在实例上找属性找不到，在原型上找 person.__proto__  Person.prototype

```js
 const obj = new Object();

 obj.name = 'xianzao';

 console.log(obj.name);
```
```js
console.log(Object.prototype.__proto__)
```
```js
function Fn(name) {
  this.name = name;
  this.age = 18;
}
Fn.type = 'tried';
Fn.prototype.sex = 'man';
const xh = new Fn('xiaohong');
```

```js
function Person() {}

const person = new Person();

console.log(person.constructor === Person);
```

## 2. 作用域

定义变量的区域

JS是什么作用域？ 静态作用域

- 静态作用域 (词法作用域)：函数的作用域在函数定义时确定的
- 动态作用域 ：函数在调用时确定的

```js
var value = 1

function foo() {
  console.log(value);
}

function bar() {
  var value =2;
  foo()
}

bar();
```
```js
// case1
var scope = 'gloval scope';
function checkscope() {
   var scope = 'local scope';
   function f() {
    return scope;
   }
   return f();
}
checkscope();

// case 2
var scope = 'gloval scope';
function checkscope() {
   var scope = 'local scope';
   function f() {
    return scope;
   }
   return f();
}
checkscope()();
```
## 执行上下文

```js
var foo = function() {
  console.log('foo1');
}

foo()

var foo = function() {
  console.log('foo2');
}

foo()
```
```js
function foo() {
  console.log('foo1');
}

foo()
function foo() {
  console.log('foo2');
}
function foo() {
  console.log('foo3');
}

foo()
```
```js
console.log(add2(1, 1))
function add2(a, b) {
  return a + b
}

console.log(add1(1, 1))
var add1 = function(a, b) {
  return a + b
}
```

###  可执行代码

executable code 

1. 全局代码
2. 函数代码
3. eval

### 执行上下文栈

execution context stack ECS

FILO 

```js
function fun3() {
  console.log('fun3');
}

function fun2() {
  fun3();
}

function fun1() {
  fun2;
}

fun1;
ECStack = [
  <fun1>functionContext
  globalContext
]
```

```js
// case1
var scope = 'gloval scope';
function checkscope() {
   var scope = 'local scope';
   function f() {
    return scope;
   }
   return f();
}
checkscope();

// case 2
var scope = 'gloval scope';
function checkscope() {
   var scope = 'local scope';
   function f() {
    return scope;
   }
   return f();
}
checkscope()();
```
### 变量对象

executable code -> execution context 

执行上下文的三个核心属性

1. 变量对象 variable object VO
2. 作用域链 scope chain
3. this

变量对象：上下文中 定义的 变量和函数的声明
global function

#### 全局上下文

this -> 全局对象
this window

JS 全局上下文的VO -> 全局对象

#### 函数上下文

activiation object AO 活动对象 === 变量对象

#### 执行代码

1. 进入执行上下文
2. 代码执行 执行

```js
function foo() {
  console.log(arguments)
  var b = 2;
  function c() {};
  var d = function() {};

  b = 3;
}

foo();
```
```js
AO = {
  arguments: {
    0：1，
    length: 1
  },
  a: 1,
  b: undefined,
  c: reference function c() {},
  d: undefined,
}
```
```js
AO = {
  arguments: {
    0: 1,
    length: 1,
  },
  a: 1,
  b: 3,
  c: reference function c() {},
  d: reference to function expression d,
}
```
```js
function foo() {
  console.log(a);
  a = 1;
}

foo()

AO = {
  argument: {
    length: 0
  }
}

function bar() {
  a = 1;
  console.log(a);
}
bar();
```

### 作用域链

找VO，先在当前上下文找，找父级的上下文的VO，直到找到全局变量 this window, 沿着上下文找VO 作用域链

[[scope]] 

````js
function foo() {
  function bar() {}
}

foo.[[scope]] = [
  globalContext.VO
]

bar.[[scope]] = [
  fooContext.AO
  globalContext.VO
]

Scope = [barContext.AO].concat[[[scope]]]
```
