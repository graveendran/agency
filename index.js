/*jslint node: true */
"use strict";

var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var request = require('request');

var db = mongoose.connect('mongodb://localhost: 27017/agencyAPI');

var Agency = require('./models/agencyModel');

var app = express();

//set the view engines to ejs
app.set('view engine', 'ejs');

var port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var agencyRouter = require('./Routes/agencyRoutes')(Agency);
var viewRouter = require('./Routes/viewRoutes');

app.use('/api/agencies', agencyRouter);

app.use('/', viewRouter);

// app.get('/', function(req, res){
//
//
// });

// app.get('/about', function(req, res){
//   res.render('pages/about');
// });

app.listen(port, function(){
  console.log('Agency API is running, press CTRL + C to stop. PORT' + port);
});
