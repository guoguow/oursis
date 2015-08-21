
var app = angular.module('myApp.controllers');

/**
 * Main / Root controller
 */
app.controller('TypeCtrl', function ($scope, $window, type) {

    console.log('before get typelist');
    // submit form
    type.getsistype($scope.user,$scope);
    /*   .then(function(data) {
     $scope.error = false;
     $scope.success = 'ok ,success to get sistype ';
     $window.location = '/';
     },function(error) {
     $scope.error = error;
     }) ;
     if ($scope.sign && $scope.kind) {

     }
     else {
     $scope.error = "false";
     }*/

});

