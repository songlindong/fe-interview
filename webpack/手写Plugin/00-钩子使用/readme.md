# webpack
1. webpack 源码阅读 ---》梳理清楚webapck 打包流程
2. 手写简易版打包器 --》minpack 只能做模块的打包
3. 手写loader相关
4. 手写plugin相关

- 将不同的插件串联起来，插件其实就代表着不同要做的事情，tapable
nodejs events, 依赖发布订阅模式
compiler comilation --> tapable 实例对象

注册和监听事件，不在webpack打包流程中按需的触发相应的回调

1. 插件被挂载到了compiler 身上
 - 我们在命令当中执行 npm run build --->webpack -- npx webpack ---> webpack.js
  在 webpack.js 文件当我们可以找到一个webpack() 方法，无论如何判断，最终都会执行create()
  - 在create方法里，无论怎么判断，最终都会执行 createCompiler()
  - 在createCompiler 内部就执行了`new Compiler`, 此时需要注意，当我们实例化了一个compiler对象之后，就立即将插件挂载到了compiler深山
  - 具体的挂载操作就是调用插件身上的apply方法，将compiler 对象实例传递过去，因此也得出了另外一个结论，插件本质上就是一个类，它的内部会有一个apply方法
  - compiler（大管家） compilation（负责每次具体打包的）
  - 这些插件被挂载到 compiler 身上之后是如何使用的呢？？？

  - 在插件apply方法里，我们会看到compiler.hooks.entryoption.tap()
   - compiler就是new Compiler得到的实例对象，所以它的身上具有hooks属性
   - hooks本身就是一个键值对，它下面有一个键叫entryOption,而它对应的值是new SyncBailHook
   - SyncBailHook 从哪来的呢？有一个工具包tapable，这个包的里面有一个类就是它
   - 因此我们发现entryOption的值就是一个钩子实例对象，最终在插件里可以被使用
   - 任意一个钩子实例对象都会有两个操作

   tap类操作：订阅事件
   call类操作：触发监听的回调

 2. 什么时候挂载的

## tapable 当中的钩子
1. taable 是一个库，对外暴露了很多的钩子类
2. 这些钩子类我们称之为Hook类，然后他们的实例就是一个个钩子，hook
> Hook是具有不同类型的，有 Sync 和Async 两种，一种异步又分为，并行和串行

### 同步钩子使用
#### SyncHook使用
> 这是一个同步串行的钩子，事件一个一个的执行，上一个钩子不会影响下一个钩子执行
1. tap 来执行订阅
2. call 来执行触发
#### SyncBailHook使用
> 如果某一个钩子监听中返回了非undefined 那么后续的钩子监听就不在执行
#### SyncWaterfallHook使用
> 上一个钩子的返回值会传递给下一个钩子当作参数进行使用（两个事件之间有关系了）
#### SyncLoopHook
### 异步钩子使用
1. 异步并行：
  - 此时我们有 A B两个异步操作，并行指的就是AB同时做
  - 结果就是AB都执行完了之后才往后走（promise.all()）
2. 异步串行：
 1. 异步还是那个异步
 2. 串行指的就是A做完了之后再去做异步B
#### ASyncParallelHook
> 异步并行，不同的异步监听同时执行，等到所有监听执行结束后执行最后一个回调
#### 钩子的使用语法
1. 订阅： tap tapAsync tapPromise
2. 触发：call callAsync promise