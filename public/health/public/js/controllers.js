
var app = angular.module('myApp.controllers');
app.controller('HIndexCtrl', function ($scope, $window,health) {
    console.log("get index page data of  health");
    if($scope.st1.s3.sign==2){
        console.log("医疗参保标识 sign=", $scope.st1.s3.sign);
        $scope.idx2=health.getindex();
        $scope.idx22=health.getindex2();
    }else if ( $scope.st1.s3.sign==2 ){
        console.log("医疗参保标识 sign=", $scope.st1.s3.sign);
        $scope.idx22=health.getindex();
        $scope.idx2=health.getindex2();
    }
});

app.controller('hPayCtrl', function ($scope, $window,health,pag) {

    console.log('before get healthment detail payhist data');

      if($scope.st1.s3.sign==2){

            $scope.statsign=1;
          pag.getAll($scope,511);
          health.payhist($scope.user,$scope);


          $scope.load = function (page) {
              $scope.currentPage=page;
              health.payhist($scope.user,$scope);
              pag.getPages($scope);
          };
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
          pag.getAll($scope,512);

          health.jmpay($scope.user,$scope);

          $scope.load = function (page) {
              $scope.currentPage=page;
              health.jmpay($scope.user,$scope);
              pag.getPages($scope);
          };
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
app.controller('houtpayCtrl', function ($scope, $window,health,pag) {

    console.log('before get healthment detail payhist data');

    if($scope.st1.s3.sign==22){

        $scope.statsign=1;
        pag.getAll($scope,511);

        health.payhist($scope.user,$scope);

        $scope.load = function (page) {
            $scope.currentPage=page;
            health.payhist($scope.user,$scope);
            pag.getPages($scope);
        };
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
        pag.getAll($scope,512);

        health.jmpay($scope.user,$scope);

        $scope.load = function (page) {
            $scope.currentPage=page;
            health.jmpay($scope.user,$scope);
            pag.getPages($scope);
        };
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

app.controller('hPaidCtrl', function ($scope, $window,health,pag) {

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
                pag.getAll($scope,521);

                health.paid($scope,6);

                $scope.load = function (page) {
                    $scope.currentPage=page;
                    health.paid($scope,6);
                    pag.getPages($scope);
                };
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
                    health.paid( $scope,6);
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
                pag.getAll($scope,522);

                health.paid( $scope,1);

                $scope.load = function (page) {
                    $scope.currentPage=page;
                    health.paid( $scope,1);
                    pag.getPages($scope);
                };
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
                    health.paid( $scope,1);
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
                pag.getAll($scope,523);

                health.paid( $scope,2);

                $scope.load = function (page) {
                    $scope.currentPage=page;
                    health.paid( $scope,2);
                    pag.getPages($scope);
                };
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
                    health.paid($scope,2);
                }

            }; break;
        }
    };
    $scope.isTab('01');

});

app.controller('haccountCtrl', function ($scope, $window,user,health,pag) {

    console.log('before get decide which payhist type');
    $scope.user = user.get();

    $scope.listNames = [
        {id:'01', name:'收入'},
        {id:'02', name:'支出'}
    ];

    $('#mytab').tab('show');
   // $scope.id='01';
    $scope.isTab = function(id){
        if (id==02) {
           console.log('get the out data');
            $scope.list=[{value:'消费日期'},{value:'消费金额'},{value:'消费金额'},{value:'账户余额'}];
            pag.getAll($scope,502);
            health.getExp($scope);

            $scope.load = function (page) {
                $scope.currentPage=page;
                health.getExp($scope);
                pag.getPages($scope);
            };
            $scope.submit = function() {
                // submit form
                console.log('check start date < end date');
                if ( $scope.dt1>$scope.dt2 ) {
                    console.log('start date > end date');
                    $scope.error = "开始时间大于结束时间，请检查! ";
                }
                else {
                    health.getExp($scope);
                    console.log(' start date <end date');
                }
            }
        }
        else{
            console.log(' get in data');
            $scope.list=[{value:'划入日期'},{value:'划入金额'},{value:'账户余额'}];
            pag.getAll($scope,501);
            health.getIncome($scope);

            $scope.load = function (page) {
                $scope.currentPage=page;
                health.getIncome($scope);
                pag.getPages($scope);
            };
            $scope.submit = function() {
                // submit form
                console.log('check start date < end date');
                if ( $scope.dt1>$scope.dt2 ) {
                    console.log('start date > end date');
                    $scope.error = "开始时间大于结束时间，请检查! ";
                }
                else {
                    health.getIncome($scope);
                    console.log(' start date <end date');
                }
            }
        }
    };
$scope.isTab('01');

});



