angular.module('DateInputController', [
  'ui.bootstrap'
])

.controller('DateInputController',
    function DateInputController($scope, $location, moment) {
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

        if (selectedDate.isValid()) {
          let prefix = /\w+\/[^0-9\/]/.exec($location.path()) || [''];
          let date = selectedDate.format(
              settings[$scope.pickerMode].pathFormat);

          $location.path(`${ prefix[0] }/${ date }`);
        }
        else {
          // send error to user
        }
      };
    });
