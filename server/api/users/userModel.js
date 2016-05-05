/**
 * Created by raghavan on 04-05-2016.
 */

var mongoose = require('mongoose');

module.exports =  mongoose.model('user', {
  email: String,
  password: String
})
