angular.module('starter')

.controller('AirportCtrl', function($scope, FinnairApi, $stateParams, $rootScope) {
  $scope.vars = {
    whatView: 'to'
  };

  $scope.airport = $stateParams.airport;
  console.log($scope.airport);

  if ($scope.airport.airport === "HEL") {
    $scope.whatView = 'at';
  }

  $scope.removePoints = function(points) {
    $rootScope.points -= points;
  };

});
