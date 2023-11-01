## 前置
1. 手写loader 分为上下（手写打包器上）
2. 我们可以认为手写loader 就是手写打包器的中
   1. webpack打包的流程（ 手写简易的打包器 => js模块的打包工作 ）
   2. 在整个工作流当中有一个环节（loader来实现不同类型的文件都按模块处理）
     1. 手写loader上（配置 使用 语法 常见的loader手写）
     2. 手写loader下（将loader和打包器结合起来）
   3. plugin（头疼）
     1. tapable
     2. 插件实现，执行时机，自定义插件
   4. 自己实现了一个打包流程 + 自己写的loader + 自己写的插件 => mini webpack
   5. 对于实际工作来说有用否（vue react）
3. 性能优化：把webpack 当做是一个工具来使用时我们要做的优化

## loader 使用
1. loader 本质上就是一个导出内容为函数的js模块
2. loader 默认就可以接收上游传递过来的资源文件或者结果
3. compiler 会拿到最后一个loader的产出结果，这个结果应该时string或者buffer
file-loader 处理图片的时候是怎么做？
- 返回一个字符串形式的图片名称（路径）
- 资源拷贝一份到指定目录
## loader 分类
> 对于 loader默认都是一样的，只不过在使用的时候可以放在不同的位置或者进行了不同的修饰，因此说起来loader 就有分类了
1. 普通loader: 没有做任何的配置
2. 前置loader：enforce 属性配置 pre
3. 后置loader: enforce 属性配置post
4. 行内loader: 使用！进行分割
