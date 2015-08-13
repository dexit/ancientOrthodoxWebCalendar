angular.module('MonthsController', [
  'ui.router'
])

.controller('MonthsController',
    function MonthsController(
    $scope, $state, $stateParams, getDataService, linkToAnchorService) {
      'use strict';

      $scope.stateName = $state.current.name;
      $scope.linkToAnchor = linkToAnchorService.linkToAnchor;

      getDataService.months.get({
        year: $stateParams.year,
        month: $stateParams.month
      })
        .$promise.then(function(data) {
            // success
            $scope.month = data.month[0];
          }, function(errResponse) {
            console.log(errResponse);
          });
    });
