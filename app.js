var express = require('express');
var app = express();
var morgan = require('morgan');
var path = require('path');
var fs = require('fs');
var mysql = require('mysql');

var ccontent= fs.readFileSync(".dbinfo.json");
var cf = JSON.parse(ccontent);


var connection = mysql.createConnection({
   host   : cf.host,
   user   : cf.user,
   password : cf.password,
   database: cf.database
});

connection.connect();
connection.query('SELECT 1 + 1 AS solution', function(err,rows,fields){
   if (err) throw err;
   console.log('The solution is: ', rows[0].solution);
});
app.use(morgan('dev'));

app.get('/', function(req,res){
 res.send('it works!');
});

app.listen(3000, function(){

   console.log('Example app listening port 3000!');
   console.log(cf.host);
});

connection.end();
