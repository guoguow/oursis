
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
      when('/error', {
          templateUrl: 'public/views/error.html'
      }).
    otherwise({
      redirectTo: '/error'
    });

  $locationProvider.html5Mode(true);
});
