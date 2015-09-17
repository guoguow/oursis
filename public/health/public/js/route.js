
angular.module('myApp').

config(function ($routeProvider, $locationProvider) {
  $routeProvider.

      when('/health', {
          templateUrl: 'public/health/health.html',
          controller: 'HealthCtrl'
      }).

        otherwise({
          redirectTo: '/'
      });
  $locationProvider.html5Mode(true);
});
