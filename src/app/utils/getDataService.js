angular.module('getDataService', [
  'ngResource'
])

.factory('getDataService',
    function getDataService($resource, ENV) {
      'use strict';

      return {
        years: $resource(
            'http://:api/:year', {
              api: ENV.apiEndpoint,
              year: '@_year'
            }),
        months: $resource(
            'http://:api/:year/:month', {
              api: ENV.apiEndpoint,
              year: '@_year',
              month: '@_month'
            }),
        days: $resource(
            'http://:api/:year/:month/:day', {
              api: ENV.apiEndpoint,
              year: '@_year',
              month: '@_month',
              day: '@_day'
            }),
        paschalion: $resource(
            'http://:api/paschalion/:year', {
              api: ENV.apiEndpoint,
              year: '@_year',
              calendar: '@_calendar'
            })
      };
    });
