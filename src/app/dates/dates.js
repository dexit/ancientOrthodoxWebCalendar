angular.module('ancientWebCalendar.dates', [
  'years',
  'months',
  'days',
  'ui.router'
])

.config(function config($stateProvider) {

      $stateProvider
      .state('today', {
            url: '/',
            views: {
              'main': {
                controller: 'TodayController',
                templateUrl: 'dates/days/days.tpl.html'
              }
            },
            data: {
              title: { simpleTitle: 'Сегодня'}
            }
          })
      .state('year', {
            url: '/:year',
            views: {
              main: {
                controller: 'YearsController',
                templateUrl: 'dates/years/years.tpl.html'
              }
            },
            data: {
             title: {'formattedTitle': 'YYYY год'}
            }
          })
      .state('month', {
            url: '/:year/:month',
            views: {
              'main': {
                controller: 'MonthsController',
                templateUrl: 'dates/months/months.tpl.html'
              }
            },
            data: {
              title: {'formattedTitle': 'MMMM YYYY года'}
            }
          })
      .state('day', {
            url: '/:year/:month/:day',
            views: {
              'main': {
                controller: 'DaysController',
                templateUrl: 'dates/days/days.tpl.html'
              }
            },
            data: {
              title: {'formattedTitle': 'D MMMM YYYY года'}
            }
          });

    });
