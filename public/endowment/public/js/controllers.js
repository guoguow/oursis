
var app = angular.module('myApp.controllers');


/**
 *payhist.html`s  pay controller
 * for payhist modules
 */

app.controller('EIndexCtrl', function ($scope, $window,endow) {
    console.log("get index page data of  endowment");
    if($scope.st1.s1.sign==1|| $scope.st1.s1.sign==11){
        console.log("养老参保标识 sign=", $scope.st1.s1.sign);
        endow.getindex($scope.user,$scope);
    }
});

app.controller('EndowPayCtrl', function ($scope, $window,endow) {

    console.log('before get endowment detail payhist data');

      if($scope.st1.s1.sign==1){

            $scope.statsign=0;
            console.log($scope.statsign);
          endow.payhist($scope.user,$scope);

          $scope.submit = function() {
              // submit form
              console.log('check start date < end date');
              if ($scope.dt1 > $scope.dt2) {
                  console.log('start date > end date');
                  $scope.error = "开始时间大于结束时间，请检查! ";
              }
              else {
                  console.log(' start date <end date');
              }
              endow.payhist($scope.user, $scope, $scope.dt1, $scope.dt2);
          }
      }
      else{

          $scope.statsign=10;
          console.log($scope.statsign);
          endow.jmpay($scope.user,$scope);
          $scope.submit = function() {
              // submit form
              console.log('check start date < end date');
              if ($scope.dt1 > $scope.dt2) {
                  console.log('start date > end date');
                  $scope.error = "开始时间大于结束时间，请检查! ";
              }
              else {
                  console.log(' start date <end date');
              }
              endow.jmpay($scope.user,$scope, $scope.dt1,$scope.dt2);
          }

      }
});
app.controller('outpayCtrl', function ($scope, $window,endow) {

    console.log('before get endowment detail payhist data');

    if($scope.st1.s1.sign==11){

        $scope.statsign=0;
        console.log($scope.statsign);
        endow.payhist($scope.user,$scope);

        $scope.submit = function() {
            // submit form
            console.log('check start date < end date');
            if ($scope.dt1 > $scope.dt2) {
                console.log('start date > end date');
                $scope.error = "开始时间大于结束时间，请检查! ";
            }
            else {
                console.log(' start date <end date');
            }
            endow.payhist($scope.user, $scope, $scope.dt1, $scope.dt2);
        }
    }
    else{
        $scope.statsign=10;
        console.log($scope.statsign);
        endow.jmpay($scope.user,$scope);
        $scope.submit = function() {
            // submit form
            console.log('check start date < end date');
            if ($scope.dt1 > $scope.dt2) {
                console.log('start date > end date');
                $scope.error = "开始时间大于结束时间，请检查! ";
            }
            else {
                console.log(' start date <end date');
            }
            endow.jmpay($scope.user,$scope, $scope.dt1,$scope.dt2);
        }

    }
});

app.controller('EndowPaidCtrl', function ($scope, $window,endow) {

    console.log('before get endowment paid detail data');
    if($scope.st1.s1.sign==1){

        $scope.statsign=5;
        console.log($scope.statsign);
        endow.paid($scope.user,$scope);

        $scope.submit = function() {
            // submit form
            console.log('check start date < end date');
            if ($scope.dt1 > $scope.dt2) {
                console.log('start date > end date');
                $scope.error = "开始时间大于结束时间，请检查! ";
            }
            else {
                console.log(' start date <end date');
            }
            endow.paid($scope.user,$scope, $scope.dt1,$scope.dt2);
        }
    }
    else{

        $scope.statsign=11;
        console.log($scope.statsign);
        endow.jmpaid($scope.user,$scope);
        $scope.submit = function() {
            // submit form
            console.log('check start date < end date');
            if ($scope.dt1 > $scope.dt2) {
                console.log('start date > end date');
                $scope.error = "开始时间大于结束时间，请检查! ";
            }
            else {
                console.log(' start date <end date');
            }
            endow.jmpaid($scope.user,$scope, $scope.dt1,$scope.dt2);
        }
    }
});

app.controller('outpaidCtrl', function ($scope, $window,endow) {

    console.log('before get endowment paid detail data');
    if($scope.st1.s1.sign==11){

        $scope.statsign=5;
        console.log($scope.statsign);
        endow.paid($scope.user,$scope);

        $scope.submit = function() {
            // submit form
            console.log('check start date < end date');
            if ($scope.dt1 > $scope.dt2) {
                console.log('start date > end date');
                $scope.error = "开始时间大于结束时间，请检查! ";
            }
            else {
                console.log(' start date <end date');
            }
            endow.paid($scope.user,$scope, $scope.dt1,$scope.dt2);
        }
    }
    else{

        $scope.statsign=11;
        console.log($scope.statsign);
        endow.jmpaid($scope.user,$scope);
        $scope.submit = function() {
            // submit form
            console.log('check start date < end date');
            if ($scope.dt1 > $scope.dt2) {
                console.log('start date > end date');
                $scope.error = "开始时间大于结束时间，请检查! ";
            }
            else {
                console.log(' start date <end date');
            }
            endow.jmpaid($scope.user,$scope, $scope.dt1,$scope.dt2);
        }
    }
});
app.controller('acountCtrl', function ($scope, $window,user,endow,pag) {

    console.log('before get decide which payhist type');
    $scope.user = user.get();

    $scope.listNames = [
        {id:'01', name:'收入'},
        {id:'02', name:'支出'}
    ];

    $('#mytab').tab('show');
   // $scope.id='01';
    //$scope.list=[{value:'划入日期'},{value:'划入金额'},{value:'账户余额'}];
    $scope.isTab = function(id){
        if (id==02) {
           console.log('get the out data');
            $scope.list=[{value:'消费日期'},{value:'消费金额'},{value:'消费金额'},{value:'账户余额'}];
        }
        else{
            console.log(' get in data');
            $scope.list=[{value:'划入日期'},{value:'划入金额'},{value:'账户余额'}];
        }
    };

    $scope.submit = function() {
        // submit form
        console.log('check start date < end date');
        if ( $scope.dt1>$scope.dt2 ) {
            console.log('start date > end date');
            $scope.error = "开始时间大于结束时间，请检查! ";
        }
        else {
            console.log(' start date <end date');
        }
    }
});


