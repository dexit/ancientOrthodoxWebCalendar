angular.module('ancientWebCalendar.search', [
  'SearchController',
  'ui.router'
])

.config(function config($stateProvider) {

      $stateProvider
      .state('search', {
            url: '/search?query',
            views: {
              main: {
                controller: 'SearchController as vm',
                templateUrl: 'search/search.tpl.html'
              }
            },
            data: {
              title: { complexTitle: 'Поиск' }
            }
      });
    });
