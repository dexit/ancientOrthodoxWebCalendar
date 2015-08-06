angular.module('toTrustedFilter', [
])

.filter('to_trusted', function toTrustedFilter($sce) {
      'use strict';
      return function(text) {
        return $sce.trustAsHtml(text);
      };
    });
