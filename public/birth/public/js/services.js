
var services = angular.module('myApp.services');



services.factory('birth', function($http, $cookies,$q){

    return {
        setpay3: function(user,$scope) {

            console.log('before to set health signforpay=3');

            $http.post('/setbirth',{username:user.username}).success(function() {
                console.log('sucess to set  birth signforpay=3 ');
            }).error(function() {
                console.log('error happened when set  birth signforpay=3');
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





