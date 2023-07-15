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