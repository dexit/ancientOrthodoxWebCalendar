angular.module('DaysController', [
  'ui.router'
])

.controller('DaysController',
    function DaysController(
    $scope, $state, $stateParams, moment, getDataService) {
      'use strict';

      let paramsDate = moment({
        'year': $stateParams.year,
        'month': $stateParams.month - 1,
        'day': $stateParams.day
      });

      let today = moment().format('YYYY-MM-DD');

      let dateFormat;

      if (paramsDate.isSame(today)) {
        dateFormat = 'Сегодня, D MMMM YYYY года';
      }
      else {
        dateFormat = 'Календарь на  D MMMM YYYY года';
      }
      $scope.dateFormat = dateFormat;
      $scope.stateName = $state.current.name;

      getDataService.days.get({
        year: $stateParams.year,
        month: $stateParams.month,
        day: $stateParams.day
      })
        .$promise.then(function(data) {
            // success
            $scope.day = data.day[0];
          }, function(errResponse) {
            // fail
          });
    });
