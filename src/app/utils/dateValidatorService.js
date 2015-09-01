angular.module('dateValidatorService', [
])

.service('dateValidatorService',
    function dateValidatorService(moment, DATE_RANGE) {

      this.minDate = moment(DATE_RANGE.minDate, 'YYYY-MM-DD');
      this.maxDate = moment(DATE_RANGE.maxDate, 'YYYY-MM-DD');

      this.check = function(date) {
        if (date.isValid()){
          return this.minDate <= date && date <= this.maxDate;
        } else {
            return false;
        }
      };
    });
