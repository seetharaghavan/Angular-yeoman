'use strict';

angular.module('solver')
  .factory('QuestionnaireService', function($location, $rootScope, $http,$q) {

    var questionnaireUrl = "test-data/questionnaire.json";
    var questionObj = {};

    return{

      setQuestionObj:function(data){
        questionObj = data;
      },

      getQuestionnaireObject:function() {
        return questionObj;
      }

    };


  });
