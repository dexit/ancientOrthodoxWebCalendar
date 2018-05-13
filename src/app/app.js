angular.module('ancientOrthodoxWebCalendar', [
  'angularMoment',
  'angular-loading-bar',
  'ancientOrthodoxWebCalendar.paschalion',
  'ancientOrthodoxWebCalendar.search',
  'ancientOrthodoxWebCalendar.about',
  'ancientOrthodoxWebCalendar.dates',
  'ancientOrthodoxWebCalendar.menus',
  'ancientOrthodoxWebCalendar.utils',
  'config',
  'templates-app',
  'templates-common',
  'ui-notification',
  'ui.router'
])

.config(
  function (
    $urlMatcherFactoryProvider,
    $urlRouterProvider,
    $resourceProvider,
    $locationProvider,
    $httpProvider,
    NotificationProvider) {

    $locationProvider.html5Mode(true);
    //$resourceProvider.defaults.stripTrailingSlashes = false;
    $urlMatcherFactoryProvider.strictMode(false);
    $urlRouterProvider.otherwise('/');

    NotificationProvider.setOptions({
      delay: 5000,
      startTop: 20,
      startRight: 10,
      verticalSpacing: 20,
      horizontalSpacing: 20,
      positionX: 'left',
      positionY: 'bottom'
    });

    $httpProvider.interceptors.push('httpInterceptor');
  })

.run(
  function ($location, $state, $stateParams,
              moment, amMoment, stateHandlerService) {

    amMoment.changeLocale('ru');
    stateHandlerService.handle();
  })

.controller('AppController',
  function AppController($scope, $location, $stateParams,
                           moment, pageTitleService) {

    $scope.year = moment().format('YYYY');
    $scope.$on('$stateChangeSuccess',
      function(event, toState, toParams, fromState, fromParams) {
        $scope.pageTitle = pageTitleService.getTitle();
      });
});

