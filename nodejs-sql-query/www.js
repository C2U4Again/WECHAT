const db = require('./dbhelper');
let express = require('express');
let app = express();
let arr = [];
db.query('SELECT id,name,age FROM node_user', [], function(result, fields) {
    app.get('/booksql', function(req, res) {
        res.send(result);
    });
});
app.listen(80);
