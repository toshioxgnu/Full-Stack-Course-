var express = require('express');
var BodyParser = require('body-parser');
var path = require('path');

var app = express();
var port = 3000

app.use(function(req, res, next){
	console.log('Time', Date.now());
	next();		
});

app.use(BodyParser.json());
app.use(BodyParser.urlencoded({extended: false}));
// app.use(express.static('public'));
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', function(req,res){
	res.send('Hello')
});

app.get('/about', function(req,res){
	res.send('About Page')
});
 
app.listen(port);
console.log('sever started on port '+port);

module.exports = app;