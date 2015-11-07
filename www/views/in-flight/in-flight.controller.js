angular.module('starter')

.controller('InFlightController', function($scope, $ionicModal, $state) {

  $ionicModal.fromTemplateUrl('views/in-flight/notification.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal = modal;
  });

  $scope.showNotification = function() {
    $scope.modal.show();
  };

  $scope.goToNextFlightInfo = function() {
    $scope.modal.hide();
    $state.go('tab.nextFlight');
  };

});
