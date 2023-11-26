### 亮点的分类？
- 基于业务，封装公共能力，解决业务问题并派生
 - 最简单的
- 使用工程化手段，解决一类流程活研发逻辑问题；
 - 基建能力
- 创造前人没有的玩法，react，你去实现一个preact
 - preact 在某种情况下，比react好

## mono仓库
- 组件库
- web工程

### mono 的含义
Monorepo 最早的出处是软件开发的一个策略，mono 表示单一，repo表示repository意思是多个项目公用一个代码库来管理依赖关系，-- 同一套配置文件，同意构建部署流程等等。

### mono的优势
1. 更好的代码复用
 1. A 项目  B项目 C项目 common
2. 整体的构建，测试逻辑的统一，方便协作


### mono 的构建方式
#### lerna
- 更倾向于去做一些版本的管理
- 没有库和库之间的软链

#### yarn / pnpm / npm
- 会给你做软链
- 但是没有严格的包管理

##  主要步骤
1. pnpm init创建工程
2. 添加 yaml 文件
pnpm-workspace.yaml
```yml
packages:
  - "packages/**"
```
3. 创建文件夹

4. 共建软连接
pnpm add @proj/utils --filter @proj/react-x

如果要自己构建
packages/libs/utils: npm link
packages/apps/react-x: npm link @proj/utils

5. 安装测试环境
```sh
pnpm add eslint -D -w
npx eslint --init
```
# 由于命令行自动化，不给我们加 -w
pnpm add @typescript-eslint/eslint-plugin@latest @typescript-eslint/parser@latest -D -w

- 安装 ptettier
 - eslint 一般多用代码的检测（逻辑、功能）
 - prettier - 一般多用代码美化
 - .prettier.json 起作用的前提是，我们Prettier - Code formatter 插件
 - prettier 可能和eslint 有冲突
  - pnpm add eslint-plugin-prettier eslint-config-prettier -D -w

### typescript 配置
- tsc, ts-loader,@babel/preset-typescript 有什么区别
#### ts-loader
他是内部调用了typescript 的官方编译器 tsc, 所以 ts-loader 和tsc 是可以公用tsconfig.json

#### @babel/preset-typescript
只会给你做编译，不做类型检查
所以，我们要自己做类型检查，就要用tsc的配置

#### 结论
- 没有babel ,tsc + ts-loader
- 有babel,@babel/preset-typescript + tsc 做类型检查
### 架构
1. 分层
2. 复用
3. 目标 - 隔离熵

### 微前端是不是架构？
- 隔离熵

### 管理，是隔离人的熵，架构是管理代码的熵



## react 

### css 的方案有哪些？
- 基于什么样的背景
- 选项 -- 哪些
- 为什么选择了这个

#### css in js
- emotion
```js
 import { css, cx } from 'emotion';

 const app = css`
  background-color: blue
 `

 return (
  <div classname=cx(app)></div>
 )
```
- styled-component

#### css module

#### utility-css
- tailwindcss（原子化css）
- windicss

#### headless with styled 怎么选？

### 状态管理的方案有哪些？
- zustand?
- solid?
- redux?
- mobx
- pinia

### 组件库的方案有哪些
- antd
- headlessui
-
### 构建的方案
- bundled
[module]
一般就是指一个模块，一般从构建的角度来，一个文件就是一个module
[chunk]
一般一个构建流程，就是一个chunk

[bundle]
一般是指产物，main.xxx.js -> 是把你所有的文件合并在一起的，形成了bundle
[channel]
一般和uri是挂接的，代表唯一地址
典型：
webpack, rollup
- bundleless
gulp, ts
### 国际化、图标库。。。方案有哪些？