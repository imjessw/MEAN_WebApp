console.log("hit index.js");
// Requirements
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var methodOverride = require ('method-override');
var _ = require('lodash');
console.log("loaded dependencies");


// Create the app
var app = express(); //this line creates the express application
console.log("started app");

// Add Middleware necessary for Rest api's

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(methodOverride('X-HTTP-Method-Override')); //Allows http request as in "put" ect

//cors support
app.use(function(req, res, next){
	res.header('Acess-Control-Allow-Orgin', '*');
	res.header('Acess-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
	res.header('Acess-Control-Allow-Headers', 'Content-Type');
	next();
});
console.log("configured app");


// app.use('/hello', function(req, res, next){
// 	res.send('Hello World');
// 	next();
// });


//Connect to MongoDB
mongoose.connect('mongodb://localhost/meanapp');
mongoose.connection.once('open',function(){
	//LoadAll the models
	app.models = require("./models/index");
	
	console.log('listening on port 3000');
	app.listen(3000);
});

app.use('/hello', function(req, res, next){
	res.send('Hello World');
	next();
});
