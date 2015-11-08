angular.module('starter')

.controller('FlightCtrl', function($scope, FinnairApi, $stateParams, $rootScope, $ionicModal, $state) {

  $scope.flight = $stateParams.flight;
  console.log($scope.flight);

  $scope.removePoints = function(points) {
    $rootScope.points -= points;
  };

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

  $scope.showNotification = function(flight) {
    if (flight.uniqueId = "0742015-11-14NRTHEL")  {
      $scope.modal.show();
    }
  };

  $scope.goToNextFlightInfo = function() {
    $scope.modal.hide();
    $state.go('tab.airport', {
      airport: $scope.booking.journeys[0].flights[0].arrival
    });
  };



});
