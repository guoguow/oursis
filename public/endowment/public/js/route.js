
angular.module('myApp').

config(function ($routeProvider, $locationProvider) {
  $routeProvider.

      when('/endowment', {
          templateUrl: 'public/endowment/endowment.html'
      }).
      when('/acount', {
          templateUrl: 'public/endowment/endowaccount.html',
          controller: 'acountCtrl'
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
        });
  $locationProvider.html5Mode(true);
});
