
var services = angular.module('myApp.services');

// share user information across controllers
services.factory('list', function($http, $cookies, $q){

  return {
      getlist: function(user,$scope) {

          console.log('before get list');
          console.log({username:user.username, email:user.email
          });

          $http.post('/userList',{username:user.username,page:$scope.currentPage,pageSize:$scope.pageSize
          }).success(function(data) {
              $scope.info=data;

          }).error(function(data) {

              deferred.reject(data.error);
          });



      },  getalllist: function(user,$scope) {

          console.log('before get all list');
          console.log({username:user.username, email:user.email
          });

          $http.post('/allList',{username:user.username, email:user.email
          }).success(function(data) {

              $scope.totalPage = Math.ceil(data.count/$scope.pageSize)-1;
              $scope.endPage = $scope.totalPage;

              console.log($scope.totalPage);
          }).error(function(data) {

              deferred.reject(data.error);
          });

      }

  };

});





