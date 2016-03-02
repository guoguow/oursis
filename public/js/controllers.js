
var app = angular.module('myApp.controllers',[]);

/*
 * Main / Root controller
 */
app.controller('MainCtrl', function ($scope, user,pag,cfpLoadingBar,$timeout) {

    $scope.currentPage =1;
    $scope.totalPage =1;
    $scope.pageSize = 4;
    $scope.pages = [1,2];

    $scope.user = user.get();
    console.log("user =", $scope.user);
    $scope.st1=user.getSt1();
    console.log("st1 =", $scope.st1);
    $scope.start = function() {
        cfpLoadingBar.start();
    };

    $scope.complete = function () {
        cfpLoadingBar.complete();
    }


    // fake the initial load so first time users can see it right away:
    $scope.start();
    $scope.fakeIntro = true;
    $timeout(function() {
        $scope.complete();
        $scope.fakeIntro = false;
    }, 750);

});

