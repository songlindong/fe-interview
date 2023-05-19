# html

## HTML DOCTYPE的含义？什么是HTML的标准模式与混杂模式？
HTML的文档类型声明，doctype，说明这个页面是用什么来编写的
- h5 html5 有一个比较宽松的语法，基本上完全向后兼容
## HTML5有哪些语义化标签及其特性？HTML元素有哪些分类与特性？
让我们根据结构化的内容，选择合适的标签
-seo 有利
-代码的可读性，更好
-标签加上alt，title
-accessbility 方便一些其他的设备进行解析

## 如何检测浏览器是否支持HTML5特性？
-canvas
-video, audio
-本地缓存的支持 localStorage Worker
-article, footer, header
-form: calender, date
-esm es module, script 是不再需要type属性了

1. 检查特定属性和方法

```js
!!navigator.geolocation
!!window.localStorage
!!window.Worker
```
2. 创建一个元素，看看特定的元素，有没有属性和方法

```js
document.createElement('canvas').getContext()
document.createElement('video').canPlayType
```
3. 第三方库
http://modernizr.cn/

## HTML中meta的作用？


## HTML的标签有哪些可以优化SEO？
1. meta 中的相关属性
`<meta name="author" content="aaa@gmaile.com">`
`<meta name="description" content="aaa@gmaile.com">`
`<meta name="keywords" content="aaa@gmaile.com">`
2. 标签
 1.title
 2.meta
 3.header
 4.nav
 5.article
 6.aside
 7.footer

A:
 1. 首先要保证是SSR的
 2. meta 中相关的属性
 3. 语义化标签，以一些结构化的为主，

## DOM和BOM有什么区别？
 JavaScript 在浏览器环境行，一般由三部分组成
 - ECMAScript 核心，描述了JS的语法和基本对象
 - DOM 文档对象模型，document, 有一些API，可以操作文档
 - BOM 浏览器对象模型，browser, 有一些API，可以操作浏览器

## 如何实现移动端适配？
1. 1px问题
先放大200%， 然后scale(0.5)

2. rem方案
rem 指的是html的font-size 的大小

## 如何禁用页面中的右键、打印、另存为、复制等功能？
```js
// 右键
document.onmousedown = function(event){
    if(event.button ===2){
        return false
    }
}
document.oncontextmenu = function(){
    return false
}

// 复制
//<body nocopy='nocopy()'>
    function nocopy(event){
        event.returnValue = false
    }

// f12
document.onkeydown = function(event){
   if(window.event && window.event.keyCode ===123){
    window.event.returnValue = false
   }
}
```

## href="javascript:void(0)"和href="#"区别是什么？ 
href = '#' 我的锚点，默认是 #top, 会让你网页往上走
javascript:void(0)死链接

## 对target="_blank"的理解？有什么安全性问题？如何防范？
target="_blank", 类似于window.open, 你的子页面，会拿到当前页面的句柄
window.opener
```js
if(window.opener){
    window.opener.loacation.href = "bad.html"
}
```

```html
 <a href="x.html" target="_blank" rel="noopenr noreferer">跳转</a>
```
```js
var otherWindow = window.open('xxx')
otherWindow.opener = null
```

## 简述页面的存储区别？什么是本地存储？怎么做离线缓存？
1. cookie
   每个cookie 不能超过4kb
   每个域 20个
   [key, value, domain, expireTime, httpOnly, sec, ss]
2. web storage
  localstorage
  sessionstorage
  5MB
3. indexedDB [webSQL]

4. application cache
  1. pwa
  2. service worker

## 什么是canvas？什么时候需要使用canvas？
 canvas 的中文：画布，浏览器的动画工具
 css div 普通的网页
 svg 和传统的html 差别不大，解决html处理矢量绘图的能力不足问题
 canvas 2d
 canvas webGL OpenGL 的 ES 规范，在web端的实现，利用

## 什么是PWA？
渐进式网页应用
核心技术：
-app manifest
-service worker 客户端代理的工作
-web push

## 什么是Shadow DOM？
web component 做到真正的组件化
stencil 框架
- 原生规范，无需框架
- 原生使用，无需编译
- 真正意义上的 css scope
```js
 
```

## iframe有哪些应用？
- 最常见的一种微前端手段
- ajax 上传图片
- 广告
- 跨域

## 如处理iframe通信？
- 同域下面

```js
document.domain = "baidu.com"
frame.contentWindow.xxx
```
-post message
## 什么是web worker？为什么要使用web worker?

## ? 什么是SSO打通？怎么做前端沙盒模式？

## 浏览器的渲染和布局逻辑是什么？
- DOM 树构建
- CSS 树构建
- 浏览器树构建
- 页面布局
- 页面绘制

## 页面的重绘回流是什么？
1、
2、改变盒模型、会引起回流(重排)

## 怎样计算首屏和白屏的时间？常统计的页面性能数据指标包括？
FP FCP
## 页面上有哪些领域可以做进一步的性能优化？
- visibility:hidden --> display:none
- 避免使用table
- 避免层级过多
- dom insert -- fragment
- requestIdelCallback
## 浏览器之间的线程调度是怎么做的？
