
var services = angular.module('myApp.services');

// share user information across controllers
services.factory('pay', function($http, $cookies,$q){

  return {

     pension: function(user,signforpay,$scope) {

          console.log('before get payhist pension data');
          console.log({username:user.username,signforpay:signforpay});

          $http.post('/endowment',{username:user.username
              ,signforpay:signforpay
          }).success(function(data) {
              console.log('return get pension data');console.log(data);
              $scope.ph=data;

          }).error(function(data) {
              deferred.reject(data.error);
          });

      },


      health: function(user,signforpay,$scope) {

          console.log('before get payhist health data');
          console.log({username:user.username,signforpay:signforpay});

          $http.post('/health',{username:user.username
              ,signforpay:signforpay
          }).success(function(data) {
              console.log('return get health data');console.log(data);
              $scope.ph=data;

          }).error(function(data) {
              deferred.reject(data.error);
          });

      }

  };

});




