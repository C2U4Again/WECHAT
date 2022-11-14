var express = require('express');
var app = express();
 
app.get('/booksql', function (req, res) {
	   res.send('Hello World');
})
 
var port = 80;
app.listen(port)
console.log(" Listening : ", port)
