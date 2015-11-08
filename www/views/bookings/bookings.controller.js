angular.module('starter')

.controller('BookingsCtrl', function($scope, FinnairApi, $state) {

  $scope.bookings = [];

  FinnairApi.init().then(function() {

    FinnairApi.getProfile().success(function(data) {
      console.log(data);
      data.bookings.forEach(function(booking) {
        FinnairApi.getBookingDetails(booking.PNR).success(function(data) {

          console.log('bookingData', data);
          $scope.bookings.push(data);
        });
      });
    });

  });

  $scope.goToFlight = function(flight) {
    console.log(flight);

    $state.go('tab.flight', {
      flight: flight
    });
  };

  $scope.goToAirport = function(airport) {
    console.log(airport);

    $state.go('tab.airport', {
      airport: airport
    });
  };

});
