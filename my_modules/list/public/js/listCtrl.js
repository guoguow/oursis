
var app = angular.module('myApp.controllers');

/**
 * Render Job Watch controller
 */
  app.controller('ListCtrl', function ($scope, $window,user, list,pag) {
      console.log('before get list');

      $scope.user = user.get();
      console.log($scope.currentPage+"++++++++++++++"+$scope.totalPage);
     list.getlist($scope.user,$scope);
      list.getalllist($scope.user,$scope);

      $scope.load = function (page) {
          $scope.currentPage=page;
          console.log($scope.currentPage+"++++++++++++++"+$scope.totalPage);

          list.getlist($scope.user,$scope);
          $scope.getPages();
      };

      $scope.prev =function(){pag.prev($scope);}
      $scope.next=function(){pag.next($scope);}
      $scope.loadPage=function(page){pag.loadPage(page,$scope);}
      $scope.getPages=function(){pag.getPages($scope);}



  });




