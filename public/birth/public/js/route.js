
angular.module('myApp').

config(function ($routeProvider, $locationProvider) {
  $routeProvider.

      when('/birth', {
          templateUrl: 'public/birth/birth.html',
          controller: 'BirthCtrl'
      }).

        otherwise({
          redirectTo: '/'
      });
  $locationProvider.html5Mode(true);
});
