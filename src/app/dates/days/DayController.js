angular.module('DayController', [
  'ui.router'
])

.controller('DayController',
    function DayController(
      $state, $stateParams, moment, dataService, todayService) {
      let vm = this;
      let today = moment();

      let date = {
        day: {
          year: $stateParams.year,
          month: $stateParams.month,
          day: $stateParams.day
        },
        today: {
          year: today.format('YYYY'),
          month: today.format('MM'),
          day: today.format('DD')
        }
      };

      dataService.days.get({
        year: date[$state.current.name].year,
        month: date[$state.current.name].month,
        day: date[$state.current.name].day
      })
        .$promise.then(function(data) {
            // success
            vm.dateFormat = todayService.getText(data.day.date);
            vm.day = data.day;
          }, function(errResponse) {
            // fail
          });
    });
