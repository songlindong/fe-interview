# Node.js 网络 HTTP & 部署

## 1. 目标
1. OSI、TCP/IP 协议模型设计
2. TCP、UDP、HTTP、websocket 介绍 & 使用
3. 0~1 搭建node

## 2. 大纲
1. OSI、TCP/IP 协议模型设计
2. TCP、UDP
3. HTTP
4. websocket
5. node搭建

## 3. OSI TCP/IP

协议是什么？

明确地定义，每部分作用，职责类似于规定标准及约束

### 3.1 OSI七层

- 应用层：直接向用户提供服务，在网络上完成工作
  - FTP、Telnet、SSH、E-mail、DNS、HTTP（s）
- 表示层：对应用层的数据进行解释，进行不同语法含义的定义
  - 编码，加密解密，数据格式化
- 会话层：在两个实体，建立连接的方法，组织和协调会化进程间的通信
- 传输层：向用户提供可靠地端到端的流量控制和差错校验
  - TCP、UDP
  - 传输连接管理：面向连接 面向无连接
  - 传输差错校验
  - 检测传输服务质量
- 网络层：路由算法，将报文通过通信网络传递给下一个网络节点，选择最优解
  - 寻址：数据链路层MAC，IP
  - 交换
  - 路由算法
  - 服务连接：防止阻塞，差错校验
- 数据链路层：节点之间链路上数据的稳定准确
  - 将信息从有差错、不能保证有序的状态，调整为有序、且无差错的过程
- 物理层：实现我们计算机节点的bit流传输
  - 光缆、电缆
  - 信号调制、信道复用

### 3.2 TCP/IP
 - 应用层：与网络相关的程序的通信，
 - 传输层：TCP、UDP
 - 网络层：IP
 - 网络接口层：驱动设备

### 3.3 OSI与TCP/IP
1. OSI是理论上的模型，TCP/IP真实存在
2. OSI现有的理论，再有的标准协议，TCP反过来的
3. OSI服务、分层的概览，TCP/IP借鉴的OSI思路

MAC：media access control address 媒体存储控制地址

Q：
html: 应用层
路由器：网络层

HTTPS、cookie、JWT安全、HTTP代理、缓存、跨域
## 4. TCP UDP

- TCP：transmission control protocol 传输控制协议 更能保证我们数据传输的稳定性和正确性
     TCP报文的结构
 0      1       2       3
  源端口号           目标端口号
    序列号  保证TCP sequence number
        ACK
  头部长度  保留      窗口大小

    校验               紧急指针

        选项内容、填充数据
- UDP：user datagram protocol 用户数据包协议

     UDP 报文结构
  源端口& 目标端口  长度
  UDP首部       UDP数据结构

### TCP UDP区别

1. 是否连接： TCP面向连接（一对一）、UDP不面向连接（一对一、或者一对多，广播）
2. 是否可靠：TCP三次握手、四次挥手，UDP不可靠，不会有拥塞控制和流量控制
3. 传送方式：TCP：bit UDP: 报文
4. 开销： TCP：20字节 UDP：8字节
5. 场景：TCP：可靠性高场景，UDP：视频流，实时性要求高

直播：RTMP TCP 不是所有流媒体的通信都是UDP

### TCP 连接

Q:
1. 为什么client最后要等2个MSL
  1. 确定server接受到ACK
  2. 确定server不返回新的报文
2. TCP每次建立连接都要3次握手？
  1. TFO TCP fast open
  2. client第一次发请求
    1. SYN fast-open的cookie
  3. server接受fast-open, ACK 带上cookie返回client
  4. client存储server返回cookie

  1. client发送cookie
  2. 服务端接收cookie，减少第三次报文，少了最后一个RTT（round-trip time）往返时延

### TCP攻击
- 半连接：client发送请求SYN到服务端，服务端回ACK，SYN，服务端处于SYN_RCVD

- 全连接：三次握手后，服务端等待请求，TCP队列维护起来

SYN flood攻击，半连接攻击
客户端大量发送SYN
- 服务端返回大量SYN&ACK，半连接池吃紧
- 客户端认为服务端超时，客户端继续重发

解决：
1. 半连接池增加
2. SYN cookie

### TCP流量控制和拥塞控制

# HTTP
获取HTML等具体的网络资源的协议

client-server

应用层协议
底层：TCP，TLS（https）

## HTTP特点
1. 基于client-server, 比较简单的，HTTP结构比较简单
2. HTTP没有状态的，cookie

## HTTP结构

起始行 + 头部 + 空行 + 实体
- 请求报文：方法 + path + HTTP版本号
- 响应报文：版本号 + 状态码 + 原因

GET、POST、PUT、HEAD

GET、POST区别
1. 幂等
2. 编码，GET url编码
3. 安全性

Q:
1. 传定长、不定长的数据
  1. 定长：Content-length：HTTP长度
  2. 不定长：Transfer-Encoding: chunked, 实现分块传输，忽略Content-length，keep-alive
2. 大文件
  1. Accept_Range:none,服务端状态码 206 Partical Content

```js
```

## HTTP攻击
1. SQL注入 get get_name?a=selectXXX
2. XSS(cross-site script)
  1. 存储性XSS
  2. 反射性XSS
  3. 基于DOM的XSS