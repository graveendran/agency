var should = require('should'),
    sinon = require('sinon');

describe('Agency Controller Tests:', function(){
  describe('Post', function(){
    it('should not allow an empty Agency Name on post', function(){
      var Agency = function(book){this.save= function(){}};


      var req = {
        body : {
            agencyAddress: '1234 Test User'
        }
      }
    })
  })
})
