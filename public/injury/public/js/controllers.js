
var app = angular.module('myApp.controllers');


/**
 *payhist.html`s  pay controller
 * for payhist modules
 */

app.controller('InjuryCtrl', function ($scope, $window,injury) {

    console.log("reset set payforsign  for Injury");
    //setpay.reset($scope.user,$scope);
    injury.setpay4($scope.user,$scope);
});
app.controller('IIndexCtrl', function ($scope, $window,injury) {

    console.log("get index page data of  injury");

    if($scope.st1.s1.sign==4){
        console.log("工伤参保标识 sign=", $scope.st1.s1.sign);
        injury.getindex($scope.user,$scope);
    }
});