
angular.module('myApp', [
  'ngRoute',
  'ngCookies',
  'myApp.controllers',
  'myApp.services'
 // 'filters'
]).

config(function ($routeProvider, $locationProvider) {
  $routeProvider.
    when('/', {
      templateUrl: 'public/views/index.html'
    }).
        when('/endowment', {
            templateUrl: 'public/views/endowment.html',
          controller: 'EndowmentCtrl'
        }).
      when('/health', {
          templateUrl: 'public/views/health.html',
         controller: 'HealthCtrl'
      }).
    otherwise({
      redirectTo: '/'
    });

  $locationProvider.html5Mode(true);
});
