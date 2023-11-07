# HTTP
- http是一个基于TCP 的文本传输协议
## 请求
POST / HTTP/1.1       Request line
Host: 127.0.0.1               
Content-Type: application/       x-www-form-urlencoded         headers

field1===aaa&code=x%3D1

## 响应
HTTP/1.1 200 OK               status line
Content-Type: text/html
Date: Mon, 23 Dec 2019 06:46:19 GMT
Connection: keep-alive
Transfer-Encoding: chunked     headers

26
<html><body> Hello World <body></html>
0
