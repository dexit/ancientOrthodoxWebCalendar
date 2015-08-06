angular.module('DatesMenuController', [
])

.controller('DatesMenuController',
    function DatesMenuController($scope, $location, moment) {
      'use strict';

      let settings = {
        year: {
          mode: 'year',
          lastFormat: '← YYYY год',
          nextFormat: 'YYYY год →',
          pathFormat: 'YYYY',
          momentIndex: 'years'
        },
        month: {
          mode: 'month',
          lastFormat: '← MMMM YYYY',
          nextFormat: 'MMMM YYYY →',
          pathFormat: 'YYYY/MM',
          momentIndex: 'months'
        },
        day: {
          mode: 'day',
          lastFormat: '← D MMMM YYYY',
          nextFormat: 'D MMMM YYYY →',
          pathFormat: 'YYYY/MM/DD',
          momentIndex: 'days'
        }
      };

      $scope.settings = settings[$scope.menuMode];

      const today = moment();

      $scope.setToday = function() {
        $location.path(today.format('YYYY/MM/DD'));
      };

      $scope.setCurrentMonth = function() {
        $location.path(today.format('YYYY/MM'));
      };

      $scope.setCurrentYear = function() {
        $location.path(today.format('YYYY'));
      };

      let date = $location.path();

      if ($location.path() === '/') {
        date = today.format();
      }

      const next = moment(
          date, settings[$scope.menuMode].pathFormat).add(
          1, settings[$scope.menuMode].momentIndex);
      const last = moment(
          date, settings[$scope.menuMode].pathFormat).add(
          -1, settings[$scope.menuMode].momentIndex);

      $scope.last = last;
      $scope.next = next;


      $scope.setLast = function() {
        $location.path(last.format(settings[$scope.menuMode].pathFormat));
      };

      $scope.setNext = function() {
        $location.path(next.format(settings[$scope.menuMode].pathFormat));
      };
    });
