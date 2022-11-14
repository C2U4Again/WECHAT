var mysql = require('mysql');
var db = {};
var pool = mysql.createPool({
        host: 'localhost',
        user: 'root',
        password: 'nanshou22',
        database: 'test',
	//multipleStatements:true
});

var exec = function (sql, params, callback) {
    pool.getConnection(function (err, con) {
        if (err) {
			//console.log(err)
            callback(err, null, null);
        } else {
            if (params === null || params.length == 0) {
                con.query(sql, function (err, results, fields) {
                    con.release();
                    callback(err, results, fields);
                })
            } else {
                con.query(sql, params, function (err, results, fields) {
                    con.release();
                    callback(err, results, fields);
                })
            }
        }
    });
}

db.exec = exec;

module.exports = db;
