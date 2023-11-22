# React 源码

## 源码怎么学

### 关于源码的误区
1. react 源码，很多人都没读过；
2. 读过的，和写的好不好，其实没有什么太大的关系；
3. 就算不读，依然可以回答好问题；
4. 你读源码是为了什么
 1. 心里有数
 2. 思想借鉴
 3. 应付面试

### 一起来思考
```js
<div>
    <h2>hello world</h2>
    <p>{text}</p>
</div>
```

- 怎么更新是最快的？？？

我要保持运行时的灵活性，我最好的办法，是不是从头遍历一遍
看看你改的，和之前的有什么区别

## 内容
### 版本逻辑
- V15  stack recociler
 - 我从根节点，一层一层的同步遍历

- 16.9 fiber reconciler
  - 我在17.0.2 先把数据结构给你做了，再整一些不稳定但是也能用的东西，你可以试试
  - 他是先吹出来，我要实现了高优先级打断低优先级
  - User Blocking 优先

- 17.0.2
 - lagecy 模式 - Fiber 的结构，但是我不会打断 - xxx.old.js
 - concurrent 模式 - 可以实现高优先级打断低优先级，但是没有正式发布 - xxx.new.js
 - Create-React-App 创建的，lagecy模式

### 双缓存
canvas

#### 帧
动画、电影、显示器 - 跟人眼是不一样的
帧，就是一格一格的画面，只要你的画面速度够快，人眼就追不上
- 人眼的捕捉画面的频率，只要你达到了每秒30帧，人眼就感觉不到卡顿了
- 浏览器，一般情况下，是每秒60帧，会更新一次

### react 中的基本数据结构

###  v-dom / element

#### fiber
本质上，就是一个数据结构
```js
 function FiberNode() {
    this.tag = tag; // 标明是什么类型的数据结构
    this.key = key;
    this.type = null; // dom元素的类型

    // 链表的形式，进行构建的
    this.return = null; // 指向父节点
    this.child = null; // 子
    this.sibling = null; // 指向兄弟

    //
    this.effectTag = NoEffect; // 用来收集 Effect
    this.nextEffect = null; // 指向下一个effect
    this.firstEffect = null; // 第一个effect
    this.lastEffect = null; // 最后一个effect

    // 
    this.alternate = null; // 双缓存树，current 指向对应的workInProgress
 }

// 示意
h2Fiber.return === divFiber
divFiber.child === h2Fiber
h2Fiber.sibling === divFiber


```

#### dom

为什么React不用观察者模式

### react中的库
- react
 - 提供一些和虚拟DOM相关的API
 - 提供一些用户使用的hooks,component
- react-reconciler
  - render阶段
    - beginWork
     创建你的workInProgress Fiber
      beginWork 是一个向下调和的过程，就是由fiberRoot 按照child指针逐层向下调和，期间会执行函数组件，实例类组件，diff子节点，打上不同的effectTag
      - 对于组件，执行部分生命周期，执行render,得到最新的children
      - 向下遍历调和children
      - 打上不同的副作用标签 effectTag
    - completeWork
     根据 effectTag，创建effectList 与真实 DOM
  - commit阶段
   - commitWork
- react-dom
 - 提供在增删改查的情况下，处理DOM的API

#### commitWork

##### flushPassiveEffects
- 如果还有未执行的 userEffect, 就去执行
- flushPassiveEffectImpl
 - useEffect 在上一次更新的销毁函数，和本次更新的一些函数

##### commitBeforeMutationEffects
已经是更新钱的最后一个阶段的
所以，对于类组件来说，我要执行 getSnapshotBeforeUpdate 生命周期
useEffect, 调度


##### commitMutationEffects
实际进行更新的阶段
判断effect节点的flag,选择去Placement,Update,Deletion

##### commitLayoutEffects
- 调用cdm，cdu生命周期
- 执行 useLayoutEffect

react 18

- 调度

### 为什么要做事件分片
用户感知你这个系统卡，核心是什么？

### requestIdleCallback 函数
- 谷歌浏览器提供的一个API，在浏览器一帧里，如果有空余，我就会调用

#### 为什么没有用 RIdle
- 兼容性
- 这个到底啥时候执行，搞不清楚

#### 为什么没有用 setTimeout
- setTimeout 在循环的时候，最后的时间间隔，会变成4ms，（有4ms的延时）

#### 为什么没有用Promise
- paint 之后


#### 最后用了 MessageChannel
- react 最后用MessageChannel 模拟了requestIdleCallback -- 这句话是错的

### 优先级
- Immediate 立即执行
- userBlocking 用户交互
- Normal 网络请求
- Low
- Idle 没有必要的任务