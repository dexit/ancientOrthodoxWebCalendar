angular.module('stateHandlerService', [
])

.service('stateHandlerService',
    function stateHandlerService(
      $rootScope, $location, $state,
        moment, Notification, dateValidatorService) {

      this.handle = function() {
        $rootScope.$on('$stateChangeStart',
          function(event, toState, toParams, fromState, fromParams){

            let day = toParams.day;
            let month = toParams.month;
            let year = toParams.year;

            let dates = {
              day: {
                toDate: `${year}-${month}-${day}`,
                date: moment([year, month - 1, day]),
                format: 'YYYY-MM-DD'
                },
              month: {
                toDate: `${ year }-${ month }`,
                date: moment([year, month - 1]),
                format: 'YYYY-MM'
              },
              year: {
                toDate: `${ year }`,
                date: moment([year]),
                format: 'YYYY'
              },
              get paschalion() {
                return this.year;
              }
            };

            if (toState.name in dates && !dateValidatorService.isValidDate(
              dates[toState.name].date)) {
                Notification.error('Дата неверная');
                event.preventDefault();
              }

            if (toState.name in dates &&
                  !dateValidatorService.isValidDateFormat(
                     dates[toState.name].toDate, dates[toState.name].format)) {
                Notification.error('Неверный формат даты');
                event.preventDefault();
              }
        });
      };

});
