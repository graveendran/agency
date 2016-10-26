var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var agencyModel = new Schema({
  agencyId: {
      type: String
  },
  agencyName: {
      type: String
  },
  agencyAddress: {
    type: String
  }
});

module.exports = mongoose.model('Agency', agencyModel);
