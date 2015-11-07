angular.module('starter')

.directive('points', function($rootScope, $animate) {

  return {
    restrict: 'AE',
    link: function(scope, elem, attr) {
      $rootScope.$watch('points', function(newValue, oldValue) {
        if (newValue === oldValue) return;

        $animate.addClass(elem, 'pulse').then(function() {
          elem.removeClass('pulse');
        });
      });

    }
  };

});
