
var services = angular.module('myApp.services');



services.factory('injury', function($http, $cookies,$q){

    return {
        setpay4: function(user,$scope) {

            console.log('before to set Injury signforpay=4');

            $http.post('/setinjury',{username:user.username}).success(function() {
                console.log('sucess to set  Injury signforpay=4 ');
            }).error(function() {
                console.log('error happened when set  Injury signforpay=4');
            });
        },
            getindex: function(user,$scope) {

                console.log('before to get endowment index data');

                $http.post('/injuryindex',{ssn:user.ssn}).success(function(data) {
                    console.log('front sucess to get endowment data ');
                    $scope.idx=data;
                }).error(function() {
                    // deferred.reject(data.error);
                    console.log('error happened when get endowment data');
                });
            }
/*
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
            $scope.epaid=data;

        }).error(function(data) {
            //  deferred.reject(data.error);
            console.log(' error happened when return get endowment detail  paid data for the page');
        });
    }*/
    };
});






