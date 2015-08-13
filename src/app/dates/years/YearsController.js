angular.module('YearsController', [
  'ui.router'
])

.controller('YearsController',
    function YearsController(
    $scope, $state, $stateParams, moment,
        getDataService, linkToAnchorService) {

      $scope.stateName = $state.current.name;
      $scope.linkToAnchor = linkToAnchorService.linkToAnchor;

      function yearHandler(yearArr) {
        'use strict';

        let out = [];

        // FIXME: move to service
        for (let m = 0; m < 12; m++) {
          let monthArr = [];
          for (let day of yearArr) {
            if (moment(day.date).month() == m) {
              monthArr.push(day);
            }
          }
          out.push(monthArr);
        }
        return out;
      }

      getDataService.years.get({
        year: $stateParams.year
      })
        .$promise.then(function(data) {
            // success
            $scope.year = yearHandler(data.year[0]);
          }, function(errResponse) {
            // fail
          });

    });
