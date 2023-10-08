var obj1 = { x: 100 }
var obj2 = obj1
obj1.y = obj1 = { x: 200 }
console.log(obj1.y)
console.log(obj2)

/**
 * 01 浏览器平台下的 JS 执行肯定需要一个环境（执行环境栈）
 * 02 代码从上向下去执行，不同区域的代码之间肯定要隔离的（执行上下文）
 * 03 代码在执行的时候就是不停的进栈出栈
 * 04 在每一个执行上下文里
 */

