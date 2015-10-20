
var services = angular.module('myApp.services');

services.factory('health', function($http, $cookies,$q){

    return {

        payhist: function(user,$scope,dt1,dt2) {

            console.log('before get payhist data aaaaaaaaaaaaaaa');

            $http.post('/healthpay',{username:user.username,ssn:user.ssn,dt1:dt1,dt2:dt2}).success(function(data) {
                console.log('return get healthment detail  payhist data ');
                console.log(data);
                $scope.hpay=data;

            }).error(function(data) {
                //  deferred.reject(data.error);
                console.log(' error happened when return get healthment detail  payhist data for the page');
            });
        },
        jmpay: function(user,$scope,dt1,dt2) {

            console.log('before get payhist data');

            $http.post('/jmhealthpay',{username:user.username,ssn:user.ssn,dt1:dt1,dt2:dt2}).success(function(data) {
                console.log('return get healthment detail  payhist data ');
                console.log(data);
                $scope.jmhpay=data;

            }).error(function(data) {
                //  deferred.reject(data.error);
                console.log(' error happened when return get healthment detail  payhist data for the page');
            });
        },
       paid01: function(user,$scope,dt1,dt2) {

        console.log('before get paid data');

        $http.post('/healthpaid01',{username:user.username,ssn:user.ssn,dt1:dt1,dt2:dt2}).success(function(data) {
                console.log('return get healthment detail  paid data ');
                console.log(data);
                $scope.hpaid = data;
        }).error(function(data) {
            //  deferred.reject(data.error);
            console.log(' error happened when return get healthment detail  paid data for the page');
        });
    },
        paid02: function(user,$scope,dt1,dt2) {

            console.log('before get paid data22222222');

            $http.post('/healthpaid02',{username:user.username,ssn:user.ssn,dt1:dt1,dt2:dt2}).success(function(data) {
                console.log('return get healthment detail  paid data ');
                console.log(data);
                $scope.hpaid = data;
            }).error(function(data) {
                //  deferred.reject(data.error);
                console.log(' error happened when return get healthment detail  paid data for the page');
            });
        },
        paid03: function(user,$scope,dt1,dt2) {

            console.log('before get paid data');

            $http.post('/healthpaid03',{username:user.username,ssn:user.ssn,dt1:dt1,dt2:dt2}).success(function(data) {
                console.log('return get healthment detail  paid data ');
                console.log(data);
                $scope.hpaid = data;
            }).error(function(data) {
                //  deferred.reject(data.error);
                console.log(' error happened when return get healthment detail  paid data for the page');
            });
        },
        getindex: function(user,$scope) {
            console.log('before to get healthment index data');
            $http.post('/healthindex',{ssn:user.ssn}).success(function(data) {
                console.log('front sucess to get healthment data ');
                console.log(data);
                 $scope.idx=data;
            }).error(function() {
                // deferred.reject(data.error);
                console.log('error happened when get healthment data');
            });
        }
    };
});






