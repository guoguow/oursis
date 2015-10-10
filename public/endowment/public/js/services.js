
var services = angular.module('myApp.services');

services.factory('endow', function($http, $cookies,$q){

    return {

        payhist: function(user,$scope,dt1,dt2) {

            console.log('before get payhist data');

            $http.post('/endowpay',{username:user.username,ssn:user.ssn,dt1:dt1,dt2:dt2}).success(function(data) {
                console.log('return get endowment detail  payhist data ');
                console.log(data);
                $scope.epay=data;

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
        setpay1: function(user,$scope) {

            console.log('before to set endowment signforpay=1');

            $http.post('/setendow',{username:user.username}).success(function() {
                console.log('front   sucess to set endowment signforpay=1 ');
                //   $scope.ph=data;

            }).error(function() {
                // deferred.reject(data.error);
                console.log('error happened when set endowment signforpay=1');
            });
        },

        setpaysign: function(user,$scope) {

            console.log('before to set endowment orsign=1');

            $http.post('/setpaysign',{username:user.username}).success(function() {
                console.log('front   sucess to set endowment orsign=1 ');
                //   $scope.ph=data;
            }).error(function() {
                // deferred.reject(data.error);
                console.log('error happened when set endowment orsign=1');
            });
        },
        setpaidsign: function(user,$scope) {

            console.log('before to set endowment orsign=0');

            $http.post('/setpaidsign',{username:user.username}).success(function() {
                console.log('front   sucess to set endowment orsign=0 ');
                //   $scope.ph=data;
            }).error(function() {
                // deferred.reject(data.error);
                console.log('error happened when set endowment orsign=0');
            });
        },
        getindex: function() {
console.log(angular.fromJson($cookies.idx1));
            return angular.fromJson($cookies.idx1);
        }
    };
});






