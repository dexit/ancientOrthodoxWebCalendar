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

.run(function run(
    $rootScope, $location, $state, $stateParams, moment,
      amMoment, dateValidatorService) {

    amMoment.changeLocale('ru');

    // State error handling & date validation
    $rootScope.$on('$stateChangeStart',
      function(event, toState, toParams, fromState, fromParams){
        let dates = {
          today: moment(),
          day: moment([toParams.year, toParams.month - 1, toParams.day]),
          month: moment([toParams.year, toParams.month - 1]),
          year: moment([toParams.year]),
          get paschalion() {
            return this.year;
          }
        };

        if (toState.name in dates) {
          if (!dateValidatorService.check(dates[toState.name])) {
            $location.path('/');
            // involving notification
            alert('Дата неверная!');
          }
        }
    });
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

