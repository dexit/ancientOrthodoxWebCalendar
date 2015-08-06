angular.module('datesMenuDirective', [
  'DatesMenuController'
])

.directive('datesMenuDirective',
    function datesMenuDirective() {
      'use strict';

      return {
        restrict: 'E',
        replace: true,
        templateUrl: 'menus/dates-menu/dates-menu.tpl.html',
        scope: {
          menuMode: '@'
        },
        controller: 'DatesMenuController'
      };
    }
    );
