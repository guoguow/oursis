
var services = angular.module('myApp.services');

services.factory('endow', function($http, $cookies,$q){

    return {

        payhist: function(user,$scope,dt1,dt2) {

            console.log('before get payhist data aaaaaaaaaaaaaaa');

            $http.post('/endowpay',{username:user.username,ssn:user.ssn,dt1:dt1,dt2:dt2}).success(function(data) {
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

            $http.post('/jmendowpay',{username:user.username,ssn:user.ssn,dt1:dt1,dt2:dt2}).success(function(data) {
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

        $http.post('/endowpaid',{username:user.username,ssn:user.ssn,dt1:dt1,dt2:dt2}).success(function(data) {
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

            $http.post('/jmendowpaid',{username:user.username,ssn:user.ssn,dt1:dt1,dt2:dt2}).success(function(data) {
                console.log('return get endowment detail  paid data ');
                console.log(data);
                $scope.jmepaid = data;
            }).error(function(data) {
                //  deferred.reject(data.error);
                console.log(' error happened when return get endowment detail  paid data for the page');
            });
        },
        getindex: function(user,$scope) {
            console.log('before to get endowment index data');
            $http.post('/endowindex',{ssn:user.ssn}).success(function(data) {
                console.log('front sucess to get endowment data ');
                console.log(data);
                 $scope.idx=data;
            }).error(function() {
                // deferred.reject(data.error);
                console.log('error happened when get endowment data');
            });
        }
    };
});






