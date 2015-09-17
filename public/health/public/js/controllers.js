
var app = angular.module('myApp.controllers');


/**
 *payhist.html`s  pay controller
 * for payhist modules
 */

app.controller('HealthCtrl', function ($scope, $window,health) {

    console.log("reset set payforsign  for health");
    //setpay.reset($scope.user,$scope);
    health.setpay2($scope.user,$scope);
});
