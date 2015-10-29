
var services = angular.module('myApp.services');

services.factory('health', function($http, $cookies,$q){

    return {

        payhist: function(user,$scope,dt1,dt2) {

            console.log('before get payhist data aaaaaaaaaaaaaaa');

            $http.post('/healthpay',{username:user.username,ssn:user.ssn,page:$scope.currentPage,pageSize:$scope.pageSize,dt1:dt1,dt2:dt2}).success(function(data) {
                console.log('return get healthment detail  payhist data ');
                $scope.hpay=data;

            }).error(function(data) {
                //  deferred.reject(data.error);
                console.log(' error happened when return get healthment detail  payhist data for the page');
            });
        },
        jmpay: function(user,$scope,dt1,dt2) {

            console.log('before get payhist data');

            $http.post('/jmhealthpay',{username:user.username,ssn:user.ssn,page:$scope.currentPage,pageSize:$scope.pageSize,dt1:dt1,dt2:dt2}).success(function(data) {
                console.log('return get healthment detail  payhist data ');
                $scope.jmhpay=data;

            }).error(function(data) {
                //  deferred.reject(data.error);
                console.log(' error happened when return get healthment detail  payhist data for the page');
            });
        },
       paid: function($scope,bz) {

        console.log('before get paid data');

        $http.post('/healthpaid',{username:$scope.user.username,ssn:$scope.user.ssn,page:$scope.currentPage,pageSize:$scope.pageSize,dt1:$scope.dt1,dt2:$scope.dt2,bz:bz}).success(function(data) {
                console.log('return get healthment detail  paid data ');
                $scope.hpaid = data;
        }).error(function(data) {
            //  deferred.reject(data.error);
            console.log(' error happened when return get healthment detail  paid data for the page');
        });
    },

        getindex: function() {
            return angular.fromJson($cookies.idx2);
        },
        getindex2: function() {
            return angular.fromJson($cookies.idx22);
        },
        getIncome: function($scope) {

            console.log('before get payhist data aaaaaaaaaaaaaaa');

            $http.post('/healthincome',{username:$scope.user.username,ssn:$scope.user.ssn,page:$scope.currentPage,pageSize:$scope.pageSize,dt1:$scope.dt1,dt2:$scope.dt2}).success(function(data) {
                console.log('return get endowment detail  payhist data ');
                $scope.income=data;

            }).error(function(data) {
                //  deferred.reject(data.error);
                console.log(' error happened when return get endowment detail  payhist data for the page');
            });
        },
        getExp: function($scope) {

            console.log('before get payhist data aaaaaaaaaaaaaaa');

            $http.post('/healthexp',{username:$scope.user.username,ssn:$scope.user.ssn,page:$scope.currentPage,pageSize:$scope.pageSize,dt1:$scope.dt1,dt2:$scope.dt2}).success(function(data) {
                console.log('return get endowment detail  payhist data ');
                $scope.income=data;

            }).error(function(data) {
                //  deferred.reject(data.error);
                console.log(' error happened when return get endowment detail  payhist data for the page');
            });
        }
    };
});






