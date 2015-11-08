angular.module('starter')

.directive('purchaseNotification', function($rootScope, $animate) {

  return {
    restrict: 'AE',
    link: function(scope, elem, attr) {
      $rootScope.$watch('points', function(newValue, oldValue) {
        if (newValue === oldValue) return;

        $animate.addClass(elem, 'show-notification').then(function() {
          elem.removeClass('show-notification');
        });
      });
    }
  };

});
