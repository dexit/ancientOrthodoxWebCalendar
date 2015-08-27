angular.module('currentDatesMenuDirective', [
])

.directive('currentDatesMenuDirective',
    function currentDatesMenuDirective($parse,
      moment, pathService, menuSettingsService) {
      return {
        restrict: 'E',
        replace: true,
        scope: true,
        templateUrl: 'menus/current-dates-menu/current-dates-menu.tpl.html',
        link: function ($scope, element, attrs) {
          const today = moment();
          $scope.settings = menuSettingsService[attrs.menuMode];

          $scope.setCurrent = function() {
            pathService.setPath(
              menuSettingsService[attrs.menuMode].pathFormat, today);
          };
        }
      };
    });
