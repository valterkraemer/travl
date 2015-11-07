// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'ngResource', 'ngCordova'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      //StatusBar.styleDefault();
      StatusBar.style(1);
    }
  });
})

.run(function(FinnairApi) {
  FinnairApi.setMembernumber('680297298');
})

// .constant('ApiEndpoint', {
//  url: 'https://slush.ecom.finnair.com/api/'
// })

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

    .state('login', {
    url: '/login',
    templateUrl: 'views/login/login.html'
  })

  .state('getStarted', {
    url: '/getStarted',
    templateUrl: 'views/get-started/get-started.html'
  })

  // setup an abstract state for the tabs directive
  .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'views/tabs.html',
    controller: 'TabsController'
  })

  .state('tab.in-flight', {
    url: '/in-flight',
    views: {
      'tab-inflight': {
        templateUrl: 'views/in-flight/in-flight.html',
        controller: 'InFlightController'
      }
    }
  })

  .state('tab.flight', {
    url: '/flight',
    views: {
      'tab-bookings': {
        templateUrl: 'views/flight/flight.html',
        controller: 'FlightCtrl'
      }
    },
    params: {
      flight: null
    }
  })

  .state('tab.bookings', {
    url: '/bookings',
    views: {
      'tab-bookings': {
        templateUrl: 'views/bookings/bookings.html',
        controller: 'BookingsCtrl'
      }
    }
  })

  .state('tab.mood', {
    url: '/mood',
    views: {
      'tab-mood': {
        templateUrl: 'views/mood/mood.html',
        controller: 'TabsController'
      }
    }
  })
  // Each tab has its own nav history stack:

  .state('tab.main', {
    url: '/main',
    views: {
      'tab-main': {
        templateUrl: 'views/main/main.html',
        controller: 'MainCtrl'
      }
    }
  });

  /*.state('tab.chats', {
      url: '/chats',
      views: {
        'tab-chats': {
          templateUrl: 'templates/tab-chats.html',
          controller: 'ChatsCtrl'
        }
      }
    })
    .state('tab.chat-detail', {
      url: '/chats/:chatId',
      views: {
        'tab-chats': {
          templateUrl: 'templates/chat-detail.html',
          controller: 'ChatDetailCtrl'
        }
      }
    })

  .state('tab.account', {
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: 'templates/tab-account.html',
        controller: 'AccountCtrl'
      }
    }
  });*/

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/login');

});
