angular.module('MonthController', [
  'ui.router'
])

.controller('MonthController',
    function MonthController(
      $state, $stateParams, dataService, linkToAnchorService) {
      let vm = this;

      vm.linkToAnchor = linkToAnchorService.toLink;

      dataService.months.get({
        year: $stateParams.year,
        month: $stateParams.month
      })
        .$promise.then(function(data) {
            // success
            vm.month = data.month;
          }, function(errResponse) {

          });
    });
