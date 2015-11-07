angular.module('starter')

.factory('FinnairApi', function($q, $resource, $http) {

  var baseUrl = 'https://slush.ecom.finnair.com/api';

  var appId = 'travl';
  var user = 'testUser';

  var serviceTicket;
  var accessToken;
  var membernumber;

  var deferred = $q.defer();

  $http({
    url: baseUrl + '/oauth2.0/authorize',
    method: 'GET',
    params: {
      appId: appId,
      user: user,
      redirect_url: ''
    }
  }).success(function(data) {

    serviceTicket = data.service_ticket;

    $http({
      url: baseUrl + '/oauth2.0/accessToken',
      method: 'GET',
      params: {
        appId: appId,
        user: user,
        code: serviceTicket,
        redirect_url: ''
      }
    }).success(function(data) {
      accessToken = data.access_token;
      deferred.resolve();

      console.log(accessToken);
    }).error(function(err) {
      console.error(err);
    });
  }).error(function(err) {
    console.error(err);
  });

  return {
    setMembernumber: function(nr) {
      membernumber = nr;
    },
    init: function() {
      return deferred.promise;
    },
    getProfile: function() {
      return $http({
        url: baseUrl + '/profile',
        method: 'GET',
        params: {
          appId: appId,
          membernumber: membernumber,
          accessToken: accessToken
        }
      });
    },
    getBookingDetails: function(pnr) {
      //https://slush.ecom.finnair.com/api/getbookingdetails
      return $http({
        url: baseUrl + '/getbookingdetails',
        method: 'GET',
        params: {
          appId: appId,
          pnr: pnr,
          accessToken: accessToken
        }
      });
    }
  };

});
