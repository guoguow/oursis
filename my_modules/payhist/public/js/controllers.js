
var app = angular.module('myApp.controllers');

app.controller('PayCtrl', function ($scope, $window,pay) {


    console.log('before get decide which payhist type');

        pay.py($scope.user,$scope);
      //  console.log($scope.ph);


});
/**
 *payhist.html`s  pay controller
 * for payhist modules


 app.controller('EndowmentCtrl', function ($scope, $window,setpay) {

    console.log("reset set payforsign  for endowment");
  //  setpay.reset($scope.user,$scope);
    setpay.setpay1($scope.user,$scope);


});

 app.controller('HealthCtrl', function ($scope, $window,setpay) {

    console.log("reset set payforsign  for health");
    //setpay.reset($scope.user,$scope);
    setpay.setpay2($scope.user,$scope);
});

 */


