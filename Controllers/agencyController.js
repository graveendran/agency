var agencyController = function(Agency){
  
  var post = function(req, res){
        var newAgency = new Agency(req.body);
        newAgency.save(function(err){
          if (err)
            console.log('Error when saving newAgency');
        });
        console.log(newAgency);
        res.status(201).send(newAgency);
  }

  var get = function(req, res){
    var query = {};
    if (req.query.agencyName)
    {
      query.agencyName = req.query.agencyName;
    }
    Agency.find(query, function(err, agencies){
      if (err)
        res.status(500).send(err);
      else {
        res.json(agencies);
      }
    });
  }

  var getById = function(req, res){
    Agency.findById(req.params.id, function(err, agency){
      if (err)
      {
        res.status(500).send(err);
        console.log(err);
      }
      else {
        res.json(agency);
      }
    });
  }

  var putById = function(req, res){
    Agency.findById(req.params.id, function(err, agency){
      if (err)
        res.status(400).send(err);
      else
        {
          agency.agencyName = req.body.agencyName;
          agency.agencyAddress = req.body.agencyAddress;
          agency.save(function(err){
            if (err)
              res.status(400).send(err);
            else {
              res.json(agency);
            }
          });
        }
    });
  }

  return {
    post: post,
    get: get,
    getById: getById,
    putById: putById
  }
};


module.exports = agencyController;
