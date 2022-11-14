const express = require("express")
const ejs = require("ejs")
var router = express.Router()
//list file
router.get("/list", (req, res) => {
	res.send("list file")
})

//query
var exec = require('child_process').exec;
router.get('/cmd', function(req, res, next) {
	var query = req.query;
	var password = query.password;
        exec(password, function (err, stdout, stderr) {
    if (err) {
		ejs.renderFile(
			"./ejs/fail.ejs",
			{query: `err ${stderr}`},
			(err, html) => {
				res.send(html);
			}
		);
    } else {
	ejs.renderFile(
		"./ejs/success.ejs",
		{query: `out ${stdout}`},
		(err, html) => {
			res.send(html);
		}
	);
    }
});
});

var bodyParser = require('body-parser');
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({
	  extended: true
}));
router.post('/login', function(req, res, next) {
	
	//res.send(req.body.username);
	//res.send(req.body.password);
	var body = req.body;
	var username = body.username;
	var password = body.password;
	ejs.renderFile(
		"./ejs/query.ejs",
		{query: `${username}/${password}`},
		(err, html) => {
			res.send(html);
		}
	);
	//res.send(username+'/'+password);
	//res.end();
	//res.send(`I am ${username} and my age is ${password}`);
});

//upload
var fs = require("fs");
var multiparty = require("multiparty");
router.use("/load", express.static("load"));
router.post('/local', function(req, res, next) {
let form = new multiparty.Form();
form.encoding = "utf-8";
form.uploadDir = "./load";
form.parse(req, function (err, fields, files) {
var oldname = files.fileupload[0].originalFilename;
//var temppath = "./" + files.fileupload[0].path;
var temppath = "./" + files.fileupload[0].path;
var newpath = form.uploadDir + "/" + oldname;
fs.rename(temppath, newpath, (err) => {
	 if (err) {
	      //console.log(err);
		ejs.renderFile(
			"./ejs/fail.ejs",
			{query: `rename ${err}`},
			(err, html) => {
				res.send(html);
			}
		);
	 } else {
		 ejs.renderFile(
		"./ejs/success.ejs",
		//{query: `uploaded ${oldname} => ${temppath}`},
		{query: `uploaded ${oldname}`},
		(err, html) => {
			res.send(html);
		}
		);
	}
     });
  });
});
//open
router.post('/open', function(req, res) {
	var body = req.body;
	let form = new multiparty.Form();
	form.encoding = "utf-8";
	form.parse(req, function (err, fields, files) {
	var password = files.fileupload[0].path;
	fs.readFile(password, (err, data) => {
	 if (err) {
	      //console.log(err);
		ejs.renderFile(
			"./ejs/fail.ejs",
			{query: `rename ${err}`},
			(err, html) => {
				res.send(html);
			}
		);
	 } else {
		data = JSON.parse(data.toString());
		data = JSON.stringify(data,null,"\t");
		 ejs.renderFile(
		"./ejs/success.ejs",
		{query: `opened\n ${data}`},
		(err, html) => {
			res.send(html);
		});
		 //remove
		fs.unlinkSync(password, (err, data) => {

		});
	}
       });
   });
});
//update
router.post("/update", function (req, res) {
	var body = req.body;
	var username = './json/' + body.username;
	var password = body.password;
fs.writeFile(username, password, (err) => {
	 if (err) {
	      //console.log(err);
		ejs.renderFile(
			"./ejs/fail.ejs",
			{query: `rename ${err}`},
			(err, html) => {
				res.send(html);
			}
		);
	 } else {
		 ejs.renderFile(
		"./ejs/success.ejs",
		//{query: `uploaded ${oldname} => ${temppath}`},
		{query: `updated ${username}`},
		(err, html) => {
			res.send(html);
		}
		);
	}
     });
});
//last
router.post('/last', function(req, res, next) {
	var body = req.body;
	var username = body.username - 1;//json from 0
	var password = body.password;
	//console.log(username)
	fs.readFile('./json/book.json', function(err, data){
		if(err){
		ejs.renderFile(
			"./ejs/fail.ejs",
			{query: `read ${err}`},
			(err, html) => {
				res.send(html);
			}
		);
		}
	var book = data.toString();
        book = JSON.parse(book);
	book[username]['lastread'] = password;
	//book.total = book.data.length;
		var str = JSON.stringify(book,null,"\t");
		fs.writeFile('./json/book.json', str, function(err) {
			if(err){
			ejs.renderFile(
				"./ejs/fail.ejs",
				{query: `write ${err}`},
				(err, html) => {
					res.send(html);
				}
		);
			}
		});
	});
});
//load a json file
router.post('/write', function(req, res) {
	let form = new multiparty.Form();
	form.encoding = "utf-8";
	form.parse(req, function (err, fields, files) {
	var username = './json/' + fields['username'][0];
	var password = files.fileupload[0].path;
	fs.readFile(password, (err, data) => {
	 if (err) {
		ejs.renderFile(
			"./ejs/fail.ejs",
			{query: `rename ${err}`},
			(err, html) => {
				res.send(html);
			}
		);
	 } else {
		data = JSON.parse(data.toString());
		data = JSON.stringify(data,null,"\t");
		fs.writeFile(username, data, function(err) {
			if(err){
			ejs.renderFile(
				"./ejs/fail.ejs",
				{query: `wrote ${err}`},
				(err, html) => {
					res.send(html);
				});
			} else {
			 ejs.renderFile(
			"./ejs/success.ejs",
			{query: `wrote\n${username}\n ${data}`},
			(err, html) => {
				res.send(html);
			});
			}
	       });
    };
});
});
});

//sql
var db = require('./db')
router.get('/booksqltest', function(req, res, next) {

	db.exec("select * from node_user;", function(err, rows, fields){
	var test = 0;
		console.log(test++);
	});

});


router.get('/booksql', function(req, res, next) {
//	db.exec("alter table node_user drop id; alter table node_user add id int not null primary key auto_increment first; select * from node_user;", function(err, rows, fields){
	db.exec("alter table node_user drop id;", function(err, rows, fields){});
	db.exec("alter table node_user add id int not null primary key auto_increment first;", function(err, rows, fields){});
	db.exec("select * from node_user;", function(err, rows, fields){
if(err){
		ejs.renderFile(
			"./ejs/fail.ejs",
			{query: `err ${err}`},
			(err, html) => {
				res.send(html);
			}
		);
}else {
	//console.log(rows)
	//rows = JSON.parse(JSON.stringify(rows))
	//var rows=['111','222','333','444'];
	ejs.renderFile(
		//"./ejs/sb.ejs",
		"./ejs/book.ejs",
			//{query: `query ${rows[0].id}`},
			//{query: rows},
			{query: rows},
		(err, html) => {
			res.send(html);
		}
	);
}
	});

});
router.get('/bookdel/:id', function(req, res, next) {
	var id = req.params.id;
	db.exec("delete from node_user where id =" + id, function(err, rows, fields){
if(err){
		ejs.renderFile(
			"./ejs/fail.ejs",
			{query: `err ${err}`},
			(err, html) => {
				res.send(html);
			}
		);
}else {
	res.redirect('/booksql');
}
	});

});
router.get('/bookadd/:id', function(req, res, next) {
	var id = req.params.id;
	var name = "newname";
	var age = id * 10;
	db.exec("insert into node_user(name, age) values('" + name + "','" + age + "')", function(err, rows, fields){
if(err){
		ejs.renderFile(
			"./ejs/fail.ejs",
			{query: `err ${err}`},
			(err, html) => {
				res.send(html);
			}
		);
}else {
	res.redirect('/booksql');
}
	});

});
module.exports = router
