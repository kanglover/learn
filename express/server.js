var http = require('http');
var express = require('express');
var path  = require('path');
var ecstatic = require('ecstatic');
var history = require('connect-history-api-fallback');

var app = express();

app.use(history());
app.use(ecstatic({ root: __dirname + '/' }));
// app.use(express.static(path.join(__dirname, '/')));

http.createServer(app).listen(6565);