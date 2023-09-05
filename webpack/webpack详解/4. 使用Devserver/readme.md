# Devserver

1. 自动检测页面的更新，实时预览;
2. sourcemap;

```js
webpack --watch
```

HMR: hot module replace

--hot
是否是更新页面，加上hot以后只是模块级更新，页面不更新
source-map

## 1. entry 
入口的类型：
1. string: './main.js'

```js
 // 同步函数
 entry: () => {
    return {
        a: './pages/a',
        b: './pages/b',
    }
 };
 // 异步函数
 entry: () => {
    return new Promise((resolve) => {
        resolve({
            a: './pages/a',
            b: './pages/b',
        })
    })
 }
```
## 2. output

1. filename

```js
filename: 'bundle.js'
filename: '[name].js'
```

- id: 从0开始
- name: chunk的名称
- hash: 唯一的hash值
- chunkHash: chunk的hash

2. chunkFilname

commonChunkPlugin
```js
import('path/to/module')
```

3. path
  指定文件输出位置

4. publicPath

5. corssOriginLoading
展示错误详情

6. library libraryTarget

- library: 配置导出库的名称
- libraryTarget：导出的方式

- var

```js

```
- global

global

7. libraryExport

library

## module
loader - rules

## resolve

```js
 resolve: {
    alias: {
        components: './src/components/'
    }
 }

 import Button from 'components/button'
 import Button from './src/components/button'
```

2. mainFields
```js
 {
    "module": "es/index.js", // 采用ES6 语法的代码入口文件
    "main": "lib/index.js", // 采用ES5 语法的代码入口文件
 }
 mainFields: ['module', 'jsnext:main', 'browser', 'main']
```

3. extensions

```js
 extension: ['ts', 'js', 'json']
```

4. modules

node_modules

自定义模块，
```js
 modules: ['./src/components/module', 'node_modules']
```

5. descriptionFiles
package.json

6. enforceExtension
