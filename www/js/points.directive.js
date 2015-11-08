angular.module('starter')

.directive('points', function($rootScope, $animate, $ionicModal) {

  return {
    restrict: 'AE',
    link: function(scope, elem, attr) {
      $rootScope.$watch('points', function(newValue, oldValue) {
        if (newValue === oldValue) return;

        $animate.addClass(elem, 'pulse').then(function() {
          elem.removeClass('pulse');
        });
      });
    },
    controller: function($scope, $element) {

      $scope.modal = $ionicModal.fromTemplateUrl('views/points.modal.html', {
        scope: $scope,
        animation: 'slide-in-up',
      }).then(function(modal) {
        $scope.modal = modal;
      });

      $scope.openModal = function() {
        $scope.modal.show();
      };
      $scope.closeModal = function() {
        $scope.modal.hide();
      };
      //Cleanup the modal when we're done with it!
      $scope.$on('$destroy', function() {
        $scope.modal.remove();
      });
      // Execute action on hide modal
      $scope.$on('modal.hidden', function() {
        // Execute action
      });
      // Execute action on remove modal
      $scope.$on('modal.removed', function() {
        // Execute action
      });

      $scope.pointsModal = function() {
        $scope.modal.show();
      };


    }
  };

});
