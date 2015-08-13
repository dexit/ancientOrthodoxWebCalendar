angular.module('calendarSystemService', [
])

.service('calendarSystemService',
    function calendarSystemService() {
      'use strict';
      this.getText = function(calendarSystem) {
        let system = {
          gregorian: 'По новому стилю',
          julian: 'По старому стилю'
        };
        return system[calendarSystem];
      };
    });
