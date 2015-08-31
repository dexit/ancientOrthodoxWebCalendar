angular.module('PaschalionController', [
  'ui.router'
])

.controller('PaschalionController',
    function PaschalionController ($scope, $state, $stateParams,
        dataService, notifyingService, calendarSystemService) {
      let vm = this;
      // FIXME in a future this duplicate code:
      // Initial when the page loading
      dataService.paschalion.get({
        year: $stateParams.year,
        calendar: 'gregorian'
      })
        .$promise.then(function(data) {
          // success
          vm.calendarSystem = calendarSystemService.getText('gregorian');
          vm.paschalion = data.paschalion;
         }, function(errResponse) {
            // fail
      });

      // Listening calendar system changing
      notifyingService.subscribe($scope, function(event, system) {
        dataService.paschalion.get({
          year: $stateParams.year,
          calendar: system
        })
          .$promise.then(function(data) {
            // success
            vm.calendarSystem = calendarSystemService.getText(system);
            vm.paschalion = data.paschalion;

            }, function(errResponse) {
              // fail
            });
      });
    });
