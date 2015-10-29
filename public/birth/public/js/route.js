
angular.module('myApp').

config(function ($routeProvider, $locationProvider) {
  $routeProvider.

      when('/birth', {
          templateUrl: 'public/birth/birth.html'
      }).when('/birthPay', {
            templateUrl: 'public/birth/birthpay.html',
            controller: 'BirthPayCtrl'
        }).
      when('/birthPaid', {
          templateUrl: 'public/birth/birthpaid.html',
          controller: 'BirthPaidCtrl'
      }).
      when('/birthdoc', {
          templateUrl: 'public/birth/birthdoc.html'
      });
  $locationProvider.html5Mode(true);
});
