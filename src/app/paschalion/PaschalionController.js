angular.module('PaschalionController', [
  'ui.router'
])

.controller('PaschalionController',
    function PaschalionController(
    $scope, $state, $stateParams, moment, getDataService) {

      getDataService.paschalion.get({
        year: $stateParams.year
      })
        .$promise.then(function(data) {
            // success
            $scope.paschalion = data.paschalion[0];
          }, function(errResponse) {
            // fail
          });

    });
