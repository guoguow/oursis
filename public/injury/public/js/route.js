
angular.module('myApp').

config(function ($routeProvider, $locationProvider) {
  $routeProvider.

      when('/injury', {
          templateUrl: 'public/injury/injury.html',
          controller: 'InjuryCtrl'
      }).

        otherwise({
          redirectTo: '/'
      });
  $locationProvider.html5Mode(true);
});
