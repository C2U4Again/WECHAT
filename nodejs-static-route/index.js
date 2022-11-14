var express = require('express')
var app = express()
app.use('/', express.static('html')); //first is for browser, second is the folder
app.use('/json', express.static('json')); //added json
app.use('/log', express.static('log')); //added log
/*
var url = require('url');
var http = require('http');
var queryString = require('querystring');
*/
var serveIndex = require('serve-index');
app.use('/load', serveIndex('load', {'icons': true}));
app.use('/load', express.static('load'));

var fs = require('fs');
var path = require('path'); 
var morgan = require('morgan'); 
var FileStreamRotator = require('file-stream-rotator')
var logDirectory = path.join(__dirname, 'log')
fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory)
var accessLogStream = FileStreamRotator.getStream({
  date_format: 'YYYYMMDD',
  filename: path.join(logDirectory, 'access-%DATE%.log'),
  frequency: 'daily',
  verbose: false
})
morgan.format('joke', '[:remote-addr]=>[:date[clf]] :method :url :status');
app.use(morgan('joke', {stream: accessLogStream}))
//sql

//route
var route = require('./route');
app.use(route);

var port = 8083;
app.listen(port)
console.log(" Listening : ", port)
