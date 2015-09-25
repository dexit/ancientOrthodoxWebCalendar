angular.module('YearController', [
  'ui.router'
])

.controller('YearController',
    function YearsController(
      $state, $stateParams, moment,
        dataService, yearArrayService, linkToAnchorService) {
      let vm = this;

      vm.stateName = $state.current.name;
      vm.linkToAnchor = linkToAnchorService.toLink;

      dataService.years.get({
        year: $stateParams.year
      })
        .$promise.then(function(data) {
            // success
            vm.year = yearArrayService.getArray(data.year);
          }, function(errResponse) {
            // fail
          });
    });
