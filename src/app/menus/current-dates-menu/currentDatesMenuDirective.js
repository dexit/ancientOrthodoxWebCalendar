angular.module('currentDatesMenuDirective', [
  'CurrentDatesMenuController'
])

.directive('currentDatesMenuDirective',
    function currentDatesMenuDirective() {
      'use strict';

      return {
        restrict: 'E',
        replace: true,
        scope: {
          menuMode: '@'
        },
        templateUrl: 'menus/current-dates-menu/current-dates-menu.tpl.html',
        controller: 'CurrentDatesMenuController'
      };
    }
    );
