/* express的服务器 */

//1. 导入express
const express = require('express');
const compression = require('compression');
const request = require('request');
const fs = require('fs');
const path = require('path');

//2. 创建express服务器
const server = express();
server.use(compression());


server.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Credentials", "true");
    // res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Origin", "http://sa93g4.smartapps.baidu.com");
    res.header("Access-Control-Allow-Headers", "Content-Type, Content-Length, Authorization, Accept, X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT, POST, GET, DELETE, OPTIONS");
    res.header("X-Powered-By",' 3.2.1');
    if(req.method === "OPTIONS") res.send(200);/*让options请求快速返回*/
    else  next();
});

// 访问静态文件可以直接用这个，不用 fs 来读取
server.use(express.static('./'));

// get请求
server.get('/test', function (request, response) {
    response.writeHead(200, {"Content-Type": "text/html;charset=\"utf-8\""});
    response.write(`
        <div>GET 请求成功</div>
        <div>query: ${JSON.stringify(request.query)}</div>
        <div>header: ${JSON.stringify(request.headers)}</div>
    `);
    response.end();
});

server.get('/get', function (req, res) {
    const appId = req.query.app_id;
    const url = req.query.url;
    console.log(req.query);
    const options = {
        url: `https://smartprogram.baidu.com/smp/msg/wechat/jsapi/getJsSign?app_id=${appId}&callback=callback&url=${encodeURIComponent(url)}`,
        method: 'GET',
    };

    function callback(error, response, data) {
        if (!error && response.statusCode == 200) {
            console.log('------接口数据------',data);
            const first = data.indexOf('{');
            const last = data.lastIndexOf('}');
            res.send(JSON.parse(data.substring(first, last + 1)));
        }
    }

    request(options, callback);

});

server.get('/jsonp', function (request, response) {
    response.set("Content-Type", "text/javascript");
    response.set("set-cookie", "key=value; domain=.baidu.com; path=/; SameSite=None; Secure");
    response.send('callback({arg: 1})');
});


server.get('/*', function (request, response) {
    let pathname = path.join(__dirname, request.url);
    fs.readFile(pathname, (err, data) => {
        if (!err) {
            switch(path.extname(pathname)) {
                case ".html":
                    response.writeHead(200, {"Content-Type": "text/html"});
                    break;
                case ".js":
                    response.writeHead(200, {"Content-Type": "text/javascript"});
                    break;
                case ".css":
                    response.writeHead(200, {"Content-Type": "text/css"});
                    break;
                case ".gif":
                    response.writeHead(200, {"Content-Type": "image/gif"});
                    break;
                case ".jpg":
                    response.writeHead(200, {"Content-Type": "image/jpeg"});
                    break;
                case ".png":
                    response.writeHead(200, {"Content-Type": "image/png"});
                    break;
                default:
                    response.writeHead(200, {"Content-Type": "application/octet-stream"});
            }
            response.write(data);//将index.html显示在客户端
            response.end();
        }
        else {
            response.writeHeader(404,{
                'content-type' : 'text/html;charset="utf-8"'
            });
            response.write('<h1>404错误</h1><p>你要找的页面不存在</p>');
            response.end();
        }
    })
})

// post请求
server.post('/', function (request, response) {
    response.send('post请求成功');
});

//4. 绑定端口
server.listen(8000, () => {
    console.log('启动成功，端口号 8000');
});
