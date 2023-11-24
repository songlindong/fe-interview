var Websocket = require('websocket').server
var http = require('http')

var httpServer = http.createServer().listen(8080, function() {
    console.log('启动成功')
})

var wsServer = new Websocket({
    httpServer: httpServer,
    autoAcceptConnections: false
})

wsServer.on('request', function(request) {
   var connection = request.accept();
   connection.on('message', function(msg) {
    console.log(msg)
    connection.send(msg.utf8Data)
   })
})