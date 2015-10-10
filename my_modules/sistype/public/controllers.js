/**
 * Created by LuWenWen on 2015/9/22.
 */
var app = angular.module('myApp.controllers');


/**
 * Login controller
 */
app.controller('TypeCtrl', function ($scope, $window,user) {
    $scope.st1=user.getSt1();

});