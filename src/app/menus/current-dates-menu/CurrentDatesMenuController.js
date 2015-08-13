angular.module('CurrentDatesMenuController', [
])

.controller('CurrentDatesMenuController',
    function CurrentDatesMenuController($scope, moment, pathService) {
      'use strict';

      let settings = {
        year: {
          pathFormat: 'YYYY',
          currentText: 'Текущий год'
        },
        month: {
          pathFormat: 'YYYY/MM',
          currentText: 'Текущий месяц'
        },
        day: {
          pathFormat: 'YYYY/MM/DD',
          currentText: 'Сегодня'
        }
      };

      const today = moment();
      $scope.settings = settings[$scope.menuMode];

      $scope.setCurrent = function() {
        pathService.setPath(settings[$scope.menuMode].pathFormat, today);
      };

    });
