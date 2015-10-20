
var app = angular.module('myApp.controllers');

app.controller('hPayCtrl', function ($scope, $window,health) {

    console.log('before get healthment detail payhist data');

      if($scope.st1.s3.sign==2){

            $scope.statsign=1;
            console.log($scope.statsign);
          health.payhist($scope.user,$scope);

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
              health.payhist($scope.user, $scope, $scope.dt1, $scope.dt2);
          }
      }
      else{

          $scope.statsign=20;
          console.log($scope.statsign);
          health.jmpay($scope.user,$scope);
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
              health.jmpay($scope.user,$scope, $scope.dt1,$scope.dt2);
          }

      }
});
app.controller('houtpayCtrl', function ($scope, $window,health) {

    console.log('before get healthment detail payhist data');

    if($scope.st1.s3.sign==22){

        $scope.statsign=1;
        console.log($scope.statsign);
        health.payhist($scope.user,$scope);

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
            health.payhist($scope.user, $scope, $scope.dt1, $scope.dt2);
        }
    }
    else{
        $scope.statsign=20;
        console.log($scope.statsign);
        health.jmpay($scope.user,$scope);
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
            health.jmpay($scope.user,$scope, $scope.dt1,$scope.dt2);
        }

    }
});

app.controller('hPaidCtrl', function ($scope, $window,health) {

    console.log('before get healthment paid detail data');

    $scope.listNames = [
        {id:'01', name:'门诊'},
        {id:'02', name:'住院'},
        {id:'03', name:'慢性病'}
    ];
    $('#mytab').tab('show');
    $scope.isTab = function(id){

        switch (id) {
            case "01":
            {
                console.log(' get in data2222222222');
                $scope.list = [
                    {value: '门诊日期'},
                    {value: '病情说明'},
                    {value: '结算地点'},
                    {value: '医疗统筹类别'},
                    {value: '实际发生费用'},
                    {value: '统筹费用'}
                ];
                health.paid01($scope.user, $scope);
                $scope.submit = function () {
                    // submit form
                    console.log('check start date < end date');
                    if ($scope.dt1 > $scope.dt2) {
                        console.log('start date > end date');
                        $scope.error = "开始时间大于结束时间，请检查! ";
                    }
                    else {
                        console.log(' start date <end date');
                    }
                    health.paid01($scope.user, $scope, $scope.dt1, $scope.dt2);
                }
            }
                ;
                break;

            case "02":
            {
                console.log('get the out data1111111');
                $scope.list = [
                    {value: '医院名称'},
                    {value: '住院日期'},
                    {value: '出院日期'},
                    {value: '疾病名称'},
                    {value: '医疗统筹类别'},
                    {value: '实际发生费用'},
                    {value: '统筹费用'}
                ];

                health.paid02($scope.user, $scope);
                $scope.submit = function () {
                    // submit form
                    console.log('check start date < end date');
                    if ($scope.dt1 > $scope.dt2) {
                        console.log('start date > end date');
                        $scope.error = "开始时间大于结束时间，请检查! ";
                    }
                    else {
                        console.log(' start date <end date');
                    }
                    health.paid02($scope.user, $scope, $scope.dt1, $scope.dt2);
                }
            }
                ;
                break;
            case "03":
            {
                console.log(' get in data33333333333333333');
                $scope.list = [
                    {value: '结算日期'},
                    {value: '疾病名称'},
                    {value: '结算地点'},
                    {value: '医疗统筹类别'},
                    {value: '实际发生费用'},
                    {value: '统筹费用'}
                ];
                health.paid03($scope.user, $scope);
                $scope.submit = function () {
                    // submit form
                    console.log('check start date < end date');
                    if ($scope.dt1 > $scope.dt2) {
                        console.log('start date > end date');
                        $scope.error = "开始时间大于结束时间，请检查! ";
                    }
                    else {
                        console.log(' start date <end date');
                    }
                    health.paid03($scope.user, $scope, $scope.dt1, $scope.dt2);
                }

            }; break;
        }
    };

});


app.controller('hacountCtrl', function ($scope, $window,user,health,pag) {

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


