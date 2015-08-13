angular.module('PaschalionController', [
  'ui.router'
])

.controller('PaschalionController',
    function PaschalionController (
      $scope, $state, $stateParams,
        getDataService, calendarSystemService) {
      'use strict';
      // FIXME in a future this duplicate code:

      // Initial when the page loading
      getDataService.paschalion.get({
        year: $stateParams.year,
        calendar: 'gregorian'
      })
        .$promise.then(function(data) {
          // success
          $scope.calendarSystem = calendarSystemService.getText('gregorian');
          $scope.paschalion = data.paschalion[0];
         }, function(errResponse) {
            // fail
      });

      // Listening calendar system changing
      $scope.$on('calendarSystem', function(event, system) {

        getDataService.paschalion.get({
          year: $stateParams.year,
          calendar: system
        })
          .$promise.then(function(data) {
            // success
            $scope.calendarSystem = calendarSystemService.getText(system);
            $scope.paschalion = data.paschalion[0];

            }, function(errResponse) {
              // fail
            });
      });
    });
