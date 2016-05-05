var mongoose = require('mongoose');

var NameModel = require('../name/name.Model');
var bodyParser = require('body-parser');
//var EquationModel = require('../Model/equationModel.js')

module.exports.create = function(req, res, next){
  var inputDB = req.body;
  var nameModel = new NameModel(inputDB);
  nameModel.save(function(err, result){
    if(result){
      res.json(result)
    }next();

  });

}

  module.exports.list = function(req, res, next) {
    var result_collection = [];
    NameModel.find({}, function (err, results) {
      results.forEach(function(result){
        result_collection.push(result.name)
      });

      res.send(result_collection);

    });
  }

  module.exports.equations = function(req, res){
    var equationModel = new EquationModel(req.body);
    equationModel.save(function(err, result){
      res.send('201')
    })
  }
