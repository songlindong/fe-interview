# 前端模块化

1. 如何管理外部模块代码
2. 内部模块管理组织
3. 构建工具 从原始代码 -> 目标代码 编译 依赖图谱

## 模块

拆分与组合

### 全局函数 function

1. 全局环境的命名污染
2. 模块成员间也看不到关系

```js
function f1() {}
function f2() {}
```

### namespace

```js
var myModule = {
    data: 'xianzao.com',
    foo() {
        console.log('foo', this.data)
    },
    bar() {

    }
}
myModule.data = 'zaoxian';
myModule.foo();
console.log(myModule);
```
### IIFE 立即执行函数 匿名函数的自调用

### commonJS

每个模块 作用域

```js
 module.exports = value

 exports.XXXX = value

 require()
```
commonjs的加载机制

browserify commonjs -> TTFE

### AMD async module definition (异步加载)

```js
define(function() {
    return moduleXXX
})

define(['module1', 'module2'], function(m1, m2) {
    return XXXX
})

require(['module1', 'module2'], function(m1, m2) {

})

require.js
```

### CMD common module definition

commonjs + amd = cmd

sea.js

```js
define(function(require, exports, module) {
    var module1 = require('./module1') // 同步的写法
    require('./module2', function(m2) {
        // XXXXX
    }) // 异步的写法
    
    exports.XXX = value;
    module.exports = value;
})
```

```js
 // CMD 
 define(function (require, exports, module) {
    // 依赖就近书写
    var module1 = require('Module1');

    var result1 = module1.exec();

    module.exports = {
        result1: result1,
    }
 })

 // AMD 
 define(['Module1'], function(module1) {
    var result1 = module.exec();
    return {
        result1: result1,
    }
 });
```
### ES module esm

import export 

export default

```js
// lib.js
export let counter =3;
export function incCounter() {
    counter++;
}
// main.js
import { counter, incCounter} from './lib';
console.log(counter); // 3
incCounter();
console.log(counter);// 4
```

babel-preset-2015

### UMD universal module definition(通用模块)

umd = commonjs + amd + cmd










