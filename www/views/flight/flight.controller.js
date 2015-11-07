angular.module('starter')

.controller('FlightCtrl', function($scope, FinnairApi, $stateParams, $rootScope) {

  $scope.flight = $stateParams.flight;
  console.log($scope.flight);

  $scope.removePoints = function(points) {
    $rootScope.points -= points;
  };

});
