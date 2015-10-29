
angular.module('myApp').

config(function ($routeProvider, $locationProvider) {
  $routeProvider.

      when('/injury', {
          templateUrl: 'public/injury/injury.html'
      }).when('/injuryPay', {
            templateUrl: 'public/injury/injurypay.html',
            controller: 'InjuryPayCtrl'
        }).
      when('/injuryPaid', {
          templateUrl: 'public/injury/injurypaid.html',
          controller: 'InjuryPaidCtrl'
      }).
      when('/injurydoc', {
          templateUrl: 'public/injury/injurydoc.html'
      });
  $locationProvider.html5Mode(true);
});
