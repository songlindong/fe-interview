# ES6 中的类与 ES5中的类
## constructor
```js
 // ES6中
 class Person {
    constructor(name) {
        this.name = name;
    }

    sayHello() {
        return 'hello, I am ' + this.name;
    }
 }

 var kevin = new Person('Kevin');
 kevin.sayHello(); // hello, I am Kevin
 // ES5
 function Person(name) {
    this.name = name;
 }

 Person.prototype.sayHello = function () {
    return 'hello, I am ' + this.name;
 }

 var kevin = new Person('Kevin');
 kevin.sayHello(); // hello, I am Kevin
 // 注意
 ES6 类的内部所有定义的方法，都是不可枚举的（non-enumerable）
 // 在ES6中：
 Object.keys(Person.prototype); // []
 Object.getOwnPropertyNames(Person.prototype); // ['constructor', 'sayHello']
 // 在ES5中：
 Object.keys(Person.prototype); // ['sayHello']
 Object.getOwnPropertyNames(Person.prototype); // ['constructor', 'sayHello']
```
## 实例属性
```js
 // 在ES6中，以前我们定义实例属性，只能写在类的constructor方法里面
 class Person() {
    constructor() {
        this.state = {
            count: 0
        }
    }
 }
 // 然而现在有一个提案，对实例属性和静态属性都规定了新的写法，而且 Babel 已经支持。现在我们可以写成：
 class Person() {
    state = {
        count: 0
    }
 }
 // ES5 中：
 function Person() {
    this.state = {
        count: 0
    }
 }
```

## 静态方法
* 所有在类中定义的方法，都会被实例继承，如果在一个方法前，加上static关键字，就表示该方法不会被实例继承，而是直接通过类来调用，这就称为静态方法
```js
 // ES6中：
 class Person() {
    static sayHello() {
        return 'hello';
    }
 }

 Person.sayHello() // 'hello'

 var kevin = new Person()
 kevin.sayHello(); // TypeError: kevin.sayHello is not a function
 // ES5 中
 function Person(){}

 Person.sayHello = function() {
    return 'hello'
 };

 Person.sayHello(); // 'hello'

 var kevin = new Person();
 kevin.sayHello; // TypeError: kevin.sayHello is not a function
```

## 静态属性
* 静态属性指的是 Class本身的属性，即 Class.propName, 而不是定义在实例对象（this）上的属性
```js
 // 在ES6中，以前我们添加静态属性只可以这样：
 class Person() {}

 Person.name = 'kevin';
 // 因为上面提到的提案，现在可以写成
 class Person {
    static name = 'kevin'
 }
 // 在ES5中
 function Person() {};

 Person.name = 'kevin';
```
## new
* 注意：类必须使用new调用，否则会报错。普通构造函数不用new也可以执行。
```js
 class Person{}
 Person(); // TypeError: Class constructor Foo cannot be invoked without 'new'
```
## getter 和 setter
* 在ES6中与ES5 一样，在类的内部可以使用get和set关键字，对某个属性设置存值函数和取值函数，拦截该属性的存取行为。
```js
 class Person {
    get name() {
        return 'kevin';
    }
    set name(newName) {
        console.log('new name 为：' + newName)
    }
 }

 let person = new Person();

 person.name = 'daisy';

 console.log(person.name);

 // 在ES5 中：
 function Person(name) {}

 Person.prototype = {
    get name() {
        return 'kevin';
    },

    set name(newName) {
        console.log('new name为：' + newName)
    }
 }

 let person = new Person();

 person.name = 'daish';

 console.log(person.name);
```