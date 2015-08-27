angular.module('DatesMenuController', [
])

.controller('DatesMenuController',
    function DatesMenuController(
      $location, $state, moment, menuSettingsService, pathService) {

      let vm = this;
      const stateName = $state.current.name;
      const settings = menuSettingsService[stateName];

      vm.settings = settings;
      const today = moment();

      // FIXME: add error handling
      let date = $location.path();
      if (stateName === 'today') {
        date = today.format();
      }

      const next = moment(
          date, settings.pathFormat).add(
          1, settings.momentIndex);
      const last = moment(
          date, settings.pathFormat).add(
          -1, settings.momentIndex);

      vm.last = last;
      vm.next = next;

      vm.setLast = function() {
        pathService.setPath(settings.pathFormat, last);
      };

      vm.setNext = function() {
        pathService.setPath(settings.pathFormat, next);
      };
    });
