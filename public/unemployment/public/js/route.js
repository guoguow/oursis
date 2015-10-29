
angular.module('myApp').

config(function ($routeProvider, $locationProvider) {
  $routeProvider.

      when('/unemployment', {
          templateUrl: 'public/unemployment/unemployment.html'
      }).when('/unemploymentPay', {
            templateUrl: 'public/unemployment/unemploymentpay.html',
            controller: 'UnemploymentPayCtrl'
        }).
      when('/unemploymentPaid', {
          templateUrl: 'public/unemployment/unemploymentpaid.html',
          controller: 'UnemploymentPaidCtrl'
      }).
      when('/unempdoc', {
          templateUrl: 'public/unemployment/unempdoc.html'
      });
  $locationProvider.html5Mode(true);
});
