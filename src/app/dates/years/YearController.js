angular.module('YearController', [
  'ui.router'
])

.controller('YearController',
    function YearsController(
      $state, $stateParams, moment,
        dataService, linkToAnchorService) {
      let vm = this;

      vm.stateName = $state.current.name;
      vm.linkToAnchor = linkToAnchorService.toLink;

      dataService.years.get({
        year: $stateParams.year
      })
        .$promise.then(function(data) {
            // success
            vm.year = data.year;
          }, function(errResponse) {
            // fail
          });
    });
