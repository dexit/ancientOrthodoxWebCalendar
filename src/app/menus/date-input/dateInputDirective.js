angular.module('dateInputDirective', [
  'DateInputController'
])

.directive('dateInputDirective',
    function dateInputDirective() {
       return {
        restrict: 'E',
        replace: true,
        templateUrl: 'menus/date-input/date-input.tpl.html',
        controller: 'DateInputController'
      };
    }
    );
