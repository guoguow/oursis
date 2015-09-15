
angular.module('myApp').

config(function ($routeProvider, $locationProvider) {
  $routeProvider.
      /*
   when('/pay', {
          templateUrl: 'my_modules/payhist/public/payhist.html',
          controller: 'PayCtrl'
      }).

     when('/endowment', {
          templateUrl: 'public/views/endowment.html',
          controller: 'EndowmentCtrl'
      }).

      when('/health', {
          templateUrl: 'public/views/birth.html',
          controller: 'HealthCtrl'
      }).*/
        otherwise({
          redirectTo: '/'
      });
  $locationProvider.html5Mode(true);
});
