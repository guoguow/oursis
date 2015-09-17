
angular.module('myApp').

config(function ($routeProvider, $locationProvider) {
  $routeProvider.

      when('/unemployment', {
          templateUrl: 'public/unemployment/unemployment.html',
          controller: 'UnemploymentCtrl'
      }).

        otherwise({
          redirectTo: '/'
      });
  $locationProvider.html5Mode(true);
});
