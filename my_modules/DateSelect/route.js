
angular.module('myApp').

config(function ($routeProvider, $locationProvider) {
  $routeProvider.

      when('/date', {
          templateUrl: 'my_modules/DateSelect/date.html',
        controller: 'DateCtrl'
      }).
      otherwise({
      redirectTo: '/'
    });

  $locationProvider.html5Mode(true);
});
