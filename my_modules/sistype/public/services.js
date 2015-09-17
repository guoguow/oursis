
var services = angular.module('myApp.services');

// share user information across controllers
services.factory('type', function($http, $cookies, $q){

  return {

      getsistype:function(user,$scope) {

          console.log('before get sistype');
         // $scope.data=[st1,st2,st3];

          $http.post('/getsistype1',{username:user.username,ssn:user.ssn}).success(function(data1) {
              console.log('return get sistyoe data1');console.log(data1);

               $scope.st1=data1;

          }).error(function(data1) {
              deferred.reject(data1.error);
          });
          $http.post('/getsistype2',{username:user.username.username,ssn:user.ssn}).success(function(data2) {
              console.log('return get sistyoe data2');console.log(data2);

              $scope.st2=data2;

          }).error(function(data2) {
              deferred.reject(data2.error);
          });
          $http.post('/getsistype3',{username:user.username.username,ssn:user.ssn}).success(function(data3) {
              console.log('return get sistyoe data3');console.log(data3);

              $scope.st3=data3;

          }).error(function(data3) {
              deferred.reject(data3.error);
          });
          $http.post('/getsistype4',{username:user.username.username,ssn:user.ssn}).success(function(data4) {
              console.log('return get sistyoe data4');console.log(data4);

              $scope.st4=data4;

          }).error(function(data4) {
              deferred.reject(data4.error);
          });     $http.post('/getsistype5',{username:user.username.username,ssn:user.ssn}).success(function(data5) {
              console.log('return get sistyoe data5');console.log(data5);

              $scope.st5=data5;

          }).error(function(data5) {
              deferred.reject(data5.error);
          });



      } };

});
    /*  reset:function($scope) {
          $scope.signforpay=null;
          $scope.dataforpay=null;
          console.log('see the new value of signforpay??change ??');
          console.log($scope.signforpay,$scope.dataforpay);
      }
*/




