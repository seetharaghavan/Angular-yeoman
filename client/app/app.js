'use strict';

var app = angular.module('solver', [
  'ngResource',
  'ngSanitize',
  'ui.router',
  'ui.bootstrap'
])
  app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider
      .otherwise('/');
      
$stateProvider

  .state('#', {
      templateUrl: 'app/nodeJs/nodejs.html'
    })
    
   .state('home', {
      url: '/home',
      templateUrl: 'app/homepage/home.html',
      controller: 'homepage'
    })

    .state('maths', {
      url: '/maths',
      templateUrl: 'app/math/maths.html',
      controller: 'math'
  })
  
  }])


