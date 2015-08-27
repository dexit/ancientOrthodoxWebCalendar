angular.module('calendarSystemMenuDirective', [
])

.directive('calendarSystemMenuDirective',
    function calendarSystemMenuDirective(notifyingService) {
      return {
        restrict: 'E',
        replace: true,
        templateUrl: 'menus/calendar-system-menu/calendar-system-menu.tpl.html',
        link: function ($scope) {
          $scope.calendarSystemModel = 'gregorian';

          $scope.setSystem = function () {
            notifyingService.notify($scope.calendarSystemModel);
          };
        }
      };
    });
