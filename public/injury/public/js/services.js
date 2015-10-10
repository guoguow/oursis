
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
            getindex: function() {

                    return angular.fromJson($cookies.idx4);


            }

    };
});






