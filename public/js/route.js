
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

    otherwise({
      redirectTo: '/'
    });

  $locationProvider.html5Mode(true);
});
