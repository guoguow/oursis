
angular.module('myApp').

config(function ($routeProvider, $locationProvider) {
  $routeProvider.

      when('/pay', {
          templateUrl: 'my_modules/payhist/public/payhist.html',
          controller: 'PayCtrl'
      }).
        otherwise({
          redirectTo: '/'
      });
  $locationProvider.html5Mode(true);
});
