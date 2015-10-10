
angular.module('myApp').

config(function ($routeProvider, $locationProvider) {
  $routeProvider.

      when('/unemployment', {
          templateUrl: 'public/unemployment/unemployment.html',
          controller: 'UnemploymentCtrl'
      });
  $locationProvider.html5Mode(true);
});
