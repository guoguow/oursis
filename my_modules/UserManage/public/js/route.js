
angular.module('myApp').

config(function ($routeProvider, $locationProvider) {
  $routeProvider.

      when('/signin', {
          templateUrl: 'my_modules/UserManage/public/login.html',
          controller: 'LoginCtrl'
      }).  when('/logout', {
          templateUrl: 'public/views/index.html',
          controller: 'LogoutCtrl'
      }). when('/signup', {
          templateUrl: 'my_modules/UserManage/public/signup.html',
          controller: 'SignupCtrl'
      }).
      when('/profile', {
          templateUrl: 'my_modules/UserManage/public/profile.html',
          controller: 'ProfileCtrl'
      });
  $locationProvider.html5Mode(true);
});
