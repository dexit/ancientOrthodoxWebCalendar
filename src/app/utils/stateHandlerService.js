angular.module('stateHandlerService', [
])

.service('stateHandlerService',
    function stateHandlerService(
      $rootScope, $location, moment, Notification, dateValidatorService) {

      this.handle = function() {
        $rootScope.$on('$stateChangeStart',
          function(event, toState, toParams, fromState, fromParams){
            let dates = {
              today: moment(),
              day: moment([toParams.year, toParams.month - 1, toParams.day]),
              month: moment([toParams.year, toParams.month - 1]),
              year: moment([toParams.year]),
              get paschalion() {
                return this.year;
              }
            };

            if (toState.name in dates) {
              if (!dateValidatorService.check(dates[toState.name])) {
                $location.path('/');
                // involving notification
                Notification.error('Дата неверная');
              }
            }
        });
      };

});
