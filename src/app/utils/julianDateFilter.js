angular.module('julianDateFilter', [
])

.filter('julianDate', function julianDateFilter($sce) {
      return function(julianDateString) {
        let julianDateArray = julianDateString.split('-');

        let MONTH = {
          1: 'сентября',
          2: 'октября',
          3: 'ноября',
          4: 'декабря',
          5: 'января',
          6: 'февраля',
          7: 'марта',
          8: 'апреля',
          9: 'мая',
          10: 'июня',
          11: 'июля',
          12: 'августа'
        };

        let year = julianDateArray[0];
        let month = Number(julianDateArray[1]);
        let day = Number(julianDateArray[2]);

        month = MONTH[month];

        return `${day} ${month} ${year} г. от Адама.`;

      };
    });
