
var services = angular.module('myApp.services');

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



