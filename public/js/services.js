
var services = angular.module('myApp.services', []);

// share user information across controllers
services.factory('user', function($http, $cookies, $q){

  return {


      get: function() {
          return angular.fromJson($cookies.user);
      },
      getSt1: function() {
          return angular.fromJson($cookies.st1);
      }

  };

});







