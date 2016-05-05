var mongoose = require('mongoose');

module.exports = mongoose.model('name',{
  name: {type: String, isRequired: true}
});

