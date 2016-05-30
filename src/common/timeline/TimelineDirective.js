(function () {
  var module = angular.module('loom_timeline_directive', []);
  var elementSlider_ = null;
  module.directive('loomTimeline', [
    '$rootScope',
    'timelineService',
    '$timeout',
    function ($rootScope, timelineService, $timeout) {
      return {
        restrict: 'C',
        replace: true,
        templateUrl: 'timeline/partials/timeline.tpl.html',
        link: function (scope, element) {
          scope.isPlaying = timelineService.isPlaying;
          scope.timeMin = null;
          scope.timeMax = null;
          scope.timeCurrentPercent = 0;
          scope.timeCurrentPercentToolTip = '';
          scope.timelineService = timelineService;
          scope.getRepeat = timelineService.getRepeat;
          scope.setRepeat = timelineService.setRepeat;
          scope.setFilterByTime = timelineService.setFilterByTime;
          scope.getFilterByTime = timelineService.getFilterByTime;
          var sliders = element.find('.timeline-slider');
          elementSlider_ = sliders[0];
          sliders.popover('hide');
          scope.$on('timeline-timeupdated', function (event, newTime) {
            var percent = 0;
            if (goog.isDefAndNotNull(newTime)) {
              percent = timelineService.timeToPercent(newTime);
            }
            scope.timeCurrentPercent = percent;
            scope.timeCurrentPercentToolTip = new Date(newTime).toUTCString();
            sliders.data('bs.popover').options.content = scope.timeCurrentPercentToolTip;
            if (sliders.parent().is(':visible')) {
              sliders.popover('show');
            }
          });
          scope.$on('timeline-initialized', function () {
            if (elementSlider_.hasAttribute('min') && elementSlider_.hasAttribute('max') && elementSlider_.hasAttribute('step')) {
              var list = $('#timesliderTickDataList')[0];
              var timelineTicks = timelineService.getTimelineTicks();
              list.innerHTML = '';
              for (var i = 0; i < timelineTicks.length; i++) {
                list.innerHTML += '<option value=' + Math.round(timelineService.timeToPercent(Date.parse(timelineTicks[i]))) + '></option>';
              }
              elementSlider_.parentNode.insertBefore(list, elementSlider_.nextSibling);
            }
            $timeout(function () {
              sliders.popover('show');
              $('.timeline-background2 .popover-content').click(function () {
                sliders.popover('hide');
              });
            });
          });
          scope.$watch('timeCurrentPercent', function (newPercent) {
            var time = timelineService.percentToTime(newPercent);
            var currentTime = timelineService.getTimeCurrent();
            if (goog.isDefAndNotNull(currentTime) && time !== currentTime) {
              var closestTick = timelineService.getClosestTick(time, 1);
              if (goog.isDefAndNotNull(closestTick)) {
                timelineService.setTimeTickIndex(closestTick);
              } else {
                timelineService.setTimeCurrent(time);
              }
            }
          });
          scope.onPlay = function () {
            timelineService.start();
            sliders.popover('show');
          };
          scope.onPause = function () {
            timelineService.stop();
            sliders.popover('show');
          };
          scope.onNextTick = function () {
            timelineService.setTimeNextTick();
          };
          scope.onPrevTick = function () {
            timelineService.setTimePrevTick();
          };
        }
      };
    }
  ]);
}());