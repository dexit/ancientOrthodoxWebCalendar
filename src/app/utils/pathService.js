angular.module('pathService', [
])

.service('pathService',
    function pathService($location) {
      'use strict';
      this.setPath = function(format, date) {
        if (date.isValid()) {
          // Work only with url as '/something/2010/' FIXME in future.
          let prefix = /\w+[^0-9\/]/.exec($location.path()) || [''];
          $location.path(`${ prefix[0] }/${ date.format(format) }`);
        }
        else {
          // send error to user
        }
      };
    });
