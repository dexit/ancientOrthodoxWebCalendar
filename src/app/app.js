angular.module('ancientWebCalendar', [
  'templates-app',
  'templates-common',
  'config',
  'ancientWebCalendar.menus',
  'ancientWebCalendar.utils',
  'ancientWebCalendar.paschalion',
  'ancientWebCalendar.search',
  'ancientWebCalendar.dates',
  'ui.router',
  'angularMoment'
])

.config(function myAppConfig($urlMatcherFactoryProvider, $urlRouterProvider) {
      $urlMatcherFactoryProvider.strictMode(false);
      $urlRouterProvider.otherwise('/');
    })

    .run(function run(amMoment) {
          amMoment.changeLocale('ru');
        })

.controller('AppController',
    function AppController(
    $scope, $location, $stateParams, moment, pageTitleService) {
      $scope.year = moment().format('YYYY');
      $scope.$on('$stateChangeSuccess',
          function(event, toState, toParams, fromState, fromParams) {
            $scope.pageTitle = pageTitleService.getTitle();
          });
    });

