angular.module('starter')

.controller('MainCtrl', function($scope, FinnairApi) {

  FinnairApi.setMembernumber('680297298');

  FinnairApi.init().then(function() {

    FinnairApi.getProfile().success(function(data) {
      console.log(data);
    });

  });

});
