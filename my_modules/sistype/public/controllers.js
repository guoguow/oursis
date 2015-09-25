/**
 * Created by LuWenWen on 2015/9/22.
 */
var app = angular.module('myApp.controllers');


/**
 * Login controller
 */
app.controller('TypeCtrl', function ($scope, $window,user) {
    $scope.st1=user.getSt1();

    $scope.st2=user.getSt2();
    $scope.st3=user.getSt3();
    $scope.st4=user.getSt4();
    $scope.st5=user.getSt5();



});