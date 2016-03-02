
angular.module('myApp').

config(function ($routeProvider, $locationProvider) {
  $routeProvider.

      when('/health', {
          templateUrl: 'public/health/health.html'
      }).
      when('/hacount', {
          templateUrl: 'public/health/healthaccount.html',
          controller: 'haccountCtrl'
      }).
      when('/hpay', {
          templateUrl: 'public/health/healthpay.html',
          controller: 'hPayCtrl'
      }).
      when('/hpaid', {
          templateUrl: 'public/health/healthpaid.html',
          controller: 'hPaidCtrl',
          cache:'false'

      }).
      when('/houtpay', {
          templateUrl: 'public/health/outofdatePay.html',
          controller: 'houtpayCtrl'
      }).
      when('/hdoc', {
          templateUrl: 'public/health/healthdoc.html'
      });
  $locationProvider.html5Mode(true);
});
