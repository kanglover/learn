const http = require('http');
const url = require('url');
const fs = require('fs');

let options = {
    hostname: '127.0.0.1',
    port: 8080,
    path: '/OIP.jpg',
    method: 'GET'
};

// let options = {
//     host: '127.0.0.1',
//     path: '/',
//     port: '8080',
//     method: 'POST'
// };

let req = http.request(options, function (res) {
    console.log('STATUS: ' + res.statusCode);
    console.log('HEADERS: ' + JSON.stringify(res.headers));
    res.setEncoding('utf8');
    res.on('data', function (chunk) {
        console.log('BODY: ' + chunk);
    });
});

req.on('error', function (e) {
    console.log('problem with request: ' + e.message);
});

req.end();

http.createServer(function (request, response) {
    // 解析请求，包括文件名
    var pathname = url.parse(request.url).pathname;

    // 输出请求的文件名
    console.log("Request for " + pathname + " received.");

    // 从文件系统中读取请求的文件内容
    fs.readFile(pathname.substr(1), function (err, data) {
        if (err) {
            console.log(err);
            // HTTP 状态码: 404 : NOT FOUND
            // Content Type: text/plain
            response.writeHead(404, { 'Content-Type': 'text/html' });
        } 
        else {
            // HTTP 状态码: 200 : OK
            // Content Type: text/plain
            response.writeHead(200, { 'Content-Type': 'text/html' });

            // 响应文件内容
            response.write(data.toString());
        }
        //  发送响应数据
        response.end();
    });
}).listen(8000);