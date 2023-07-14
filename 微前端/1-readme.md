# 微前端背景

微服务
分解为小的 互相连接的微服务
通过统一的网关调用

2016年提出
2018 single-spa
2020 module federation (webpack5)

# 微前端是什么？
微前端是一种架构风格

# 现在web应用面临的问题

- DX(developer experience)
  面对老旧工程 或者巨石应用维护难度大
  相同的产品功能由多个团队开发/产品功能 能否直接拿来用
  针对不同技术栈 能否直接拿到我们现有的工程里用

- UX(user experience)
  性能体验
  iframe页面跳转

# 微前端的特点

1. 技术栈无关
2. 独立的开发/部署
3. 增量升级
4. 提升我们开发效率
5. 提高我们的交付率

# 微前端的价值

# 微前端应用具备哪些能力
1. 子应用并行
2. 子应用嵌套
3. 父子应用通讯
4. 预加载
5. 公共依赖加载
6. 按需加载
7. Config Entry
8. HTML Entry
9. CSS隔离
10. JS沙箱

# 微前端现有的解决方案有哪些

## 使用HTTP服务的路由来重定向多个应用

## 基于iframe完全隔离的方案
- 优点
  - 非常简单 无需任何改造
  - 完美隔离 JS CSS都是有独立运行环境
  - 不限制使用 页面上可以放多个iframe 组合业务

- 缺点
  - 每次进来都要加载 状态不保留
  - 通信困难
  - 整个应用资源是全量加载 加载较慢

## EMP 基于webpack module fedration
构建时

## 使用纯的web components 构建应用
- custom elements 
- shadow dom
- html templates

stencli

兼容性不友好

## 业界主流微前端框架

### 基于single-spa 路由劫持方案
 
 - 加载微应用
 - 管理微应用状态

### qiankun

### import-html-entry

- importEntry
- importHTML
- processTpl
- getEmbedHTML
- getExternalStyleSheets

## 基于qiankun 搭建微应用