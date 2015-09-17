
var app = angular.module('myApp.controllers');


/**
 * Login controller
 */
app.controller('LoginCtrl', function ($scope, $window, us) {

  // submit form
  $scope.submit = function() {
      console.log('login ctrl');
    if ($scope.login && $scope.password) {
      us.login($scope.login, $scope.password)
        .then(function(data) {
          console.log(data);
          $window.location = '/';
              console.log(widouws.location);

        }, function(error) {
          $scope.error = error;
        });
    }
    else {
      $scope.error = "用户名或密码不能为空";
    }
  };

});


app.controller('LogoutCtrl', function ($scope, $window, us) {

        us.logout().then(function() {
            $scope.user = null;
            $window.location = '/';
            console.log(window.location);

        }, function(error) {
            console.log(error);
        });


});

app.controller('SignupCtrl', function ($scope, $window, us) {

    // submit form
    $scope.submit = function() {
        if ($scope.username && $scope.email && $scope.password) {
            us.signup($scope.firstname,$scope.lastname,$scope.username, $scope.email, $scope.password)
                .then(function(data, status) {
                    $scope.error = false;
                    $scope.success = '太好了，注册成功';
                    $window.location = '/';
                },function(error) {
                    $scope.error = error;
                }) ;
        }
        else {
            $scope.error = "用户名、邮箱或密码不能为空";
        }
    };
});

app.controller('ProfileCtrl', function ($scope, $window,user, us) {

    $scope.user = user.get();

    console.log('before get profile');
    console.log($scope.user);
    us.getprofile($scope);


     $scope.check=function() {
         if ($scope.ssn && $scope.name && $scope.idcard) {
             us.checkprofile($scope.user, $scope.ssn,$scope.name,$scope.idcard)
                 .then(function(data) {
                     us.logout().then(function() {
                         $scope.success = '绑定成功，请重新登录';
                         $scope.user = null;
                         $window.location = '/';
                         console.log(window.location);

                     }, function(error) {
                         console.log(error);
                     });

                 },function(error) {

                 $scope.error1 = error;
             }) ;
         } else {
             $scope.error1 = "社保号码、姓名、身份证号不能为空";
         }
     }
/*
    // submit form
    $scope.submit = function () {
        if ($scope.ssn && $scope.name && $scope.idcard&&$scope.address&&$scope.mobilephone&&$scope.sex) {
            us.saveprofile($scope.user,$scope.ssn,$scope.name, $scope.mobilephone)
                .then(function(data) {
                    $scope.error2 = false;
                    $scope.success = '太好了，保存成功';
                  //  $window.location = '/';
                },function(error) {
                    $scope.error2 = error;
                }) ;
        }
        else {
            $scope.error2 = "信息不能为空";
        }
    }
*/
});



