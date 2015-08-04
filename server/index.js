
// Requirements
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var methodOverride = require ('method-override');
var _ = require('lodash');

// Create the app
var app = express(); //this line creates the express application

// Add Middleware necessary for Rest api's

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(methodOverride('X-HTTP-Method-Override')); //Allows http request as in "put" ect


//Connect to MongoDB
mongoose.connect('mongodb://localhost/MeanApp');
mongoose.connection.once('open',function(){
	console.log('listening on port 3000');
	app.listen(3000);
})