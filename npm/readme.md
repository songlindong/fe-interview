- 基础 - 是什么
- 深度 - 为什么

# npm 基础 - 现代前端开发模式

## 很多年前的前端， 是什么样子？

## 补充一下
SDK(software develop kit): Node
IDE(集成 dev env): VSCode

#### 有了npm, 我们就可以去创建一个工程环境
npm 理解成一个包下载管理工具
每一个npm管理的工程下面，都会有一个文件，叫做 package.json
```js
 "scripts": {
    "test": "jest"
 },
```
在package.json 中的命令行，会自动地去。/node_modules/.bin这个路径中去找

## 这么多年，前端有哪些变化？
没什么变化， 浏览器最终还是只认三大件

## 现在前端开发框架

Webpack rollup vue react babel postcss....

### rollup
模块化打包
