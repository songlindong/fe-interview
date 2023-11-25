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

### 架构
1. 分层
2. 复用
3. 目标 - 隔离熵

### 微前端是不是架构？
- 隔离熵

### 管理，是隔离人的熵，架构是管理代码的熵