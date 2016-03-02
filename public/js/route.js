
angular.module('myApp', [
  'ngRoute',
  'ngCookies',
  'myApp.controllers',
  'myApp.services',
  'myApp.filters',
    'ngTouch',
    'ui.bootstrap',
    'chieffancypants.loadingBar',
    'n3-pie-chart',
    'nvd3ChartDirectives'
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
