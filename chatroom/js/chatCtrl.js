var app = angular.module('chatroom');

app.controller('mainCtrl', function($scope, parseService){
  
  $scope.getParseData = function(){
    parseService.getData().then(function(results){
      $scope.messages = results
    })
  }

  
   setInterval(function(){
    $scope.getParseData();
  }, 1500)

   $scope.postData = function(){
  parseService.postData($scope.message)
  $scope.message = "";
}


$scope.formatDate = function(dateString){
  return new Date(dateString).toLocaleString();
}


})

