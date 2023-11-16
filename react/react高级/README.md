### 怎么学

#### 你的 Vue 水平怎么样
费曼技巧
尝试用一个你熟悉的领域，去解释一个你正在熟悉的领域。

#### 框架
框架永远是“器”， 解决问题的方法是“术”， 我希望我们的同学， 学习知识体系--“道”， **“以道驭术”**。


## Vue & React

- Vue 是怎么更新组件的？
  - data.x -> 修改。
    - set 函数 notify 
    - get 函数 watcher
    - 👿 -> data.x -> 1 -> 2
    - value -> 2

- React 更新 
  - 从根节点遍历一遍
    - 缓存。Current x=1 2  current Fiber 
    - JSX 上体现出来了。 x= 1 -> 2
    - WIP : x=2 4  - workInProgress Fiber
    - 一起更新到界面上。

```jsx
<div>
 <div>{{x*2}}</div>  // 2 -> 4  👿 -> 
 <div>{{x}}</div> // 1 -> 2 👿
</div>
```

### react 是 immutable , vue 是 mutable 
immutable: 不可变
mutable: 可变

```js
const x = {a : 2};
const y = x;
y.a = 3

newX -> {a : 3}
```

### react 是运行时框架， vue 半编译框架 
- 为什么说 react 比 vue 牛逼
```js
// api 
getData('string', 'key');

getData('string.key');
getData().string.key
getData('string').key

```
你的 API 是不是变得更灵活了，你的 getData 的实现，是不是更复杂了。
17 18
```js
// vue
// 浏览器是不认识的。编译，读字符串，输出。
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

### react 如何触发视图更新
hook: useState 
class: setState | forceUpdate 

体感

## react 初体验

create-react-app

### 事件与状态

#### 状态
在 react 中，你要修改一个数据，去触发界面更新，必须把这个数据，设置为可控状态。
```js
// function 
  const [data, setData] = useState(1);
// class 
  this.state = {};
  this.setState();
```

#### 事件
```js
// function 
<button onClick={handleClick}>change</button>
<button onClick={handleClick.bind(null, 5)}>change to 5</button>
<button onClick={() => handleClick()}>change</button>

// class
<button onClick={this.handleClick}>+</button>
<button onClick={this.handleClick.bind(this)}>+</button>

```

##### why hooks
1. 解决逻辑复用困难
2. this 难以理解
3. 拥抱 FP


### 子父组件传值

#### 大小写
小写字母开头，默认是原生组件。HostComponent, onClick 只是一般情况下，是原生组件默认的一个方法；

大写字母开头，是我们自己定义的组件，子组件，这种，onClick，你写了，就变成了一个 props 的 key， 仅此而已。

### 孙子和爷爷
1. 两层透传
2. redux ， 状态管理
3. provider, consumer /  provider, inject

### 条件、列表与表单

#### 条件
```jsx
{isChildShow ? <Child data={data} onClick={() => handleClick()} /> : null}
{isChildShow && <Child data={data} onClick={() => handleClick()} />}
```

#### 列表


#### 表单


## 基础。



## hoc 

### 属性代理
一般用在一些业务的切面上
#### 优点
低耦合
类、函数都可以
业务组件隔离性好

redux Connect()()
router withRouter

#### 缺点
无法获取原始组件的状态
如果要获取，要用 ref 


### 反向继承
一般用在一些业务的本身上

#### 优点
获取状态方便
#### 缺点
函数组件用不了
逻辑很脏，影响很大。
