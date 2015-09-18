
var services = angular.module('myApp.services');



services.factory('health', function($http, $cookies,$q){

    return {
        setpay2: function(user,$scope) {

            console.log('before to set health signforpay=2');

            $http.post('/sethealth',{username:user.username}).success(function() {
                console.log('sucess to set  health signforpay=2 ');
            }).error(function() {
                console.log('error happened when set  health signforpay=2');
            });
        }
    };
});

services.factory('healthpm', function($http, $cookies,$q) {

    return {

        getPayment: function ($scope,jylb) {


            $http.post('/healthpm', {ssn:$scope.user.ssn,jylb:jylb,page:$scope.currentPage,pageSize:$scope.pageSize,dt1:$scope.dt1,dt2:$scope.dt2}).success(function (data) {
                $scope.payments = data;

            }).error(function (data) {
                // deferred.reject(data.error);
                deferred.reject(data.error);
            });
        },
        getAll: function ($scope,jylb) {


            $http.post('/healthpmCount', {ssn:$scope.user.ssn,jylb:jylb,dt1:$scope.dt1,dt2:$scope.dt2}).success(function (data) {

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




