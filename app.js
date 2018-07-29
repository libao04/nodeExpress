var express = require('express');
var http = require('http');
var path = require('path');

var app = express();

var interface = require('./router/test')

app.use('/common1',interface)

app.use(express.static(path.join(__dirname, 'public')));


http.createServer(app).listen(8000)
console.log(123)
