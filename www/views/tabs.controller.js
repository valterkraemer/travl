angular.module('starter')

.controller('TabsController', function($scope, $ionicModal, $state) {

  $ionicModal.fromTemplateUrl('views/mood/mood.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.moodModal = modal;
  });

  $scope.showMoodModal = function() {
    $scope.moodModal.show();
  };

  $scope.hideMoodModal = function() {
    $scope.moodModal.hide();
  };

});
