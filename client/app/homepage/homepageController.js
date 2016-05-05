app.controller("homepage",['$scope', '$http','$q',   function($scope, $http, $q){

  $scope.text = "hello world!";
  $scope.hometext = "homepage";
  $scope.names = [];
  $scope.pageSize = 5;
  $scope.currentPage = 1;


  $scope.pageChangeHandler = function(num) {
      console.log('Page ' + num);
  };

  list().then(function(data){
    $scope.names = (data);
  });
  console.log($scope.names)
   function list(){
    var defer = $q.defer();
    $http.get('/api/names/list').success(function(data){
      defer.resolve(data)
    }).error(function(err){
      defer.reject(err);
    });
     return defer.promise;
  }
  $scope.add = function(){

    $http.post('/api/names/add', {name: $scope.additionalNames})
    $scope.names.push($scope.additionalNames);
    $scope.additionalNames = "";



  }
}])
