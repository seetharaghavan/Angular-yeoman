app.controller("homepage",['$scope', '$http', '$resource',  function($scope, $http, $resource){
  var Base_url = $resource('/api/names');
  $scope.text = "hello world!";
  $scope.hometext = "homepage";
  $scope.names = [];
  $scope.pageSize = 5;
  $scope.currentPage = 1;
  Base_url.query(function(results){
     results.forEach(function(result){
       $scope.names.push(result.name);
     })

  });

  $scope.pageChangeHandler = function(num) {
      console.log('Page ' + num);
  };


  $scope.add = function(){
    //var base_url = new Base_url();
    //base_url.name = $scope.additionalNames;
    //base_url.$save(function(result){
    //$scope.names.push(result.name);
    //});
    $scope.names.push($scope.additionalNames);
    $scope.additionalNames = "";



  }
}])
