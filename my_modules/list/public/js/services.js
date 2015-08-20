
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

services.factory('pag', function($http, $cookies, $q){

    return{



        prev : function ($scope) {
            if ($scope.currentPage > 0) {
                $scope.currentPage--;
                $scope.load($scope.currentPage,$scope);
            }
        },
        next: function ($scope) {
            if ($scope.currentPage < $scope.totalPage) {
                $scope.currentPage++;
                $scope.load($scope.currentPage,$scope);
            }
        },
        loadPage: function (page,$scope) {
            $scope.currentPage = page - 1;
            $scope.load($scope.currentPage,$scope);
        },
        getPages:function ($scope) {
            if ($scope.currentPage > 0 && $scope.currentPage < $scope.totalPage) {
                $scope.pages = [
                    $scope.currentPage ,
                        $scope.currentPage + 1,
                        $scope.currentPage + 2
                ];
            } else if ($scope.currentPage == 0 && $scope.totalPage > 1) {
                $scope.pages = [
                        $scope.currentPage + 1,
                        $scope.currentPage + 2
                ];
            } else if ($scope.currentPage == $scope.totalPage && $scope.totalPage > 1) {
                $scope.pages = [
                    $scope.currentPage ,
                        $scope.currentPage + 1
                ];
            }
        }
    };
});



