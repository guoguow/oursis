
angular.module('myApp').

config(function ($routeProvider, $locationProvider) {
  $routeProvider.

      when('/endowment', {
          templateUrl: 'public/endowment/endowment.html',
          controller: 'EndowmentCtrl'
      }).
      when('/endowPay', {
          templateUrl: 'public/endowment/getpayhist.html',
          controller: 'EndowPayCtrl'
      }).
      when('/endowPaid', {
          templateUrl: 'public/endowment/endowpaid.html',
          controller: 'EndowPaidCtrl'
      }).
      when('/acount', {
          templateUrl: 'public/endowment/endowaccount.html',
          controller: 'acountCtrl'
      });
  $locationProvider.html5Mode(true);
});
