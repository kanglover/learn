const http = require('http');
const url = require('url');
const fs = require('fs');

// 创建一个 server，get 请求返回图片，post 请求返回
const server = http.createServer((req, res) => {

    // 设置跨域域名 *
    res.setHeader("Access-Control-Allow-Origin", "*");
    // 允许的header类型
    res.setHeader("Access-Control-Allow-Headers", "content-type");
    // 允许的请求方式 
    res.setHeader("Access-Control-Allow-Methods", "DELETE,PUT,POST,GET,OPTIONS");

    // 定义公共变量，存储请求方法、路径、数据
    const method = req.method;
    // 使用 url.parse 解析 get 数据, 第二个参数为true，query属性会生成一个对象
    const { pathname, query } = url.parse(req.url, true);
    if (req.url != "/favicon.ico") {
        // 判断请求方法为 GET 还是 POST，区分处理数据
        if (method === 'GET') {
            // 取 /a.png => a.png
            const fileName = pathname.substr('1');
            fs.readFile(fileName, (err, data) => {
                if (err) {
                    console.log(err);
                    res.writeHead(404, { 'Content-Type': 'text/html;charset=utf-8' });
                    res.end('没找到相应文件');
                }
                else {
                    res.writeHead(200, { 'Content-Type': 'image/png' });
                    var stream = fs.createReadStream(fileName);
                    var responseData = [];//存储文件流
                    if (stream) {//判断状态
                        stream.on('data', function (chunk) {
                            responseData.push(chunk);
                        });
                        stream.on('end', function () {
                            var finalData = Buffer.concat(responseData);
                            res.write(finalData);
                            res.end();
                        });
                    }
                }
            });
        }
        else if (method === 'POST') {
            let rawData = '';
            req.on('data', (chunk) => {
                console.log(`chunk: ${chunk}`);
                rawData += chunk;
            });

            req.on('end', () => {
                res.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' });
                console.log(`提交数据 ${rawData}`);
                res.end("数据提交完毕");
            });

            req.on('error', (e) => {
                console.error(`请求遇到问题: ${e.message}`);
            });
        }
    }
}).listen(8080, () => {
    console.log('开启服务器 http://127.0.0.1:8080');
})
