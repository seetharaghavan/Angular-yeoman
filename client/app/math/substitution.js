app.controller("substitution",['$scope', '$resource',  function($scope, $resource){
  var Base_url = $resource('/api/names')
  $scope.text = "hello world!"
  $scope.names = [];
  Base_url.query(function(results){
    results.forEach(function(result){
      $scope.names.push(result.name);
    })

  });
  $scope.add = function(){
    var base_url = new Base_url();
    base_url.name = $scope.additionalNames;
    base_url.$save(function(result){
      $scope.names.push(result.name);
    });

    $scope.additionalNames = "";

    console.log($scope.names)

  }
}])
