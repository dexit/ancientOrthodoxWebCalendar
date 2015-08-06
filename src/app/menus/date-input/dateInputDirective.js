angular.module('dateInputDirective', [
  'DateInputController'
])

.directive('dateInputDirective',
    function dateInputDirective() {
      'use strict';

      return {
        restrict: 'E',
        replace: true,
        templateUrl: 'menus/date-input/date-input.tpl.html',
        scope: {
          pickerMode: '@'
        },
        controller: 'DateInputController'
      };
    }
    );
