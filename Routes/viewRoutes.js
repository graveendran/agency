const express = require("express");
const request = require('request');

const newRouter = express.Router();

newRouter.route('/')
          .get((req, res) => {
            var tagline = "Any thing t you want ";
            request.get('http://localhost:3000/api/agencies', (err, response, body) => {
              console.log([err, JSON.parse(body)]);

              res.render('pages/index', {
                drinks: JSON.parse(body),
                tagline: tagline
              });
            });
          });

newRouter.route('/about')
          .get((req, res) => {
              res.render('pages/about');
            });

module.exports = newRouter;
