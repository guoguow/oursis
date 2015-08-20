
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
            console.log(widouws.location);

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

app.controller('ProfileCtrl', function ($scope, $window, us) {


    console.log('before get profile');
    us.getprofile($scope.user,$scope);




    // submit form
    $scope.submit = function () {
        if ($scope.ssn && $scope.name && $scope.mobilephone) {
            us.saveprofile($scope.user,$scope.ssn,$scope.name, $scope.mobilephone)
                .then(function(data) {
                    $scope.error = false;
                    $scope.success = '太好了，保存成功';
                    $window.location = '/';
                },function(error) {
                    $scope.error = error;
                }) ;
        }
        else {
            $scope.error = "社保号码、姓名、手机不能为空";
        }
    }

});



