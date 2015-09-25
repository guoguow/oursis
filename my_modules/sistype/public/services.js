
var services = angular.module('myApp.services');

// share user information across controllers
services.factory('type', function($http, $cookies, $q){

  return {

      getsistype:function(user,$scope) {
          var deferred = $q.defer();
          console.log('before get sistype');
         // $scope.data=[st1,st2,st3];

          $http.post('/getsistype1',{username:user.username,ssn:user.ssn}).success(function(data1) {
              console.log('return get sistyoe data1');
              $cookies.st1 = angular.toJson(data1);
              console.log($cookies.st1);

          }).error(function(data1) {
          });
          $http.post('/getsistype2',{username:user.username.username,ssn:user.ssn}).success(function(data2) {
              console.log('return get sistyoe data2');
              console.log(data2);
              $cookies.st2 =angular.toJson(data2);
              console.log($cookies.st2);

          }).error(function(data2) {
          });
          $http.post('/getsistype3',{username:user.username.username,ssn:user.ssn}).success(function(data3) {
              console.log('return get sistyoe data3');console.log(data3);
              $cookies.st3 = angular.toJson(data3);
              console.log($cookies.st3);

          }).error(function(data3) {
          });
          $http.post('/getsistype4',{username:user.username.username,ssn:user.ssn}).success(function(data4) {
              console.log('return get sistyoe data4');
              $cookies.st4 =angular.toJson(data4);
              console.log($cookies.st4);

          }).error(function(data4) {
          });
          $http.post('/getsistype5',{username:user.username.username,ssn:user.ssn}).success(function(data5) {
              console.log('return get sistyoe data5');console.log(data5);
              $cookies.st5 = angular.toJson(data5);
              console.log($cookies.st5);
              deferred.resolve(data5);

          }).error(function(data5) {
              deferred.reject(data5.error);
          });

          return deferred.promise;


      } };

});
    /*  reset:function($scope) {
          $scope.signforpay=null;
          $scope.dataforpay=null;
          console.log('see the new value of signforpay??change ??');
          console.log($scope.signforpay,$scope.dataforpay);
      }
*/




