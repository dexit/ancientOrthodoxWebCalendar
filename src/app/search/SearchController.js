angular.module('SearchController', [
  'ui.router'
])

.controller('SearchController',
    function SearchController ($state, $stateParams, dataService) {
      let vm = this;

      // Initial when the page loading
      dataService.search.get({
        query: $stateParams.query
      })
        .$promise.then(function(data) {
          // success
          vm.query = $stateParams.query;
          vm.searchResult = data.searchResult[0];
         }, function(errResponse) {
            // fail
      });
    });
