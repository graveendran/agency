/*jslint node: true */

"use strict";

var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var db = mongoose.connect('mongodb://localhost: 27017/agencyAPI');

var Agency = require('./models/agencyModel');

var app = express();

//set the view engines to ejs
app.set('view engine', 'ejs');

var port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var agencyRouter = require('./Routes/agencyRoutes')(Agency);

app.use('/api/agencies', agencyRouter);

app.get('/', function(req, res){
  var drinks = [
    {name: 'Bloody Mary', drunkness: 3},
    {name: 'Martini', drunkness: 5},
    {name: 'Scotch', drunkness: 10}
  ];
  var tagline = "Any thing that you want ";
  res.render('pages/index', {
    drinks: drinks,
    tagline: tagline
  });
});

app.get('/about', function(req, res){
  res.render('pages/about');
});

app.listen(port, function(){
  console.log('Agency API is running, press CTRL + C to stop');
});
