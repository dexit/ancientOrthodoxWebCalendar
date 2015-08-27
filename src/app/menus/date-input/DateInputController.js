angular.module('DateInputController', [
  'ui.bootstrap'
])

.controller('DateInputController',
    function DateInputController(
      $state, $location, moment, menuSettingsService, pathService) {

      let vm = this;
      const settings = menuSettingsService[$state.current.name];
      vm.settings = settings;

      vm.datepickerOptions = {
        datepickerMode: `'${ settings.mode }'`,
        minMode: settings.mode
      };

      vm.openCalendar = function($event) {
        $event.preventDefault();
        $event.stopPropagation();
        vm.opened = true;
      };

      vm.sendDate = function($event) {
        $event.preventDefault();
        $event.stopPropagation();

        let selectedDate = moment(vm.selectedDate);

        // Change url
        pathService.setPath(settings.pathFormat, selectedDate);

      };
    });
