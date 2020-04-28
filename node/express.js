var express = require('express');
var app = new express();
var fs = require("fs");
var bodyParser = require('body-parser');
//创建application/json解析
var jsonParser = bodyParser.json();

app.all("*", function (req, res, next) {
    //设置允许跨域的域名，*代表允许任意域名跨域
    res.header("Access-Control-Allow-Origin", "*");
    //允许的header类型
    res.header("Access-Control-Allow-Headers", "content-type");
    //跨域允许的请求方式 
    res.header("Access-Control-Allow-Methods", "DELETE,PUT,POST,GET,OPTIONS");
    if (req.method.toLowerCase() == 'options')
        res.send(200); //让options尝试请求快速结束
    else
        next();
})

app.get('/api/view', function (req, res) {
    fs.readFile(__dirname + "/users.json", 'utf8', function (err, data) {
        console.log(data);
        res.end(data);
    });
})

app.post('/api/save', jsonParser, function (req, res) {
    console.log(req.body)
    fs.writeFile(__dirname + "/users.json", JSON.stringify(req.body), { 'flag': 'w' }, function (err) {
        console.log(err)
    });
    res.send({ "status": "ok" });
})

var server = app.listen(8081, function () {
    console.log("访问地址为 http://127.0.0.1:8081")
})
