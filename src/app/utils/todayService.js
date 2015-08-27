angular.module('todayService', [
])

.service('todayService',
    function todayService(moment) {
      this.getText = function(isodate) {
        let today = moment().format('YYYY-MM-DD');
        if (isodate === today) {
          return 'Сегодня, D MMMM YYYY года';
        }
        return 'Календарь на  D MMMM YYYY года';
      };
    });
