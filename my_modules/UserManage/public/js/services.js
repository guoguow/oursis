
var services = angular.module('myApp.services');

// share user information across controllers
services.factory('us', function($http, $cookies, $q){

  return {
      /*原来的login采用的post方式
    UserManage: function(username, password) {
      var deferred = $q.defer();
      $http.post('/signin', {
        username: username,
        password: password
      }).success(function(data) {
        // now get some information about the user
          $cookies.user = angular.toJson(data);
          console.log('cookies user profile');console.log($cookies.user.profile);
          deferred.resolve(data);



      }).error(function(data) {
        deferred.reject(data.error);
      });
        console.log('UserManage');
      return deferred.promise;
    },
       */
      login: function(username, password) {
          var deferred = $q.defer();
          $http.get('/signin',{params: {username:username,password:password
          }}).success(function(data) {
              // now get some information about the user
              $cookies.user = angular.toJson(data);
              console.log('cookies user profile');console.log($cookies.user.profile);
              deferred.resolve(data);
          }).error(function(data) {
              deferred.reject(data.error);
          });
          console.log('login');
          return deferred.promise;
      },
      logout: function() {
          var deferred = $q.defer();
          $http.get('/signout')
              .success(function() {
                  delete $cookies.user;
                  deferred.resolve();
              }).error(function(data) {
                  deferred.reject(data.error);
              });
          return deferred.promise;
      },
      signup: function(firstname,lastname,username, email, password) {
          var deferred = $q.defer();
          $http.post('/signup', {
              firstName: firstname,
              lastName: lastname,
              email: email,
              username: username,
              password: password
          }).success(function(data) {
              // now get some information about the user*
              console.log('signup success');
              $cookies.user = angular.toJson(data);

              deferred.resolve(data);
              console.log(data);

          }).error(function(data) {
              deferred.reject(data.error);
          });
          return deferred.promise;
      },
      getprofile: function($scope) {

          console.log('before get');

          $http.get('/profile',{params:{username:$scope.user.username, ssn:$scope.user.ssn
          }}).success(function(data) {
              console.log('return get data');console.log(data);

              console.log('in get profile before return ');console.log(data);
              $scope.ssn=data.ssn;
              $scope.name=data.name;
              $scope.mobilephone=data.mobilephone;
              $scope.idcard=data.idcard;
              $scope.address=data.address;
              $scope.sex=data.sex;
          }).error(function(data) {
              deferred.reject(data.error);
          });

      },
      checkprofile: function(user,ssn,name,idcard,$scope) {
          var deferred = $q.defer();
          console.log('before check');

          $http.post('/checkprofile',{username:user.username, ssn:ssn,name:name,idcard:idcard
              }).success(function(data) {
              console.log("++++++++++"+data);
              console.log($cookies.user);
              console.log('return get data');

              console.log('in get profile before return ');console.log(data);
              deferred.resolve(data);
          }).error(function(data) {
              deferred.reject(data.error);
          });
          return deferred.promise;
      }
      /*
      saveprofile: function(user,ssn,name,phone) {
          var deferred = $q.defer();
          console.log('before save');
          console.log({username:user.username, email:user.email
          });
          $http.post('/saveprofile',{username:user.username,
                  ssn:ssn,
                  name:name,
                  mobilephone:phone}
          ).success(function(data) {
                  console.log('saveprofile success');
                  deferred.resolve(data);
              }).error(function(data) {
                  console.log('has err');
                  deferred.reject(data.error);}
          );
          return deferred.promise;
      }*/
  };

});




