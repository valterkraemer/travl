angular.module('starter')

.controller('AirportCtrl', function($scope, FinnairApi, $stateParams, $rootScope) {

  $scope.airport = $stateParams.flight;
  console.log($scope.airport);

  $scope.removePoints = function(points) {
    $rootScope.points -= points;
  };

});
