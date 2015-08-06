angular.module('TodayController', [
  'ui.router'
])

.controller('TodayController',
    function TodayController(
    $scope, $state, $stateParams, moment, getDataService) {
      'use strict';


      $scope.dateFormat = 'Сегодня, D MMMM YYYY года';
      $scope.stateName = 'day';
      let today = moment();

      getDataService.days.get({
        year: today.format('YYYY'),
        month: today.format('MM'),
        day: today.format('DD')
      })
        .$promise.then(function(data) {
            // success
            $scope.day = data.day[0];
          }, function(errResponse) {
            // fail
          });
    });
