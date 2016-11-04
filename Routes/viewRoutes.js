var express = require("express");
var request = require('request');

var newRouter = express.Router();

newRouter.route('/')
          .get(function(req, res){
            var tagline = "Any thing t you want ";
            request.get('http://localhost:3000/api/agencies', function (err, response, body) {
              console.log([err, JSON.parse(body)]);

              res.render('pages/index', {
                drinks: JSON.parse(body),
                tagline: tagline
              });
            });
            //res.send("Hello books");
          });

newRouter.route('/about')
          .get(function(req, res){
              res.render('pages/about');
            });

module.exports = newRouter;
