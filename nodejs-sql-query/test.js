const db = require('./dbhelper');
db.query('SELECT id,name,age FROM node_user', [], function(result, fields) {
    console.log('查询结果：');
    console.log(result);
});
