var express = require('express');
var path = require('path');
var app = express();
var index = require('./router/index');
app.set('views', path.join(__dirname, 'templates'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use('*', index);
var port = process.env.PORT || 8080;
var server=app.listen(port,function(req,res){
    console.log("listening to :"+port);
});
