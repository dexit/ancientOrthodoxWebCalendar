angular.module('ancientWebCalendar.paschalion', [
  'PaschalionController',
  'ui.router'
])

.config(function config($stateProvider) {

      $stateProvider
      .state('paschalion', {
            url: '/paschalion/:year',
            views: {
              main: {
                controller: 'PaschalionController',
                templateUrl: 'paschalion/paschalion.tpl.html'
              }
            },
            data: {
              title: { formattedTitle: 'Зрячая пасхалия на YYYY год' }

            }
          });
    });
