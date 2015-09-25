
var services = angular.module('myApp.services', []);

// share user information across controllers
services.factory('user', function($http, $cookies, $q){

  return {


      get: function() {
          return angular.fromJson($cookies.user);
      },
      getSt1: function() {
          return angular.fromJson($cookies.st1);
      },
      getSt2: function() {
          return angular.fromJson($cookies.st2);
      },
      getSt3: function() {
          return angular.fromJson($cookies.st3);
      },
      getSt4: function() {
          return angular.fromJson($cookies.st4);
      },
      getSt5: function() {
          return angular.fromJson($cookies.st5);
      }


  };

});







