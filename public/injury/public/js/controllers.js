
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
    injury.getindex($scope.user,$scope);
});