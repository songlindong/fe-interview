# 状态管理

## 状态
```jsx

function App() {
    const [userList, setUserList ] = useState([]);

    useEffect(() => {
        fetchUser.then(res => setUserList(res?.data || []))
    })

    return <div>
        {userList.map(item) => <div key={item.id}>{item.value}</div>}
        <page>1</page>
    </div>
}

```

- 对于前端开发来说，我们不关心过程，我们只关心，界面处于哪个状态。
- 状态，是动态数据，当前造成的结果。也就是 model 形成的 view。 

## 软件究竟在做什么？
软件工程的核心，就是在管理数据。
如果有一个功能需要开发的时候，我们首先要考虑的是，一个数据的生命周期是什么？作用范围是什么？
- DB 用户在，名字就在。
- localstorage, sessionStorage 较长
- project runtime - redux mobx vuex 
- component [state, data]

#### 一部分性能优化的方式，就是用缓存短期数据，暂时取代长期数据。

正常： 请求后端  ------------  返回前端
优化： 先用缓存的前端内容 --- 问后端这个东西过期了没 --- 直接用

usememo 

#### 还有一部分，就是提前把这些数据拿到。
A -> B (useid);
{
    [userid]: {...}
}

<!-- prefetch prefload prerender -->

## 做一个状态管理要干什么事？
1. 我要有一块独立的区域，去存储我的数据。让大家都能拿到；
   1. 闭包   { age: 18 }
   2. 单例模式
2. 有修改数据的明确方法，并且，能够让使用这个数据的地方，感知到。
   1. 发布订阅
      1. store = {age: 18}
      2. modifyStore();
```js
modifyStore = (newStore) => {
    this.store = newStore;
    notifyAll();
}
```
   2. Proxy / Object.defineproperty
其实本质上，就是把一个 handler 的函数，拿过来执行一下。
3. model 已经改了。几个地方使用了同一个 model，也都改了。model 的改变，要触发 view 更新。(mobx-react, react-redux)
   1. forceUpdate 
   2. $forceUpdate
   3. data.x = Math.random()

## 状态管理的无关性
<!-- P7 -->
框架无关，技术无关。


@reduxjs/toolkit