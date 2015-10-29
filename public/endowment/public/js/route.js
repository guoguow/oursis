
angular.module('myApp').

config(function ($routeProvider, $locationProvider) {
  $routeProvider.

      when('/endowment', {
          templateUrl: 'public/endowment/endowment.html'
      }).
      when('/endowAccount', {
          templateUrl: 'public/endowment/endowaccount.html',
          controller: 'EndowAccountCtrl'
      }).
      when('/endowPay', {
          templateUrl: 'public/endowment/getpayhist.html',
          controller: 'EndowPayCtrl'
      }).
      when('/endowPaid', {
          templateUrl: 'public/endowment/endowpaid.html',
          controller: 'EndowPaidCtrl'
      }).
      when('/outpay', {
          templateUrl: 'public/endowment/outofdatePay.html',
          controller: 'outpayCtrl'
      }).
        when('/outpaid', {
            templateUrl: 'public/endowment/outofdatePaid.html',
            controller: 'outpaidCtrl'
        }).
      when('/endowdoc', {
          templateUrl: 'public/endowment/endowdoc.html'
      });
  $locationProvider.html5Mode(true);
});
