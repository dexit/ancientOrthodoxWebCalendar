angular.module('toTrustedFilter', [
])

.filter('to_trusted', function toTrustedFilter($sce) {
      return function(text) {
        return $sce.trustAsHtml(text);
      };
    });
