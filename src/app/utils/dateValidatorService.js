angular.module('dateValidatorService', [
])

.service('dateValidatorService',
  function dateValidatorService(moment, DATE_RANGE) {
    let minDate = moment(DATE_RANGE.minDate, 'YYYY-MM-DD');
    let maxDate = moment(DATE_RANGE.maxDate, 'YYYY-MM-DD');

    this.isValidDate = function(date) {
      if (!date.isValid()){
        return false;
      }
      return minDate <= date && date <= maxDate;
    };

    this.isValidDateFormat = function(date, format) {
      return moment(date, format, true).isValid();
    };

  });
