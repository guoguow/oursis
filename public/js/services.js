
var services = angular.module('myApp.services', []);

// share user information across controllers
services.factory('user', function($http, $cookies, $q){

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

      UserManage: function(username, password) {
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
          console.log('UserManage');
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
       */

      /** Get Profile
       *
       * @returns {deferred.promise|{then, catch, finally}|k.promise|d.promise|Function|*}
       */


      get: function() {
          return angular.fromJson($cookies.user);
      }


  };

});



/*

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



    },
 getsistype:function(user,$scope) {

 console.log('before get sistype');
 // $scope.data=[st1,st2,st3];

 $http.post('/getsistype1',{username:user.username}).success(function(data1) {
 console.log('return get sistyoe data1');console.log(data1);

 $scope.st1=data1;

 }).error(function(data1) {
 deferred.reject(data1.error);
 });
 $http.post('/getsistype2',{username:user.username}).success(function(data2) {
 console.log('return get sistyoe data2');console.log(data2);

 $scope.st2=data2;

 }).error(function(data2) {
 deferred.reject(data2.error);
 });
 $http.post('/getsistype3',{username:user.username}).success(function(data3) {
 console.log('return get sistyoe data3');console.log(data3);

 $scope.st3=data3;

 }).error(function(data3) {
 deferred.reject(data3.error);
 });

 // $scope.sistype={st1,st2,st3};


 }
    */


/*
      getalllist: function(user,$scope) {

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
*/




