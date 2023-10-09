一、回顾
窗户纸
工具读（调试）
代码走读
JS 异步编程
promise
基础的语法（this 闭包 原型链 高阶（闭包的应用））
二、webpack
01 常见的工程化的工具（grunt、gulp、webpack、rollup()、parcel）
++++ 应用打包（webpack）
++++ 类库（ES6+，rollup）
++++ 看vite 是否能替代webpack()
++++ 发展过程串一下
++++ gulp webpack 不同
++++ parcel只专注于web打包，开箱即用，黑盒

02 source map （不是讲实现）
+++source map 我们认为是一个技术，都知道代码上线之后运行的肯定不是原始代码（打包），这个时候如果出错，我们需要调试，此时如果能看到原代码调试是最合适的 ，因为能定位到真实的位置
+++ source map 就是一个映射关系技术（打包后代码）原代码

+++ 开发环境下我们可以考虑采用更快更详细的 source map
+++ 生产环境下不愿意暴露原代码，所以一般不用

03 webpack 调试
++ 找到 webpack\bin\webpack.js文件
++ 在 webpack.js 文件中定位到 webpack-cli\bin\cli.js
++ 在 cli.js 当中
  01 首先需要处理 options
  02 利用 options 创建 compiler
  03 有了 compiler 之后在正式的打包之前挂载了所有的内置插件
  04 调用 run 方法开始执行打包
  05 整个过程当中 webpack 中的插件可以监听之前广播出来的各种事件，然后决定执行什么的逻辑，从而修改输出的结果

loader 和 plugin 的区别
a. loader 直译就是编译器，默认情况下 webpack 只识别 js, 对于 css img 等其它资源它并不识别，所以Loader让webpack 具备了将非JS类型的数据转为 JS模块的能力
b. plugin 扩展用的（webpack本来没有这个功能，我们可以让它做的更多，整个webpack 打包的生命周期中会广播出很多事件，这些插件可以监听，然后胡作非为）



04 webpack 构建流程(只关注文字)
 欠着
05 Loader(写几个loader)
....
5.1 loader 的引入方式
 01 直接写路径
 02 resolveLoader
5.2 执行顺序 从右向左，从下向上
 pre normal inline post
 -! 不执行 pre normal
 !! 只执行行内的 loader
 ! 不执行normal
5.3 loader的组成
三、脚手架
