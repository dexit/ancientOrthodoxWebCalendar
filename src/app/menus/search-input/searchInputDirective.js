angular.module('searchInputDirective', [
])

.directive('searchInputDirective',
    function searchInputDirective($location) {
      return {
        restrict: 'E',
        replace: true,
        templateUrl: 'menus/search-input/search-input.tpl.html',
        scope: {
          placeholder: '@',
          buttonText: '@'
        },
        link: function ($scope) {
          $scope.doSearch = function(){
            if ($scope.inputModel){
              $location.path('/search').search({query: $scope.inputModel});
            }
          };
        }
      };
    });
