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



