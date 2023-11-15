####  Vue水平
费曼技巧
尝试用一个你熟悉的领域，去解释一个你正在熟悉的领域

#### 框架
框架永远是"器"，解决问题的方法是"术"，学习知识体系"道"，**以道取术**

## Vue & React
- Vue 是怎么更新组件的？
 - data.x -> 修改
  - set 函数 notify
  - get 函数 watcher
  -> data.x -> 1->2
  - value -> 2
- React 更新
 - 从根节点遍历一遍
  - 缓存，Current x=1
  - JSX 上体现出来了 x=2
  - WIP: x=2
  - 一起更新到界面上

```jsx
<div>
    <div>{{x*2}}</div>
    <div>{{x}}</div>
</div>
```
### react 是immutable, vue是mutable
immutable：不可变
mutable: 可变

```js
const x = {a: 2};
const y = x;
y.a = 3

newX -> {a: 3}
```

### react 是运行时框架，vue半编译框架
- 为什么说react 比 vue 牛逼
```js
 // api
 getDate('string', 'key');
 getData('string.key');
 getData().string.key
 getData('string').key
```
你的 api 是不是变得更灵活了，你的getData的实现，是不是更复杂了

```js
// vue
// 浏览器是不认识的，编译，读字符串，输出
<div v-for="item of list">
   <div>{{item}}</div>
</div>

// react
<div>
    {list.map(item => <div>{item}</div>)}
</div>

<div>
    {(function() {
        let res = [];
        list.forEach(item => res.push(<div>{item}</div>));
        return res.join('');
    })()}
</div>

function getDataByList(list) {
    return list.map(item => <div>{item}</div>)
}

<div>
    {getDataByList(list)}
</div>
```

### react 如何更新

hook: useState
class: setState | forceUpdate

体感

## react 初体验
create-react-app

### 事件与状态

#### 状态
在react中，你要修改一个数据，去触发界面更新，必须把这个数据，设置为可控状态

#### 事件
```js

```

##### why hooks
1. 解决逻辑复用困难
2. this 难以理解
3. 拥抱 FP