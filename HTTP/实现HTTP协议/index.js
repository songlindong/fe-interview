const net = require('node:net');
const Response = require('./response')
let str = ''
const client = net.createConnection({ port: 8000}, () => {
  // 'connect' listener.
  console.log('connected to server!');
  client.write('GET / HTTP/1.1\r\n');
  client.write('host: 127.0.0.1\r\n');
  client.write('\r\n');
});
client.on('data', (data) => {
  console.log(data.toString());
//   client.end();
  str += data.toString()
});
client.on('end', () => {
  console.log('响应数据')
  const res = new Response()
  res.parse(str)
  // console.log(res)
  console.log('disconnected from server');
});