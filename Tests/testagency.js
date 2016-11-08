process.env.NODE_ENV = "test";

let mongoose = require('mongoose');
let agency = require('../models/agencyModel');

let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../index');

chai.use(chaiHttp);

describe('Agency', () => {
  beforeEach((done) => {
    agency.remove({}, (err) => {
      done();
    });
  });

  describe('/GET agency', () => {
    it('it should GET all the agencies', (done) => {
      chai.request(server)
          .get('/agencies')
          .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('array');
            res.body.length.should.be.eql(0);
          done();
          })
    });
  });
});
