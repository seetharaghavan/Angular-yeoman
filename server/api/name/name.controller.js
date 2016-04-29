var mongoose = require('mongoose'); 

var NameModel = require('../name/name.Model.js');
var bodyParser = require('body-parser');
//var EquationModel = require('../Model/equationModel.js')

module.exports.create = function(req, res){
  var nameModel = new NameModel(req.body);
  nameModel.save(function(err, result){
    res.json(result)
  });

}

  module.exports.list = function(req, res){
    NameModel.find({}, function(err, results){
      res.json(results)

    })
  }

  module.exports.equations = function(req, res){
    var equationModel = new EquationModel(req.body);
    equationModel.save(function(err, result){
      res.send('201')
    })
  }