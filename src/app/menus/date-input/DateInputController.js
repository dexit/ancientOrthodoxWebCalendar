angular.module('DateInputController', [
  'ui.bootstrap'
])

.controller('DateInputController',
    function DateInputController(
      $state, $location, moment,
        DATE_RANGE, menuSettingsService, pathService) {

      let vm = this;
      const settings = menuSettingsService[$state.current.name];
      vm.settings = settings;

      vm.datepickerOptions = {
        datepickerMode: `'${ settings.mode }'`,
        minMode: settings.mode
      };

      vm.minDate = DATE_RANGE.minDate;
      vm.maxDate = DATE_RANGE.maxDate;
      vm.currentText = settings.currentText;
      vm.clearText = 'Очистить';
      vm.closeText = 'Закрыть';

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
