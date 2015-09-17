
var services = angular.module('myApp.services');

services.factory('payment', function($http, $cookies,$q) {

    return {

        getPayment: function ($scope,jylb) {


            $http.post('/payment2', {ssn:$scope.user.ssn,jylb:jylb,page:$scope.currentPage,pageSize:$scope.pageSize}).success(function (data) {
                $scope.payments = data;

            }).error(function (data) {
                // deferred.reject(data.error);
                deferred.reject(data.error);
            });
        },
        getAll: function ($scope,jylb) {


            $http.post('/pmCount', {ssn:$scope.user.ssn,jylb:jylb}).success(function (data) {

                $scope.totalPage = Math.ceil(data.count/$scope.pageSize)-1;
                $scope.endPage = $scope.totalPage;
                console.log($scope.totalPage);
            }).error(function (data) {
                // deferred.reject(data.error);
                deferred.reject(data.error);
            });
        }
    };
});
