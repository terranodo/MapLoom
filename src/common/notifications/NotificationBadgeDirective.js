(function () {
  var module = angular.module('loom_notification_badge_directive', []);
  module.directive('loomNotificationBadge', [
    'notificationService',
    function (notificationService) {
      return {
        restrict: 'C',
        replace: true,
        templateUrl: 'notifications/partial/notificationbadge.tpl.html',
        link: function (scope) {
          scope.notificationService = notificationService;
        }
      };
    }
  ]);
}());