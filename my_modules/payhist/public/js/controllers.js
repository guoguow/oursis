
var app = angular.module('myApp.controllers');


/**
 *payhist.html`s  pay controller
 * for payhist modules
 */


app.controller('PayCtrl', function ($scope, $window,pay) {


    console.log('before get decide which payhist type');
    console.log($scope.signforpay);

    if ($scope.signforpay==null) {
        $scope.dataforpay="unkonwn";
        console.log($scope.signforpay, $scope.dataforpay);


    }
  else  if ($scope.signforpay==1) {
        $scope.dataforpay="养老";
        console.log($scope.signforpay, $scope.dataforpay);
        pay.pension($scope.user,$scope.signforpay,$scope)
    }

    else if($scope.signforpay==2) {
        $scope.dataforpay="医疗";

        pay.health($scope.user,$scope.signforpay,$scope);
        console.log($scope.signforpay, $scope.dataforpay);

    }
});



