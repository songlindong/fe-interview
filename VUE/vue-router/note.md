##  vue-router
### 起源
后台路由 => 导航、地址关联


单页应用
* 1. 标签等跳转实现单页内多个模块切换 => 体感上的多页转换 => 单页内多前端文件的管理
* 2. 单页内管理多个模块之间的传参以及回调 => 前端参数以及状态管理

面试题：
1. 原地刷新问题的由来？
=> 后台配置路径与当前路径不对应 / 路由与地址一对多
2. 解决方案？
=> 多地址指向单页引用模块初始页 / active标签（query | local）

### vue-router
使用
1. 引入生成
2. 导入vue实例插件
3. 实例化
4. query params

### 路由切换
#### 单页路由切换实质
* 1. 更新视图但是不重新请求页面
* 2. 路由开放给多种方式 hash history

#### hash模式
https//wwww.example.com:8080/aaa/bbb?ccc=123&ddd=456#list
https - 协议
www.example.com - 域名
8080 - 端口号
aaa/bbb: 虚拟路径
ccc=123&ddd=456 - 参数
#list - 锚

核心 => hash改变不会触发网页重载/hash值改变会改变浏览器的历史记录 / hash改变会触发window.onhashchange()

问：如何改变hash?
1. a标签形式
```js
 <a href="#/list"></a>
```
2. window.location.hash
3. history.forward() / back()

#### history模式
核心 => pushState() replaceState() / history会改变浏览器的历史记录 / state title URL / window.onpopstate()

原地刷新 => 后台指向固定地点，前端解析后续路由
