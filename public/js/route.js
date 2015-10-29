
angular.module('myApp', [
  'ngRoute',
  'ngCookies',
  'myApp.controllers',
  'myApp.services',
  'myApp.filters',
    'ngAnimate',
    'ngTouch',
    'ui.bootstrap',
    'chieffancypants.loadingBar'
]).

config(function ($routeProvider, $locationProvider,cfpLoadingBarProvider) {
        $routeProvider.
    when('/', {
      templateUrl: 'public/views/index.html'
    }).
      when('/error', {
          templateUrl: 'public/views/error.html'
      }).
    otherwise({
      redirectTo: '/'
    });

  $locationProvider.html5Mode(true);
  cfpLoadingBarProvider.includeSpinner = true;

    });
