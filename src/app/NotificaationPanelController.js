(function () {
  var module = angular.module('loom_notification_controller', []);
  module.controller('LoomNotificationController', [
    '$scope',
    '$translate',
    'notificationService',
    function ($scope, $translate, notificationService) {
      $scope.notificationStartTime = $translate.instant('since_time', { time: notificationService.startTime });
    }
  ]);
}());