## 目标
vue2和vue3的diff算法演进过程

## Diff

diff算法的目的：为了找到哪些节点发生了变化，哪些节点没有变化，可以复用

- root
  - fragment1
   - div1
    - p1
  - fragment2
   - div2
    - p2

Vdom tree

diff算法的前提：
1. 同级比较：降低复杂度，降低到O(n)
2. 如果类型不同：销毁当前节点及所有子节点；
3. 如果类型相同：
   1. 使用key来查找，(item, index) in list <p key={index}>{{ item.a }}</p>，比较类型和内容
   2. 如果没有key, 比较我们的类型内容，如果同级中都一致，则复用



Q: 使用index作为key的序号有什么问题？
1. 如果子节点变化（增删改），所有的其他节点，哪怕没有任何内容变化，也会导致重新diff

掌握两个方法
- mount(vNode, parent, [refNode]): vNode生成真实的DOM节点，parent是父级真实的DOM节点，refNode为当前真实的DOM节点
 - refNode不为空：vNode生成的节点会插入到refNode之前；insertBefore
 - refNode为空: 插入到父节点最后的位置
- patch(prevNode, nextNode, parent)：使用diff算法，进行自身的子节点对比

## Vue Diff -- 双端比较

- patch
思路：先判断是否是首次渲染，如果是首次渲染会直接创建节点，createElm, 如果不是，判断新老节点的类型是否一致，如果类型一致，比较子节点，如果节点类型不一致，vNode被改变了，需要替换oldVnode

```js

```


- patchVNode

1. vnode 和 oldVnode指向同一个对象，直接return
2. 将旧的节点的真实的DOM赋值给新的节点，class
   1. 赋值本身维护的DOM关系；
   2. 遍历调用update，将oldVNode上的所有属性，class 、style、domProps,event赋值给新的节点
   3. 如果新老节点上都有文本节点，并且文本内容不一致，更新Vnode.text为新的内容
   4. oldVnode有子节点，vnode没有，删除老的节点
   5. oldVnode没有，vnode有，新建节点
   6. 如果两者都有子节点，updateChildren对比子节点


- updateChildren
1. 在四步里面，如果找到对应相同节点，停止查找
2. 判断新老内容是否有一个遍历完
 



## Vue3 Diff -- 最长递增子序列

a b c d
a b d d e
1. 静态提升：vue3对于不参与更新的元素，创建一次，在渲染时直接复用

2. Diff

3. 事件监听缓存
4. SSR优化


## vue3问题
- Vue3的设计目标是什么？做了哪些优化？

使用composition api 逻辑性更强，


- Vue3.0性能提升主要是通过哪几方面体现的？


- Vue3.0里为什么要用 Proxy API 替代 defineProperty API ？


- Vue3.0 所采用的 Composition Api 与 Vue2.x 使用的 Options Api 有什么不同？


- 说说Vue 3.0中Treeshaking特性？