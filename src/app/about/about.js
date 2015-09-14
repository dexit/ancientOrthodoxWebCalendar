angular.module('ancientOrthodoxWebCalendar.about', [
  'AboutController',
  'ui.router'
])

.config(function config($stateProvider) {

      $stateProvider
      .state('about', {
            url: '/about',
            views: {
              main: {
                //controller: 'AboutController as vm',
                templateUrl: 'about/about.tpl.html'
              }
            },
            data: {
              title: { simpleTitle: 'О календаре' }
            }
      });
    });
