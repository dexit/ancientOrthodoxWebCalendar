angular.module('ancientWebCalendar', [
  'angularMoment',
  'ancientWebCalendar.menus',
  'ancientWebCalendar.utils',
  'ancientWebCalendar.paschalion',
  'ancientWebCalendar.search',
  'ancientWebCalendar.dates',
  'config',
  'templates-app',
  'templates-common',
  'ui-notification',
  'ui.router',
])

.config(function(
    $urlMatcherFactoryProvider, $urlRouterProvider, NotificationProvider) {

      $urlMatcherFactoryProvider.strictMode(false);
      $urlRouterProvider.otherwise('/');

      NotificationProvider.setOptions({
        delay: 10000,
        startTop: 20,
        startRight: 10,
        verticalSpacing: 20,
        horizontalSpacing: 20,
        positionX: 'left',
        positionY: 'bottom'
      });
    })

.run(function (
    $location, $state, $stateParams, moment, amMoment, stateHandlerService) {

    amMoment.changeLocale('ru');
    stateHandlerService.handle();
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

