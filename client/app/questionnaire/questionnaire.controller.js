'use strict';

angular.module('solver')
  .controller('QuestionnaireCtrl', function ($scope, $location, questionnaireObject,$sce) {

    init();

    function init() {

      $scope.questionnaireObj = questionnaireObject.data;
      var questionList = $scope.questionnaireObj.questions;
      var totalNumberOfQuestions = $scope.questionnaireObj.totalQuestions;

      $scope.itemsPerPage = 1;
      $scope.currentPage = 1;
      $scope.totalItems = totalNumberOfQuestions;

      var begin = (($scope.currentPage - 1) * $scope.itemsPerPage),
        end = begin + $scope.itemsPerPage;
      $scope.questions = questionList.slice(begin, end);

      $scope.uploadedQuestionSummary = $scope.questionnaireObj.questionSummary;

      var questionsWithDirectives = $scope.uploadedQuestionSummary.questionsWithDirectives;
      $scope.questionsWithDirectives = questionsWithDirectives.join(",");

    }

    $scope.trustedHtml = function(html){
      return $sce.trustAsHtml(html);
    };

    $scope.pageChanged = function () {

      var begin = (($scope.currentPage - 1) * $scope.itemsPerPage),
        end = begin + $scope.itemsPerPage;
      $scope.questions = $scope.questionnaireObj.questions.slice(begin, end);

    };

    $scope.sortOptions = function(options){

      var questionOptions = _.sortBy(options, function(option){
        return option.name;
      });

      return questionOptions;

    };


    $scope.onShowStatistics = function(){
      $scope.statisticsModalShown = true;


      $scope.onClose = function () {
        $scope.statisticsModalShown = false;

      };
    }


  });
