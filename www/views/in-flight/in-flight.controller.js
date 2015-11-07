angular.module('starter')

.controller('InFlightController', function($scope, $ionicModal, $state, FinnairApi) {

  $ionicModal.fromTemplateUrl('views/in-flight/notification.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal = modal;
  });

  $scope.booking = null;

  FinnairApi.init().then(function() {
    FinnairApi.getProfile().success(function(data) {
      FinnairApi.getBookingDetails(data.bookings[0].PNR).success(function(data){
        $scope.booking = data;
      });
    });
  });

  $scope.showNotification = function() {
    $scope.modal.show();
  };

  $scope.goToNextFlightInfo = function() {
    $scope.modal.hide();
    $state.go('tab.flight', {
      flight: $scope.booking.journeys[0].flights[1]
    });
  };

});
