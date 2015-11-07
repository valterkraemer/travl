angular.module('starter')

.controller('NextFlightCtrl', function($scope, FinnairApi) {

  FinnairApi.init().then(function() {

    FinnairApi.getProfile().success(function(data) {
      console.log(data);
    });

  });

});
