## vue有哪些生命周期？以及各个生命周期做了些什么？

生命周期，就是我们在一系列的流程中，在流程中间，插入一下代码片段，让它执行
和webpack 的plugin类似

1. 初始化流程
-beforeCreate
 - 组件的options 都未被创建，el,data,methods, data computed 都还不能用
-created
 - 实例已经完成创建了，watch,event data 初始化都完成了，没有挂载 $el无法获取
-beforeMount
 - 现在数据已经被劫持了，下面是渲染到界面上去了
-Mounted
 -
2. 更新流程
- beforeUpdate
 - 已经是nextTick了

- updated
 - 已经经历了一系列的patch, diff, 调用updated

- beforeDestory
 - 

- destoryed
 - 在一些清理逻辑完成以后，父子关系，watcher(观察者，比较消耗内存)

如果说，你想展示你对源码的理解

## data是一个函数的原因以及如何理解 vue 的模块化？
一起写一段代理。
```js
 const data = {message: 'hello world'}

 const com1 = new Vue({
    el: '#app1',
    data,
 })

 const com2 = new  Vue({
    el: '#app2',
    data,
 })
```

## vue的指令有哪些，如何书写自定义指令?
写一个自定义指令
Vue。允许我们通过全局注册和局部注册两种方式，添加自定义指令
```js
// el 直接要绑定的元素
// binding, 一个对象，包含：
   // name
   // value
   // oldValue
   // arg
   // modifiers

Vue.directive('demo', {
  // 只调用一次，指令第一次绑定元素时调用，主要进行初始化
  bind(el){},
  // 被绑定元素插入父节点的时候调用
  inserted(){},
  // 所在组件的Vnode 更新时调用
  update(){},
  // 所在组件的Vnode 更新后调用
  componentUpdated(){},
  // 只调用一次
  unbind(){}
})
```
v-copy
v-loadmore
v-preload
v-lazyload

v-debounce
v-throttle

v-draggable

更偏向于给元素、组件，做功能增强
而不是去组合、加工、处理元素

## 组件间不同传参方式有何优劣？
有哪些？
a. props / $emit  - 用于父子组件之间通信
   - 优点
    - 简单、常见，props有类型检查
   - 缺点
    - 跨级上的优缺点
b. $ref / $children | $parent - 用于指向性通信
   - 优点
    - 能够拿到父子组件的实例的
   - 缺点
    - 难以维护，你是打破了数据的封装
c. EventBus - 隔代、兄弟等非直接通信
   - $emit, $on
   - 优点
    - 原理简单，多层组件的事件传播
   - 缺点
    - 很难模块化
    - 多人开发，容易造成一些bug
    - $on, $off
d. $attrs / $listener - 隔代等监听型通信
   - 常用对一些原生组件的一些封装
e. provide / inject - 隔代广播等
   - 优点
    - 解决一层层传递问题
   - 缺点
    - 非响应式
f. vuex - 整体状态机
  - 优点
   - 多层组件的事件传播
   - 单项数据流
   - 统一状态管理

平衡熵，一个系统的混乱程度
## 什么是函数式组件，函数式组件注意项？


## vue是如何实现数据驱动双向绑定的？响应式是如何实现的？
写一段源码

## v-model的含义是什么？不同版本有何差异？
Vue2 就是一个语法糖
```html
<input :value="foo" @input="foo = $event.target.value" />

.sync
<el-input :value="foo" @update:value="foo = $event.target.value" />
```

Vue3
为了让v-model更好的针对多个属性进行双向绑定
1. 去掉了sync，原本的功能，由v-model来代替
2. 对自定义组件使用v-model时，value -> modelValue

<input :value="modelValue" @update:modelValue="foo = $event.target.value" />

## vue3 和vue2 Diff对比
Vue3中使用了最长上升子序列
runtime-core/src/renderer.ts 2494行
莱文斯坦最短编辑距离
old 和new的顺序，泛化成数字

## computed 和 watch 有何异同
computed:
 - 缓存，不支持异步，
 - 一般一个属性，可以有其他属性计算而来，可以用
watch：
 - 无缓存，可异步
 - immediate 立即
 - deep 深度监听

## MVVM的含义以及如何实现一个迷你版MVVM框架？


## vue3.0的特性有哪些？如何理解组合式编程？
- Proxy
- composition API
- patchFlag
- openBlock
- monorepo
- typescript
```html
  <div>
    
  </div>
```

## vue-router的核心功能？$route 和 $router 有何区别
$router 路由器，访问整个项目的路由结构
router.beforeEach()
router.afterEach()
router.push()
router.replace()
router.go()
router.back()
router.forward()


$route, 静态的信息
fullpath, hash, meta, query, path, params

## vueX的状态管理流程？如何正确使用状态机
