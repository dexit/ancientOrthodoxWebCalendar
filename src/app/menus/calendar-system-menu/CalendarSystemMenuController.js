angular.module('CalendarSystemMenuController', [
])

.controller('CalendarSystemMenuController',
    function CalendarSystemMenuController($scope) {
      'use strict';

      $scope.calendarSystemModel = 'gregorian';

      $scope.setSystem = function() {
        $scope.$emit('calendarSystem', $scope.calendarSystemModel);
      };
});
