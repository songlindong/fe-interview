### 性能优化进阶
#### Navigation Timing API
1. navigationStart
代表: 从上一个文档卸载结束的时间戳
特殊：如果没有上一个文档，navigationStart === fetchStart

2. unloadEventStart
代表：前一个卖你是unload的时间戳
特殊：如果没有前一个页面，则unloadEventStart === 0

3. redirectStart / redirectEnd
特殊：有跳转且是同域名内的重定向

4. fetchStart
代表: 浏览器准备使用HTTP取读取文档
关注：位置发生在检查本地缓存之前

5. domainLookupStart / domainLookupEnd
关注：持久型连接 domainLookupStart === fetchStart

6. domLoading 
代表：开始渲染DOM树，readystatechange, readyState => loading

7. domInteractive
代表：完成了DOM树的解析
关注：只是DOM树的解析完成，并没有开始加载网页内部额外加载的资源

8. domContentLoadedEventStart / domContentLoadedEventEnd
代表：网页内资源加载时间

9. domComplete
代表： readyState => complete

10. loadEventStart / loadEventEnd

```js
  // index.html
  <script>
     javascript: (() => {
        const perfData = window.performance.timing
        const pageLoadTime = perfDate.loadEventEnd - perfData.navigationStart

        console.log('页面加载总耗时', pageLoadTime, 'ms')
     })
  </script>
```

#### Core Web Vitals - 网页核心的性能指标
* 用户体验的衡量标准分成了：加载、交互性、视觉稳定性 => 可量化指标

##### Largest Contentful paint (LCP) 
衡量装载性能：为了提供良好的用户体验，LCP应该在首次页面加载开始后，2.5秒内完成
* 2.5s完成最大渲染 => 模块异步 + 视觉缓冲 + 骨架屏

a. 最大内容包含哪些？
- <img> 元素
- <svg> 元素
- <video> 元素
- 通过url函数加载背景图片
- 包含文本节点或其他内联文本元素子集的块极元素

b. LCP低下的原因
- 服务器响应慢
- 阻断渲染的JS和CSS
- 资源有问题
- 客户端渲染机器性能影响

c. 针对性改造
- 服务器优化
缓存HTML => 强缓存、协商缓存

尽量减少资源的阻断渲染

图片进行优化 => 降低图片大小，加快请求速度 => 图片格式优化 / 云资源管理
压缩 + 异步加载 => 首屏优化

### First Input Delay(FID)
衡量交互性，为了用户的交互体验，页面FID应当小于100ms
* 页面首次可以输入延迟小于100ms

a. 减少JS的执行时间
- 缩小并压缩JS文件
- 延迟加载首屏不需要的Javascript
- 尽量减少未使用的polyfill

b. 分解耗时的任务
- 任何阻塞主线程50ms以上的代码
- 可以进行进一步的代码拆分：
  1. 小代码块异步操作
  2. 进行视图逻辑分离

c. worker
- JS worker: web worker