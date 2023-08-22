### http - Hyper Text Transfer Protocol
#### 内容
客户端 => 服务端
##### 基础请求 - 请求标头 - 报文主体
* 基础请求：url | method | dest
* 请求标头：配置 + 拦截器 => 权限、身份
1. Accept - 请求内容的期望格式类型
text/
   html: HTML格式 / plain: 纯文本格式 / xml: XML格式
image/
   gif: gif格式 / jpeg: 图片格式 / png: png格式
video/
   mpeg / quicktime

application/
   xhtml + xml / atom+xml / json / pdf / msword / x-www-form-urlencoded
2. Accept-Encoding - 期望返回内容被压缩
gzip, deflate, br
表示请求的返回希望被压缩 => 减少网络流量，提升性能
追问：
a. 要求而非强制，如果服务端不支持或者未开启压缩，则不起作用
b. 服务端支持压缩，或者开启压缩。响应头中Content-Encoding: gzip

3. Accept-Language - 浏览器所支持的语言 => 国际化、多语言包
zh 表示中文；zh-cn 表示简体中文；en、fr

4. Connection  - TCP信道的连接 keep-alive(1.1之后默认) / close
追问：
标识位置？connectionId - 代表单个请求新建立的信道索引
=> 正式课建立与并发控制

5. Cookie - 缓存形式
=> 追问方向：
a. 几种缓存的对比 - cookie vs localStorage vs sessionStorage
大小：storage >> cookie
性能：cookie每次请求都会携带，影响性能 => 网络性能优化
跨域：cookie无法跨域调用, 需要指定一个作用域 => 跨域问题
跨tab共享: sessionStorage - 不支持；localStorage - 同源窗口共享；cookie - 同源窗口共享
时效性：session - 当前页面； localStorage - 跟随浏览器；cookie - 过期时间
支持监听：session - 不支持跨页面，支持监听；local - 支持监听
window.addEventListener("storage", e => {})
=> 性能监控

6. Referer - 请求资源地址

7. User-Agent - 用户侧信息
追问：
内容包含
 - 操作系统 / 版本
 - 浏览器 / 版本 
 - 设备信息（移动端）版本
 兼容性

websocket => 扫码 => 性能较差 / 离开页面的时候

8. Sec-Fetch-Dest / Sec-Fetch-Mode / Sec-Fetch-Site
mode - 请求的模式
 cors: 跨域请求
 no-cors: 限制请求
 same-origin: 同源请求
 navigate: 浏览器切换页面行为
 websocket: 建立websocket连接
dest - 请求目的地，如何使用获取的数据
  empty / iframe / font / image
site - 请求发起者和资源之间的关系
 cross-site: 跨域请求
 same-origin: 发起方和目标一致
 none

9. q=0.01 - 参数优先级
追问：
a. q越高代表优先级越高 0 =< q <= 1 [0, 1]
b. 默认不写，优先级 q = 1
c. ;q=0.01


#### 预检请求 & 跨域请求
* 什么是跨域？
"域"（Origin）浏览器地址栏中的主机地址
"跨域" - 当前网页应用请求的主机地址与本浏览器中主机地址不同 => 我们的网页应用想要去隔壁家取资源 => 服务端会做http转发会存在跨域问题吗？不会

* 构成跨域的条件？

a. domain不同
b. 端口不同
c. 协议不同（http / https）

* cors的概念？

CORS - cross-origin resource sharing

* 什么是简单请求？
a. 请求方式：HEAD GET POST
b. accept、accept-language、content-language、content-type: x-www-form-urlencoded + form-data + plain

* 浏览器的不同处理方式
1. 对于简单请求来说，请求跨域 => 放行请求发出 => 浏览器发出cors请求，并且携带origin
=> 浏览器拦截返回
=> 浏览器检查response的header中有没有Access-Control-Allow-Origin

2. 非简单请求
发出非简单cors请求 => 浏览器会做一个http查询请求（预检请求）
=> 追问：
option请求是啥？/ options请求出现的场景以及作用？
=> 安全性

* 关注的响应参数
1. Access-Control-Allow-Origin:（任意域名请求都可以被接收）/ Origin

2. Access-Control-Allow-Credential:
是否允许发送cookie

#### http 状态码
1. 1xx 信息提示：
     100 - continue
     101 - 切换
2. 2xx 成功：
    200 - 请求成功
    201 - 创建完成
    204 - 无内容
3. 3xx 重定向
    301 - 永久重定向
    302 - 对象已移动
    304 - 资源未修改
    307 - 临时重定向
=> 面试：
* 301 vs 302 => 跳转
302 - 短链接转长链接 => 点击短链接 => 对象已移动 => 浏览器自动跳转到长链接
* 302 vs 304 => 缓存
a. 强缓存 => 不发请求 => 返回200状态码 + 标识from cache
b. 协商缓存 => 由服务器端参考决定是否缓存

强缓存 => Expires(资源失效的时间) + cache-control(1.1) / max-age=3600 => cache-control > Expires

协商缓存 => Last-Modified + If-modified-Since + ETag => ETag计算会有性能损耗

* 4xx - 请求错误

* 5xx - 服务端错误



