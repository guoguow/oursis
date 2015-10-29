
var services = angular.module('myApp.services');
// share user information across controllers
services.factory('pay', function($http, $cookies,$q){

  return {

      py: function(user,$scope) {

          console.log('before get payhist data');

          $http.post('/pay',{username:user.username,statsign:$scope.statsign}).success(function(data) {
              console.log('return get payhist data for the page');
              $scope.ph=data;

          }).error(function(data) {
            //  deferred.reject(data.error);
              console.log(' error happened when return get payhist data for the page');
          });
      }
  };
});







