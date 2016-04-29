app.controller('math', ['$scope', 'equation_solver','$http',  function($scope, equation_solver, $http){
  //var Base_url = $http.post('/api/equations')
  $scope.text = "hello this is math page";
  $scope.equation = "6x^6+5x^5+4x^4+3x^3+2x^2+2x+1";
  $scope.variable_value = 1;
  $scope.differential_table_object_collection = [];
//$scope.output = solver.solver($scope.equation, $scope.variable_value);
  $scope.process = function(){
  var equation = $scope.equation
  var variable_value = $scope.variable_value;
  $scope.output = equation_solver.equation($scope.equation, $scope.variable_value);
//  $scope.save();
  return $scope.output;
}
  $scope.differential_table_object = function(){

  $scope.output.differentials.forEach(function(item){

  })
}

$scope.save = function(){
  var base_url = new Base_url();
  base_url.equation = $scope.equation;
  base_url.variable_value = $scope.variable_value;
  base_url.$save();
}

}])
