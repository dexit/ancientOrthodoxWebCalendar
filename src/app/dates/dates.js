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
                controller: 'DayController as vm',
                templateUrl: 'dates/days/day.tpl.html'
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
                controller: 'YearController as vm',
                templateUrl: 'dates/years/year.tpl.html'
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
                controller: 'MonthController as vm',
                templateUrl: 'dates/months/month.tpl.html'
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
                controller: 'DayController as vm',
                templateUrl: 'dates/days/day.tpl.html'
              }
            },
            data: {
              title: {'formattedTitle': 'D MMMM YYYY года'}
            }
          });

    });
