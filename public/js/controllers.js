
var app = angular.module('myApp.controllers',[]);

/*
 * Main / Root controller
 */
app.controller('MainCtrl', function ($scope, user,pag) {
    $scope.currentPage =0;
    $scope.totalPage =1;
    $scope.pageSize = 2;
    $scope.pages = [1,2];
    $scope.endPage =1;

    //sign for payhist ,sign="养老，医疗，生育……"
    $scope.signforpay  =null;
    $scope.dataforpay =null;

    $scope.user = user.get();
    console.log("user =", user);


});

app.controller('EndowmentCtrl', function ($scope, user) {

        $scope.signforpay= 1;
        console.log("acesse for pension");
});

app.controller('HealthCtrl', function ($scope, user) {

    $scope.signforpay= 2;
    console.log("acesse for health"+ $scope.signforpay);
    console.log($scope.signforpay);
});
/**
 *
 *
 *
 *
 $scope.datepickerOptions = {
        format: 'yyyy-mm-dd',
        language: 'fr',
        startDate: "2012-10-01",
        endDate: "2012-10-31",
        autoclose: true,
        weekStart: 0
    };
 *
 *
 * Login controller

app.controller('LoginCtrl', function ($scope, $window, user) {

  // submit form
  $scope.submit = function() {
      console.log('UserManage ctrl');
    if ($scope.UserManage && $scope.password) {
      user.UserManage($scope.UserManage, $scope.password)
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

 */


/**
 * Profile controller

app.controller('ProfileCtrl', function ($scope, $window, user) {


console.log('before get profile');
 user.getprofile($scope.user,$scope);




  // submit form
  $scope.submit = function () {
    if ($scope.ssn && $scope.name && $scope.mobilephone) {
      user.saveprofile($scope.user,$scope.ssn,$scope.name, $scope.mobilephone)
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

 */


/**
 * Signup controller

app.controller('SignupCtrl', function ($scope, $window, user) {

  // submit form
  $scope.submit = function() {
    if ($scope.username && $scope.email && $scope.password) {
      user.signup($scope.firstname,$scope.lastname,$scope.username, $scope.email, $scope.password)
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
app.controller('TypeCtrl', function ($scope, $window, user) {

    console.log('before get typelist');

    user.getsistype($scope.user,$scope);


});
 */
