
angular.module('myApp').

config(function ($routeProvider, $locationProvider) {
  $routeProvider.

      when('/health', {
          templateUrl: 'public/health/health.html',
          controller: 'HealthCtrl'
      }).
      when('/healthpm', {
          templateUrl: 'public/health/healthpm.html',
          controller: 'HealthPmCtrl'
      }).
        otherwise({
          redirectTo: '/'
      });
  $locationProvider.html5Mode(true);
});
