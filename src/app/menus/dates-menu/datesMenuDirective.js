angular.module('datesMenuDirective', [
  'DatesMenuController'
])

.directive('datesMenuDirective',
    function datesMenuDirective() {
      return {
        restrict: 'E',
        replace: true,
        scope: true,
        templateUrl: 'menus/dates-menu/dates-menu.tpl.html',
        controller: 'DatesMenuController'
      };
    }
    );
