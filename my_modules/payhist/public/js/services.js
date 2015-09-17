
var services = angular.module('myApp.services');
/*
services.factory('setpay', function($http, $cookies,$q){

    return {

  reset: function(user,$scope) {

           console.log('clean  all the payforsign to null');

            $http.post('/reset').success(function() {
                console.log('return get data,sucess reset signforpay');
          //      $scope.ph=data;

            })
                .error(function() {
              //  deferred.reject(data.error);
                console.log('error happened when reset front');
            });
        },
        setpay1: function(user,$scope) {

            console.log('before to set endowment signforpay=1');

            $http.post('/setendow',{username:user.username}).success(function() {
                console.log('front   sucess to set endowment signforpay=1 ');
             //   $scope.ph=data;

            }).error(function() {
               // deferred.reject(data.error);
                console.log('error happened when set endowment signforpay=1');
            });
        },
        setpay2: function(user,$scope) {

            console.log('before to set health signforpay=1');

            $http.post('/sethealth',{username:user.username}).success(function() {
                console.log('sucess to set  health signforpay=1 ');
            }).error(function() {
                console.log('error happened when set  health signforpay=1');
            });
        }
    };
});
       */

// share user information across controllers
services.factory('pay', function($http, $cookies,$q){

  return {

      py: function(user,$scope) {

          console.log('before get payhist data');

          $http.post('/pay',{username:user.username}).success(function(data) {
              console.log('return get payhist data for the page');
              console.log(data);
              $scope.ph=data;

          }).error(function(data) {
            //  deferred.reject(data.error);
              console.log(' error happened when return get payhist data for the page');
          });
      }
  };
});

/*
pension: function(user,signforpay,$scope) {

    console.log('before get payhist pension data');
    console.log({username:user.username,signforpay:signforpay});

    $http.post('/endowment',{username:user.username
        ,signforpay:signforpay
    }).success(function(data) {
        console.log('return get pension data');console.log(data);
        $scope.ph=data;

    }).error(function(data) {
        deferred.reject(data.error);
    });
},

health: function(user,signforpay,$scope) {

    console.log('before get payhist health data');
    console.log({username:user.username,signforpay:signforpay});

    $http.post('/health',{username:user.username
        ,signforpay:signforpay
    }).success(function(data) {
        console.log('return get health data');console.log(data);
        $scope.ph=data;

    }).error(function(data) {
        deferred.reject(data.error);
    });

}*/





