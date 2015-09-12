angular.module('httpInterceptor', [
])

.factory('httpInterceptor',
  function httpInterceptor($injector) {
    return {
      responseError: function(response) {
        $injector.invoke(function($location, Notification) {
          Notification.error('Ошибка сервера');
        });
      }
    };
});