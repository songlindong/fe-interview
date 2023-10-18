let http = require('http');
let url = require('url');
let path = require('path');
let fs = require('fs');
let mime = require('mime')

http.createServer(function(req,res) {
    let { pathname } = url.parse(req.url, true);
    let filePath = path.join(__dirname, pathname);

    fs.stat(filePath, (err, stat) => {
        if (err) {
            return sendError(req, res);
        } else {
            send(req, res, filePath);
        }
    });
});

 function sendError(req, res) {
    res.send('not found')
 }

 function send(req, res, filePath) {
     res.setHeader('Content-TYpe', mime.getType(filePath));
     // 如果使用expires, 设置的有效期是30s
     res.setHeader('Expires', new Date(Date.now() + 30 * 1000).toUTCString());
     // 如果使用cache-control
     res.setHeader('Cache-Control', 'max-age=30');
     res.setHeader('Cache-Control', 'no-store');
     fs.createReadStream(filePath).pipe(res)
 }