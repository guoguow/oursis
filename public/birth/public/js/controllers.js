
var app = angular.module('myApp.controllers');


/**
 *payhist.html`s  pay controller
 * for payhist modules
 */

app.controller('BirthCtrl', function ($scope, $window,birth) {

    console.log("reset set payforsign  for birth");
    //setpay.reset($scope.user,$scope);
    birth.setpay3($scope.user,$scope);
});
