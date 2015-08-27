
var app = angular.module('myApp.controllers');

/**
 * Render Job Watch controller
 */
  app.controller('PagCtrl', function ($scope, $window,user, list,pag) {
      console.log('before get list');

      $scope.prev =function(){pag.prev($scope);}
      $scope.next=function(){pag.next($scope);}
      $scope.loadPage=function(page){pag.loadPage(page,$scope);}
      $scope.getPages=function(){pag.getPages($scope);}



  });




