
angular.module('myApp').

config(function ($routeProvider, $locationProvider) {
  $routeProvider.

      when('/list', {
          templateUrl: 'my_modules/list/public/list.html',
          controller: 'ListCtrl'
      });
  $locationProvider.html5Mode(true);
});
