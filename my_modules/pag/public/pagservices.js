
var services = angular.module('myApp.services');

services.factory('pag', function($http, $cookies, $q){

    return{


        getAll: function ($scope,bz) {

            $http.post('/getCount', {username:$scope.user.username,ssn:$scope.user.ssn,dt1:$scope.dt1,dt2:$scope.dt2,bz:bz}).success(function (data) {
                $scope.totalPage = Math.ceil(data.count/$scope.pageSize);
            }).error(function (data) {
            });
        },
        prev : function ($scope) {
            if ($scope.currentPage > 1) {
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
            $scope.currentPage = page;
            $scope.load($scope.currentPage,$scope);
        },
        getPages:function ($scope) {
            if ($scope.currentPage > 1 && $scope.currentPage < $scope.totalPage) {
                $scope.pages = [
                    $scope.currentPage-1 ,
                        $scope.currentPage ,
                        $scope.currentPage + 1
                ];
            } else if ($scope.currentPage == 1 && $scope.totalPage > 2) {
                $scope.pages = [
                        $scope.currentPage ,
                        $scope.currentPage + 1
                ];
            } else if ($scope.currentPage == $scope.totalPage && $scope.totalPage > 2) {
                $scope.pages = [
                    $scope.currentPage-1 ,
                        $scope.currentPage
                ];
            }
        }
    };
});



