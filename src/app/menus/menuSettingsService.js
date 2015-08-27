angular.module('menuSettingsService', [
])

.constant('menuSettingsService',
    {
      year: {
        mode: 'year',
        dateFormat: 'yyyy',
        lastFormat: '← YYYY год',
        nextFormat: 'YYYY год →',
        pathFormat: 'YYYY',
        momentIndex: 'years',
        currentText: 'Текущий год',
        inputPlaceholder: 'Выберите год:'
      },
      month: {
        mode: 'month',
        dateFormat: 'MM.yyyy',
        lastFormat: '← MMMM YYYY',
        nextFormat: 'MMMM YYYY →',
        pathFormat: 'YYYY/MM',
        momentIndex: 'months',
        currentText: 'Текущий месяц',
        inputPlaceholder: 'Выберите месяц:'
      },
      day: {
        mode: 'day',
        dateFormat: 'dd.MM.yyyy',
        lastFormat: '← D MMMM YYYY',
        nextFormat: 'D MMMM YYYY →',
        pathFormat: 'YYYY/MM/DD',
        momentIndex: 'days',
        currentText: 'Сегодня',
        inputPlaceholder: 'Выберите дату:'
       },
      get today() {
        return this.day;
      },
      get paschalion() {
        return this.year;
      }
    });
