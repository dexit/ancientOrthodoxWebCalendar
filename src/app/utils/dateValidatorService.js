angular.module('dateValidatorService', [
])

.service('dateValidatorService',
    function dateValidatorService(moment) {

      this.minDate = moment([1900, 0, 0]);
      this.maxDate = moment([2100, 0, 0]);

      this.check = function(date) {
        if (date.isValid()){
          return this.minDate <= date && date <= this.maxDate;
        } else {
            return false;
        }
      };
    });
