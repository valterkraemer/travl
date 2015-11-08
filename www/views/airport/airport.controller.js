angular.module('starter')

.controller('AirportCtrl', function($scope, FinnairApi, $stateParams, $rootScope) {

  $scope.airport = $stateParams.airport;
  console.log($scope.airport);

  $scope.whatView = 'to';

  $scope.removePoints = function(points) {
    $rootScope.points -= points;
  };

});
