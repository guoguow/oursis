
angular.module('myApp').

config(function ($routeProvider, $locationProvider) {
  $routeProvider.

      when('/payment', {
          templateUrl: 'my_modules/payment/public/payment.html',
          controller: 'PaymentCtrl'
      }).

        otherwise({
          redirectTo: '/'
      });
  $locationProvider.html5Mode(true);
});
