## vue基础用法
### 理论
#### 面试题1：简单聊聊对于MVVM的理解？
* 1. 发展史以及旁支
a. 语义化模板阶段
b. MVC - model view controller $('#id').attr('data', data.value)
c. MVVM - model view viewModel
  - 数据会绑定在vm层并自动将数据渲染到页面中
  - 视图发生变化时，会通知viewModel层进行更新数据

### 写法
#### vue是如何利用mvvm思想进行项目开发
数据双向绑定
a. 利用{{}}，构筑了数据与视图的双向绑定 -- 分类转译
b. 通过视图绑定事件，来处理数据，

#### 生命周期
##### 面试题2：vue生命周期
beforeCreate => created => beforeMount => mounted
=> beforeUpdate => updated (循环)
=> beforeDestroy => destroyed

beforeCreate: new Vue() - 实例挂载
created: data | props | methods | computed - 数据操作

beforeMount: vDom - 读取虚拟节点
mounted: Dom - dom任何操作

beforeUpdate: vDom 更新了 - 数据更新
updated: dom完成节点更新 - 谨慎操作数据

beforeDestroy: 实例尚未被销毁 - 清理回收eventBus | localstorage | 计时器
destroyed: 实例销毁

#### 定向监听
computed => 面向新变量
watch => 面向老变量
##### 面试题3：你对于computed和watch的区别有何理解？
相同点：
1. 基于vue的依赖收集机制
2. 都是被依赖的变化触发，进行改变进而进行处理计算

不同点：
1. 入和出 => 逻辑思路顺序
computed: 多入单出 - 多个值的变化，组成一个值的变化
watch: 单入单出 -- 单个值的变化，进而影响一系列的状态变更

2. 性能
computed: 会自动diff依赖，依赖如果没有发生变化，则直接缓存读值
watch: 稳定支持监听

3. 写法上
computed: 必须有return
watch: 不一定

4. 时机上
computed: 从首次加载生成，就开始计算了
watch: 首次不会运行，immediate: true

#### 模板
##### 模板编译原理 template => dom
template => 匹配模板语法 -- 生成AST：静态 + 动态 => 转换AST成可执行方法 => render()
- 面试题
 - 绑定数据的计算可以写在花括号里吗？可以的
 - 截断 {{ msg.slice(0, -1) }} 可以的
 - 浮点数 {{ number.toFixed(2) }} 可以的
 - 转整型 {{ parseInt(number, 10) }}

- 加工类型
 - 函数加工 {{ calcNumber(number) }}
 - 条件类型 
  - 三元计算 可以的
  - 逻辑运算 可以的
  - 取反

#### vue3
##### vue3兼容性
平顺切换
1. 模板类型兼容
2. 变量
3. 切换点：组合式api方式

需要调整的点
1. 需要做处理 v-for v-if
   在vue2中，一个元素上同时使用v-if,v-for优先作用
   在vue3中，v-if总是优先生效

2. 数据上
   vue2 对象响应是可传递的
   vue3 响应式对象始终通过挂载实例来获取

3. 模板上
   vue2 统一根模板
   vue3 平铺支持碎片化

4. 方法书写上
   vue2 收敛到methods、computed、watch各种对象配置中
   vue3 直接以钩子形式进行调用即可