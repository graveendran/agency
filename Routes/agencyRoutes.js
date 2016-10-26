var express = require('express');

var routes = function(Agency){
  var agencyRouter = express.Router();
  var agencyController = require('../Controllers/agencyController')(Agency);

  agencyRouter.route('/')
                .post(agencyController.post)
                .get(agencyController.get);

  agencyRouter.route('/:id')
              .put(agencyController.putById)
              .get(agencyController.getById);

    return agencyRouter;
};

module.exports = routes
