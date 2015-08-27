angular.module('yearArrayService', [
])

.service('yearArrayService',
    function yearArrayService(moment) {
      this.getArray = function (yearArr) {
        let out = [];

        for (let m = 0; m < 12; m++) {
          let monthArr = [];
          for (let day of yearArr) {
            if (moment(day.date).month() == m) {
              monthArr.push(day);
            }
          }
          out.push(monthArr);
        }
        return out;
      };
    });
