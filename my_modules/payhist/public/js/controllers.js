
var app = angular.module('myApp.controllers');

app.controller('PayCtrl', function ($scope, $window,pay) {
    console.log($scope.statsign);
    console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");


    console.log('before get decide which payhist type');

        pay.py($scope.user,$scope);


});



