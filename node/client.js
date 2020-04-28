const http = require('http');
const url = require('url');
const fs = require('fs');
// const qstring = require('querystring');

http.createServer(function (req, res) {
    if (req.method == "post") {
        var reqData = '';
        req.on('data', function (chunk) {
            reqData += chunk;
        });
        req.on('end', function () {
            // var postParams = qstring.parse(reqData);
            // res.end(postParams);
            httpPost(res);
        });
    } else {
        fs.readFile('index.html', function (err, data) {
            if (err) {
                console.log(err);
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.write(data.toString());
            }
            res.end();
        });
        
    }
}).listen(8000, () => {
    console.log('开启客户端 http://127.0.0.1:8080')
});

function httpPost(res) {
    var options = {
        host: '127.0.0.1',
        path: '/post?id=1',
        port: '8080',
        method: 'POST'
    };
    http.request(options, function (response) {
        var data = '';
        response.on('data', function (chunk) {
            data += chunk;
        });
        response.on('end', function () {
            res.end(data);
        });
    }).end();
}