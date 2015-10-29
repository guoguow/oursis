
var services = angular.module('myApp.services');

services.factory('endow', function($http, $cookies,$q){

    return {

        payhist: function(user,$scope,dt1,dt2) {

            console.log('before get payhist data aaaaaaaaaaaaaaa');

            $http.post('/endowpay',{username:user.username,ssn:user.ssn,page:$scope.currentPage,pageSize:$scope.pageSize,dt1:dt1,dt2:dt2}).success(function(data) {
                console.log('return get endowment detail  payhist data ');
                console.log(data);
                $scope.epay=data;

            }).error(function(data) {
                //  deferred.reject(data.error);
                console.log(' error happened when return get endowment detail  payhist data for the page');
            });
        },
        jmpay: function(user,$scope,dt1,dt2) {

            console.log('before get payhist data');

            $http.post('/jmendowpay',{username:user.username,ssn:user.ssn,page:$scope.currentPage,pageSize:$scope.pageSize,dt1:dt1,dt2:dt2}).success(function(data) {
                console.log('return get endowment detail  payhist data ');
                console.log(data);
                $scope.jmepay=data;

            }).error(function(data) {
                //  deferred.reject(data.error);
                console.log(' error happened when return get endowment detail  payhist data for the page');
            });
        },
       paid: function(user,$scope,dt1,dt2) {

        console.log('before get paid data');

        $http.post('/endowpaid',{username:user.username,ssn:user.ssn,page:$scope.currentPage,pageSize:$scope.pageSize,dt1:dt1,dt2:dt2}).success(function(data) {
                console.log('return get endowment detail  paid data ');
                console.log(data);
                $scope.epaid = data;
        }).error(function(data) {
            //  deferred.reject(data.error);
            console.log(' error happened when return get endowment detail  paid data for the page');
        });
    },
        jmpaid: function(user,$scope,dt1,dt2) {

            console.log('before get paid data');

            $http.post('/jmendowpaid',{username:user.username,ssn:user.ssn,page:$scope.currentPage,pageSize:$scope.pageSize,dt1:dt1,dt2:dt2}).success(function(data) {
                console.log('return get endowment detail  paid data ');
                console.log(data);
                $scope.jmepaid = data;
            }).error(function(data) {
                //  deferred.reject(data.error);
                console.log(' error happened when return get endowment detail  paid data for the page');
            });
        },
        getindex: function() {
            return angular.fromJson($cookies.idx1);
        },
        getindex2: function() {
            return angular.fromJson($cookies.idx11);
        },
        getIncome: function($scope) {

            console.log('before get payhist data aaaaaaaaaaaaaaa');

            $http.post('/endowincome',{username:$scope.user.username,ssn:$scope.user.ssn,page:$scope.currentPage,pageSize:$scope.pageSize,dt1:$scope.dt1,dt2:$scope.dt2}).success(function(data) {
                console.log('return get endowment detail  payhist data ');
                console.log(data);
                $scope.income=data;

            }).error(function(data) {
                //  deferred.reject(data.error);
                console.log(' error happened when return get endowment detail  payhist data for the page');
            });
        },
        getExp: function($scope) {

            console.log('before get payhist data aaaaaaaaaaaaaaa');

            $http.post('/endowexp',{username:$scope.user.username,ssn:$scope.user.ssn,page:$scope.currentPage,pageSize:$scope.pageSize,dt1:$scope.dt1,dt2:$scope.dt2}).success(function(data) {
                console.log('return get endowment detail  payhist data ');
                console.log(data);
                $scope.income=data;

            }).error(function(data) {
                //  deferred.reject(data.error);
                console.log(' error happened when return get endowment detail  payhist data for the page');
            });
        }
    };
});






