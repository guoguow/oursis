
var app = angular.module('myApp.controllers');


/**
 *payhist.html`s  pay controller
 * for payhist modules
 */

app.controller('UnemploymentCtrl', function ($scope, $window,unemployment) {

    console.log("reset set payforsign  for UnemploymentCtrl");
    //setpay.reset($scope.user,$scope);
    unemployment.setpay5($scope.user,$scope);
});
