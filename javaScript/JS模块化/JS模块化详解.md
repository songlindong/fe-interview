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










