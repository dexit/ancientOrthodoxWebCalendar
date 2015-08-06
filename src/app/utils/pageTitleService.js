angular.module('pageTitleService', [
])

.service('pageTitleService',
    function pageTitleService($location, $state, moment) {
      'use strict';

      this.getTitle = function() {
        let pageTitle;
        if (angular.isDefined($state.current.data.pageTitle)) {
          pageTitle = $state.current.data.pageTitle;
        }
        else {
          let date = moment($location.path(), 'YYYY/MM/DD');
          pageTitle = date.format($state.current.data.dateFormat);
        }
        return `${ pageTitle } | Древлекалендарь`;
      };
    });
