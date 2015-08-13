angular.module('calendarSystemMenuDirective', [
  'CalendarSystemMenuController'
])

.directive('calendarSystemMenuDirective',
    function calendarSystemMenuDirective() {
      'use strict';

      return {
        restrict: 'E',
        replace: true,
        templateUrl: 'menus/calendar-system-menu/calendar-system-menu.tpl.html',
        controller: 'CalendarSystemMenuController'
      };
    }
    );
