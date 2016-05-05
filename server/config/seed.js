/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var mongoose = require('mongoose'),
    userModel = require('../api/users/userModel'),
    nameModel = require('../api/name/name.Model'),
    equationModel = require('../api/equation/equation.model');


function populateSampleData(){
  nameModel.findOne({name: "Raghavan"}, function(err, result){
    if(result) {return(console.log("sample data already feeded"));}
    else {
      nameModel.create({
        name: 'Raghavan'
      });
      console.log("sample data created")
    }
  });
}


function createSampleUser(){
  userModel.findOne({email: "seetharaghavan8@gmail.com"}, function(err, result){
  if(result){return console.log("admin already created")}
    else{
    userModel.create({
      email: "seetharaghavan8@gmail.com",
      password: "seetharaghavan8"
    });
    console.log("admin created")
  }
  })
}

function populateSampleEquation(){
  equationModel.findOne({equation: "6x^6+5x^5+4x^4+3x^3+2x^2+2x+1"}, function(err, result){
    if(result){return console.log("equation already created")}
    else{
      equationModel.create({
        equation: "6x^6+5x^5+4x^4+3x^3+2x^2+2x+1",
        variable_value: "1"
      });
      console.log("equation sample created");
    }
  })
}

populateSampleData();
createSampleUser();
populateSampleEquation();

