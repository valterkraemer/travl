angular.module('starter')

.controller('FlightCtrl', function($scope, FinnairApi, $stateParams) {

  $scope.flight = $stateParams.flight;
  console.log($scope.flight);

});
