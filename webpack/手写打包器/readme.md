## 面试题之于 webpack
1. 我们常见的loader 有哪些
2. webpack 的构建流程（从配置文件读取开始到资源的输出）
3. 手写过loader和plugin[]
4. webpack 热更新的实现原理
5. 如何利用webpack 来优化前端性能（体验）

## 调试（）
## 初始化 run 文件
> 省略了入口代码的调试
结论：run.js就是webpack 最核心的流程

## 初始化流程
1. 新建webpack.js
2. 新建compiler.js

## 合并配置参数
1. 读取命令行参数
2. 与用户配置参数进行合并

## 插件
> 插件其实就是一个具有 apply 函数的类
> 插件是在 compiler 创建之后完成挂载的
> 挂载是否意味着执行（？）

## 添加钩子
> 按着上述的操作挂载插件看起来是插件直接工作了
> 但是有些插件是在整个流程的某些事件电商触发的
> 所以这种情况就要使用到 tapable 钩子

## 确定入口
从配置文件当中取出 entry 的值，内部需要转为对象进行处理
## 新增属性
> 整个打包结束之后，必然会产出很多的内容，这些内容都需要有地方保存
## 初始化编译
1. 定位入口文件的绝对路径
2. 统一路径分割符
3. 调用自己的方法实现编译
## loader 参与打包工作
> loader 就是一个函数，接收原始数据，处理之后返回给webpack 继续使用
1. 读取被打包模块的源文件
2. 使用loader来处理源文件（依赖的模块）
3. 以降序的方式来执行 loader

## 模块编译实现（单模块）
> webpack 找到a.js 这个模块之后，就会对它进行处理, 处理之后的内容就是一个键值对
> 键就是 ./src/a.js, 而值就是 a.js 的源代码
1. 获取被打包模块 ID

## 实现 ast 遍历
- @babel/parser : 解析器，将源代码转为 ast 语法树
- @babel/traverse：实现 ast 语法树的遍历
- @babel/generator: 将处理后的 ast 转为可执行源代码
- babel-types：在遍历的过程中如果想要操作树上的某一个节点，那么就可以使用它

##  ast 单独说