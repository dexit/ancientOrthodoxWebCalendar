angular.module('linkToAnchorService', [
])

.service('linkToAnchorService',
    function linkToAnhcorService($location, $anchorScroll) {
      'use strict';
      this.linkToAnchor = function(id) {
        $location.hash(id);
        $anchorScroll();
      };
    });
