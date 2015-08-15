angular.module('pageTitleService', [
])

.service('pageTitleService',
    function pageTitleService($location, $state, moment) {
      'use strict';

      this.getTitle = function() {

        let date = moment($location.path(), 'YYYY/MM/DD');
        let data = $state.current.data;

        let titles = {
          simpleTitle: {
            pageTitle: data.title.simpleTitle
          },
          complexTitle: {
            pageTitle: `${ data.title.complexTitle }: ${ $state.params.query }`
          },
          formattedTitle: {
            pageTitle: date.format(data.title.formattedTitle)
          }
        };

        let key = Object.keys(data.title)[0];

        return `${ titles[key].pageTitle } | Древлекалендарь`;
      };
    });
