angular.module('starter')

.controller('ServicesController', function($scope, $state, $rootScope, $ionicModal) {

  $scope.goToShop = function() {
    $state.go('shop');
  };

  $ionicModal.fromTemplateUrl('views/buy-service/buy-service.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.buyServiceModal = modal;
  });

  $scope.showBuyServiceModal = function() {
    $scope.buyServiceModal.show();
  };

  $scope.hideBuyServiceModal = function() {
    $scope.buyServiceModal.hide();
    $scope.removePoints(26);
    // JUST BOUGHT SHIT
  };

  $scope.removePoints = function(points) {
    $rootScope.points -= points;
  };


});
