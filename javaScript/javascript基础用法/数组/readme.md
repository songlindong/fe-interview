# 数组
## 增删查改
### push
push()方法将一个或多个元素添加到数组的末尾，并返回新数组的长度
arr.push(element1, ..., elementN)
- @params: 数组要新增的元素(任意数据类型， 一次可添加多个，用逗号隔开)
- @return: 返回数组新增元素后的长度
- 是否改变原数组：改变

```js
var arr  = [1,2,3];
var res = arr.push(6,7,8);
console.log(res); // 6
console.log(arr); // [1,2,3,6,7,8]
```
### unshift
unshift 方法将一个或多个元素添加到数组的开头，并返回该数组的新长度。此方法更改数组的长度

arr.unshift(element1,...., elementN)

- @params: 数组要新增的元素（任意数据类型，一次可添加多个，用逗号隔开）
- @return: 返回数组新增元素后的长度
- 是否改变原数组：改变
```js
var arr = [1,2,3]
var res = arr.unshift(6,7,8)

console.log(res); // 6
console.log(arr); // [6,7,8,1,2,3]
```

### pop
pop()方法从数组中删除最后一个元素，并返回该元素的值。此方法更改数组的长度。
arr.pop()

- @params: 无
- @return: 返回数组被删除的元素
- 是否改变原数组：改变
```js
var arr = [1,2,3];
var res = arr.pop();

console.log(res); // 3
console.log(arr); // [1, 2]
```

### shift
shift 方法从数组中删除第一个元素，并返回该元素的值。此方法更改数组的长度

arr.shift()
- @params: 无
- @return: 返回数组被删除的元素
- 是否改变原数组：改变
```js
 var arr = [1,2,3];
 var res = arr.shift();

 console.log(res); // 1
 console.log(arr); // [2,3]
```

### splice
splice()方法通过删除或替换现有元素或者原地添加新的元素来修改数组，并以数组形式返回被修改的内容。此方法会改变原数组。
array.splice(start[, deleteCount[,item1[,item2[,]]]])
- @params: 不限参数，n,m,x...第一个参数n是必传（数组的下标，代表从第n个元素起），第二个参数（可选）代表要删除（或被替代，取决于第三个参数是否有值）的元素个数，第三个参数（可选）起，代表要添加（或替代）的元素
- @return: 返回值是一个数组，里面是删除项
- 是否改变原数组：改变
```js
// 只有一个参数
// splice(index) -> 从index的位置开始，删除之后的所有元素(包括第index个) 若index < 0,则删除最后-index个元素
 let arr = [0,1,2,3,4,5,6];
 console.log(arr); // [0,1,2,3,4,5,6]
 let arrBack = arr.splice(2);
 console.log(arr); // [0,1]
 console.log(arrBack); // [2,3,4,,5,6]

 let array = [0,1,2,3,4,5,6];
 console.log(array);
 let arrBack = array.splice(-3);
 console.log(array); // [0,1,2,3]
 console.log(arrBack); // [4,5,6]

// 两个参数
// splice(index, howmany) -> 删除从index位置开始的数，howmany为删除的个数若howmany小于等于0，则不删除
let array = [0,1,2,3,4,5,6];
console.log(array);
let arrBack = array.splice(2, 1);
console.log(array); // [0,1,3,4,5,6]
console.log(arrBack); // [2]

let array = [0,1,2,3,4,5,6];
let arrBack = array.splice(2, 0);
console.log(array); // [0,1,2,3,4,5,6]
console.log(arrBack); // []

// 大于等于三个参数
//splice(index, howmany, item1,....,itemX)
// 1. index > 0时，howmany 为0时不删除只添加--在index位置前添加item1,...,itemX的数；howmany >0 删除且添加--删除从index位置开始的数，howmany为删除的个数，并且在index位置前添加item1, ..., itemX的数
// 2. index < 0时最后一个数为-1依次倒数第二个数为-2，howmany为0时不删除只添加--在-index位置前添加item1，...,itemX的数；howmany > 0删除且添加--删除从-index位置开始的数，howmany为删除的个数，并且在-index位置前(相当于往后-2前是-1)添加item1,...,itemX的数
let array = [0,1,2,3,4,5,6];
let arrBack = array.splice(-2,0,8,9);
console.log(array); // [0,1,2,3,4,8,9,5,6];
console.log(arrBack);// []

let array = [0,1,2,3,4,5,6];
let arrBack = array.splice(-2, 3, 8, 9);
console.log(array); // [0,1,2,3,4,8,9]
console.log(arrBack); // [5, 6];

let array = [0,1,2,3,4,5,6,7];
let arrBack = array.splice(5,3,8,9);
console.log(array); // [0,1,2,3,4,8,9]
console.log(arrBack); // [5,6,7]

let array = [0,1,2,3,4,5,6];
let arrBack = array.splice(2,0,8,9);
console.log(array); // [0,1,8,9,2,3,4,5,6];
console.log(arrBack); // []
```

## 截取拼接
### slice
slice() 方法返回一个新的数组对象，这一对象是一个由begin和end决定的原数组的浅拷贝，原始数组不会被改变

arr.slice(begin, end)
- 注意：复制的数组包含start下标元素，不包含end下标元素
- @params: 起始下标start与结束下标end，起始start必传，end不传默认复制到数组结束位置，可使用负值从数组的尾部选取元素
- @return: 返回复制的子数组
- 是否改变原数组：不改变

```js
 var arr = [1,2,3,6,7,8];
 var res = arr.slice(1, 4);

 console.log(res); // [2,3,6]
 console.log(arr); // [1,2,3,6,7,8]

 let arr1 = [
    {
        name: 'Chen'
    },
    'see a film',
    'write the code',
    'play basketball',
    'tourism'
 ];
 let arr2 = arr1.slice();
 arr2[0].name = 'Forever';
 arr2[1] = 'play games';

 console.log(arr1)
 console.log(arr2)
```

### concat
- concat() 方法用于合并两个或多个数组。此方法不会更改现有数组，而是返回一个新数组
- var new_array = old_array.concat(value1[, value2[[]]])
- @params: 多个任意项，可以是数组，可以是单个项
- params: 多个任一项，可以是数组，可以是单个项
- @return: 返回合并后的新数组
- 是否改变原数组：不改变

```js
var arr = [1,2,3];
var res = arr.concat(1, [0,0]);

console.log(res); // [1,2,3,1,0,0]
console.log(arr); // [1,2,3]
```

## 查找判断
 ### includes
 - includes() 方法用来判断一个数组是否包含一个指定的值，根据情况，如果包含则返回true, 否则返回false
arr.includes(valueToFind[, fromIndex])

- @params：参数一必传，表示要查询的元素，参数二可选，表示从指定位置查起(若为负数，从后查起，负数超过数组长度，则置为0)
- @return：返回布尔值
- 是否改变原数组：不改变

```js
 var arr = [1,2,3]
 var res = arr.includes(2)

 console.log(res); // true
 console.log(arr); // [1,2,3]
```

### find
- find() 方法返回数组中满足提供的测试函数的第一个元素的值，否则返回undefined, arr.find(function(item, index, array){}, thisArg)

- @params: 函数，thisAr表示执行回调时this指向的对象
- @return：第一个满足条件的元素或undefined
- 是否改变原数组：不改变

```js
const array = [5, 12, 8, 130, 44];
const found = array.find(element => element > 10);

console.log(found); // 12
console.log(array); // [5, 12, 8, 130, 44]
```

### findIndex

- findIndex() 方法返回数组中满足提供的测试函数的第一个元素的索引，若没有找到对应元素则返回-1

- arr.findIndex(callback[, thisArg])

- @params: 函数，thisArg表示执行回调时this指向的对象
- @return: 第一个满足条件的索引或-1
- 是否改变原数组：不改变

```js
 const array = [5,12,8,130,44];
 const found = array.findIndex(element => element > 10);
 
 console.log(found); // 1
 console.log(array); // [5,12,8,130,44]
```

### indexOf

- indexOf() 方法返回在数组中可以找到一个给定元素的第一个索引，如果不存在，则返回-1
arr.indexOf(searchElement[, fromIndex])

- @params: 参数一必传，表述要查询的元素，参数二可选，表示从指定位置查起
- @return：如若检索项存在，返回期下标，没有就返回-1；
- 是否改变原数组：不改变

```js
var arr = [1, 2, 3];

console.log(arr.indexOf(2)); // 1
console.log(arr.indexOf(8)); // -1
```

### lastIndexOf
- lastIndexOf() 方法返回指定元素(也即有效的JavaScript值或变量)在数组中的最后一个的索引，如果不存在则返回-1。从数组的后面向前查找，从fromIndex处开始。
- arr.lastIndexOf(searchElement[, fromIndex])

- @params: 参数一必传，表示要查询的元素，参数二可选，表示从指定位置查起
- @return: 如若检索项存在，返回其下标，没有就返回-1
- 是否改变原数组：不改变

```js
var arr = [1,2,3,2,2,3,4];

console.log(arr.lastIndexOf(3)); // 5
```

## 数组排序

### sort
- sort() 方法用原地算法对数组的元素进行排序，并返回数组。排序不一定是稳定的。默认排序顺序是根据字符串Unicode码点

arr.sort([compareFunction])

- @params: 函数
- @return: 排序后的数组
- 是否改变原数组：改变

```js
var arr = [1,3,9,2,5,3,7,4,5];

var res1 = arr.sort((a, b) => a - b);
console.log(res1); // [1, 2, 3, 3, 4, 5, 5, 7, 9]

var res2 = arr.sort((a, b) => b - a);
console.log(res2);

console.log(arr);  // [9, 7, 5, 5, 4, 3, 3, 2, 1]
```

### reverse
reverse() 方法将数组中的元素的位置颠倒，并返回该数组。数组的第一个元素会变成最后一个，数组的最后一个元素变成第一个。该方法会改变原数组
 arr.reverse()

- @params: 无
- @return: 倒转排序后的数组
- 是否改变原数组：改变

```js
var arr = [1, 2, 3, 3, 4, 5, 5, 7, 9];
console.log(arr.reverse()) // [9, 7, 5, 5, 4, 3, 3, 2, 1]

console.log(arr) // [9, 7, 5, 5, 4, 3, 3, 2, 1]
```

## 转字符串

### join

- join() 方法将一个数组（或一个类数组对象）的所有元素连接成一个字符串并返回这个字符串。如果数组只有一个项目，那么将返回该项目而不使用分隔符。

arr.join([separator])

- @params: 指定的分割符
- @return：转换后的字符串
- 是否改变原数组：不改变

```js
 var arr = [1,2,3,3,4,5,5,7,9];
console.log(arr.join('-')); // "1-2-3-3-4-5-5-7-9"
console.log(arr); // [1,2,3,3,4,5,5,7,9]
```

### toString

- toString() 返回一个字符串，表示指定的数组及其元素
arr.toString()

- @params: 无
- @return: 转换后的字符串
- 是否改变原数组：不改变

```js
 var arr = [1, 2, 3, 3, 4, 5, 5, 7, 9];
 console.log(arr.toString()); // '1,2,3,3,4,5,5,7,9'
console.log(arr) // [1, 2, 3, 3, 4, 5, 5, 7, 9]
```

## 遍历映射

### for
- for循环性能最佳，内部可以阻塞

```js
 // 长度一般尽量先用赋值于变量，提升性能
  for (let i =0; i < len; i++) {
    continue; // 打断档次循环，进入下次循环
    break; // 直接打断循环，跳出循环
  }
```

### forEach

- forEach() 方法对数组的每个元素执行一次给定的函数。arr.forEach(callback(currentValue[, index[, array]]))[, thisArg]

- @params: 函数
- @return: 无/undefined
- 是否改变原数组：改变
- 注意：除了抛出异常以外，没有办法中止或跳出forEach()循环，即break、continue、async/await都无效

```js
 const array1 = ['a','b','c'];
 array1.forEach(element => console.log(element));
```

### map
- map() 方法创建一个新数组，其结果是该数组中的每个元素是调用一次提供的函数后的返回值
var newArray arr.map(callback(element[, index[, array]]))[, thisArg]

- @params: 函数
- @return: 新的数组
- 是否改变原数组：不改变
```js
const array1 = [1,4,9,16];
const map1 = array1.map(x => x * 2);

console.log(map1); // [2,8,18,32]
```

### filter
- filter() 方法创建一个新数组，其包含通过所提供函数实现的测试的所有的元素。
var newArray = arr.filter(callback(currentValue[, index[, array]]))[, thisArg]

- @params: 函数
- @return: 满足条件的元素组成的新数组
```js
let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let res = nums.filter(num => num > 5);
console.log(res); // [6,7,8,9,10];
```

### every
- every()方法测试一个数组内的所有元素是否都能通过某个指定函数的测试。它返回一个布尔值
arr.every(callback(currentValue[, index[, array]]))[, thisArg]

```js
 let arr = [1,2,3,4,5];
 console.log(arr.every((item, index, array) => item > 3)) // false
```

### some
- some() 测试一个数组内的是不是至少有一个元素是否都能通过某个指定函数的测试。它返回一个布尔值
arr.some(callback(currentValue[, index[, array]]))[, thisArg]
- @params: 函数
- @return: Boolean
- 是否改变原数组：不改变

```js
let arr = [1,2,3,4,5]
console.log(arr.some((item, index, array) => item > 3)) // true
```

### reduce
- reduce() 方法对数组中的每个元素执行一个由您提供的reducer函数(升序执行)，将其结果汇总为单个返回值
arr.reduce(callback(accumulator, currentValue[, index[, array]])[, initiaValue])

- @params: 函数
- @return: 函数累计处理的结果
- 是否改变原数组：不改变

```js
 // 1. 数组求和
 
 let sum = [0,1,2,3].reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
 }, 0);

 console.log(sum);

 // 2. 数组去重
 let arr = ['a', 'b', 'a', 'b', 'c', 'e', 'e', 'c', 'd', 'd'];
 let newArr = arr.reduce((acc, current) => {
  if (acc.indexOf(current) === -1) {
    acc.push(current);
  }
  return acc;
 }, [])
 
 console.log(newArr); // ["a", "b", "c", "e", "d"]

 // 3.数组扁平化
 let flat = [[1, 2, 3], [4, 5, 6], [7, 8, 9]].reduce((prev, cur) => {
  return [...prev, ...cur];
 })

 console.log(flat); // [1, 2, 3, 4, 5, 6, 7, 8]
```

### reduceRight

- reduceRight() 方法接受一个函数作为累加器(accumulator)和数组的每个值(从右到左)将其减少为单个值

- arr.reduceRight(callback(accumulator, currentValue[, index[, array]])[, initialValue])
- @params: 函数
- @return: 函数累计处理的结果
- 是否改变原数组：不改变

```js
 const array1 = [[0,1], [2,3], [4,5]].reduceRight((acc, cur) => acc.concat(currentValue));

 console.log(array1); // [4,5,2,3,0,1]
```

## 获取键值

### entries
- entries() 方法返回一个新的Array Interator对象，该对象包含数组中每个索引的键/值对
arr.entries()

```js
const array = ['a','b','c'];
const iterator = array.entries(); // 返回一个迭代器对象
console.log(iterator.next().value); // [0, 'a']
console.log(iterator.next().value); // [1, 'b']
console.log(iterator.next().value); // [2, 'c']
```

### keys
- keys() 方法返回一个包含数组中的每个索引键饿Array Iterator 对象
arr.keys()
```js
const array1 = ['a','b','c'];
const iterator = array1.keys(); // 返回一个迭代器对象

for (const key of iterator) {
  console.log(key); // 0, 1, 2
}
```

### values
- values() 方法返回一个新的Array Iterator 对象，该对象包含数组每个索引的值
 arr.values()

```js
const array1 = ['a', 'b', 'c'];
const iterator = array1.values(); // 返回一个迭代器对象
for (const value of iterator) {
  console.log(value); // 'a', 'b', 'c'
}
```

## 其他方法

## fill
- fill() 方法用一个固定值填充一个数组中从起始索引到终止索引内的全部元素。不包括终止索引。
arr.fill(value[, start[, end]])

- @params: 固定值，起始索引，终止索引
- @return: 指定位置被填充为固定值的原数组
- 是否改变原数组：改变

```js
let arr = [1,2,3,4]
arr.fill(0) // [0,0,0,0]

// 多用于创建指定长度的空数组填充
let arr1 = new Array(3)
arr1.fill(1) // [1,1,1]
```
- 注意：若固定值为引用类型，则被填充的元素都会指向同个指针地址

## flat
- flat() 方法会按照一个可指定的深度递归遍历数组，并将所有元素与遍历到的子数组中的元素合并为一个新数组返回。不改变原数组。
var newArray = arr.flat([depth])

```js
 // 扁平化数组
 let arr1 = [1, 2, [3,4]];
 newArr1 = arr1.flat();
 console.log(arr1, newArr1); // [1, 2, Array(2)] [1, 2, 3, 4]

 let arr2 = [1, 2, [3, 4, [5, 6]]];
 newArr2 = arr2.flat(2);
 console.log(newArr2); // [1, 2, 3, 4, 5, 6]

 // 使用Infinity, 可展开任意深度的嵌套数组
 let arr3  = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
 newArr3 = arr3.flat(Infinity);
 console.log(newArr3); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

 // 去除空项
 let arr4 = [1, 2, , 4, 5];
 newArr4 = arr4.flat();
 console.log(newArr4); // [1, 2, 4, 5]
```

### flatMap
- flatMap() 方法首先使用映射函数映射每个元素，然后将结果压缩成一个新数组。它与map连着深度值为1的flat几乎相同，但flatMap通常在合并成一种方法的效率稍微高一些。不改变原数组。

var new_array = arr.flatMap(function callback(currentValue[, index[, array]]) {
  // return element for new_array
}[. thisArg]

- @params: 函数，函数运行时this指向的对象
- @return: 一个新的数组，其中每个元素都是回调函数的结果，并且结构深度depth值为1
- 是否改变原数组：不改变

```js
let arr = ["it's Sunny in", "", "California"];
console.log(arr.map(x => x.split(" "))); // [["it's","Sunny","in"],[""],["California"]]
console.log(arr.flatMap(x => x.split(" "))); // ["it's","Sunny","in", "", "California"]
console.log(arr); // ["it's Sunny in", "", "California"]
```

### copyWithin

- copyWithin() 方法浅复制数组的一部分到同一数组中的另一个位置，并返回它，不会改变原数组的长度

arr.copyWithin(target[, start[, end]])
- @params: target, 为基底的索引，复制序列到该位置， start复制的起始索引，end复制的末尾索引(不包含)， start默认0，end默认到最后一个
- @return: 改变后的数组，长度不变
- 是否改变原数组：改变

```js
 const array = ['a', 'b', 'c', 'd', 'e'];
 console.log(array.copyWithin(0, 3, 4));  // ["d", "b", "c", "d", "e"]
console.log(array.copyWithin(1, 3));  // ["d", "d", "e", "d", "e"]
console.log(array) // ["d", "d", "e", "d", "e"]
```