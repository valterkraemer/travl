angular.module('starter')

.controller('ServicesController', function($scope, $state) {

  $scope.goToShop = function() {
    $state.go('shop');
  };

});
