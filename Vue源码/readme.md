# Vue 2/3
## 我们为什么要学习源码
- 你在书写代码的时候，心中有数
- 特殊的边界 case，能够快速判断；
- 通过学习源码，搞清楚一些知识体系

## 什么是响应式系统
一起想一下，不管是react还是vue，我最终要做的事情
- 渲染和交互
 - 渲染：mount
 - 交互：update

不考虑 forceUpdate 啥的，我最后是不是通过一些交互，触发界面更新
- click
- input

1. setState, useState -> dispatch, this.XXX = 'newVal'
2. 不管是哪一种，我都执行了一段js, 而这段js，
3. 触发了一个render函数，
4. 这个函数使界面更新了

```vue
<template>
  <div>{{ msg }}</div>
</template>

<script>
  onClick() {
    this.msg = 'XXX'
  }
</script>
```

```js
// 对于一个典型的{{ msg }} 的例子来说，我实际上还是要干这件事
 function render() {
    node.textContent = newVal; // 'XXX'
 }
```

我们现在的问题，是不是就变成了
- 我如何改变一个值，让这个render执行
