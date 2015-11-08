angular.module('starter')

.controller('AirportCtrl', function($scope, FinnairApi, $stateParams, $rootScope, $state) {
  $scope.vars = {
    whatView: 'to'
  };

  $scope.airport = $stateParams.airport;
  console.log($scope.airport);

  if ($scope.airport.airport === "HEL") {
    $scope.vars = {
      whatView: 'at'
    };
  }

  $scope.removePoints = function(points) {
    $rootScope.points -= points;
  };

  $scope.toServices = function() {
    $state.go('services');
  }

});
