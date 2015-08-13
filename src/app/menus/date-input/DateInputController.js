angular.module('DateInputController', [
  'ui.bootstrap'
])

.controller('DateInputController',
    function DateInputController($scope, $location, moment, pathService) {
      'use strict';

      let settings = {
        year: {
          mode: 'year',
          pathFormat: 'YYYY',
          dateFormat: 'yyyy',
          inputPlaceholder: 'Введите год:'
        },
        month: {
          mode: 'month',
          pathFormat: 'YYYY/MM',
          dateFormat: 'MM.yyyy',
          inputPlaceholder: 'Введите месяц:'
        },
        day: {
          mode: 'day',
          pathFormat: 'YYYY/MM/DD',
          dateFormat: 'dd.MM.yyyy',
          inputPlaceholder: 'Введите дату:'
        }
      };

      $scope.datepickerOptions = {
        datepickerMode: `'${ settings[$scope.pickerMode].mode }'`,
        minMode: settings[$scope.pickerMode].mode
      };

      $scope.settings = settings[$scope.pickerMode];

      $scope.openCalendar = function($event) {
        $event.preventDefault();
        $event.stopPropagation();
        $scope.opened = true;
      };

      $scope.sendDate = function($event) {
        $event.preventDefault();
        $event.stopPropagation();

        let selectedDate = moment($scope.selectedDate);

        // Change url
        pathService.setPath(
            settings[$scope.pickerMode].pathFormat, selectedDate);

      };
    });
