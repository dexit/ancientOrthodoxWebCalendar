angular.module('dataService', [
  'ngResource'
])

.factory('dataService',
    function dataService($resource, ENV) {
      return {
        years: $resource(
            `${ ENV.apiEndpoint }/:year`, {
              year: '@_year'
            }),
        months: $resource(
            `${ ENV.apiEndpoint }/:year/:month`, {
              year: '@_year',
              month: '@_month'
            }),
        days: $resource(
            `${ ENV.apiEndpoint }/:year/:month/:day`, {
              year: '@_year',
              month: '@_month',
              day: '@_day'
            }),
        paschalion: $resource(
            `${ ENV.apiEndpoint }/paschalion/:year`, {
              year: '@_year',
              calendar: '@_calendar'
            }),
        search: $resource(
            `${ ENV.apiEndpoint }/search/`, {
              query: '@_query'
            })
      };
    });
