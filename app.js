var express = require('express');
var app = express();
var morgan = require('morgan');
var path = require('path');

app.use(morgan('dev'));

app.get('/', function(req,res){
 res.send('it works!');
});

app.listen(3000, function(){

   console.log('Example app listening port 3000!');

});
