
var app = angular.module('myApp.controllers',[]);

/*
 * Main / Root controller
 */
app.controller('MainCtrl', function ($scope, user,pag) {
    $scope.currentPage =0;
    $scope.totalPage =1;
    $scope.pageSize = 2;
    $scope.pages = [1,2];
    $scope.endPage =1;

    $scope.user = user.get();
    console.log("user =", $scope.user);
    $scope.st1=user.getSt1();

});





