
var app = angular.module('myApp.controllers');


/**
 *payhist.html`s  pay controller
 * for payhist modules
 */

app.controller('HealthCtrl', function ($scope, $window,health) {

    console.log("reset set payforsign  for health");
    //setpay.reset($scope.user,$scope);
    health.setpay2($scope.user,$scope);
});
app.controller('HealthPmCtrl', function ($scope, $window,user,healthpm,pag) {


    console.log('before get decide which payhist type');

    $scope.user = user.get();

    $scope.listNames = [
        {id:'01', name:'住院'},
        {id:'02', name:'门诊'},
        {id:'03', name:'慢性病'}
    ];

    $('#mytab').tab('show');

    $scope.list=[{value:'医院编码'},{value:'疾病编码'},{value:'住院日期'},{value:'出院日期'}];
    healthpm.getPayment($scope,'01');
    $scope.id='01';

    $scope.load = function (page) {
        $scope.currentPage=page;
        console.log($scope.currentPage+"++++++++++++++"+$scope.totalPage);
        healthpm.getPayment($scope,$scope.id);
        pag.getPages($scope);
    };

    $scope.isTab = function(id){
        $scope.currentPage=0;
        healthpm.getPayment($scope,id);
        healthpm.getAll($scope,id);
        $scope.id=id;


    };
    //   payment.payment($scope);
    //  console.log($scope.ph);

    $scope.submit = function() {
        // submit form
        console.log('check start date < end date');
        if ( $scope.dt1>$scope.dt2 ) {
            console.log('start date > end date');
            $scope.error = "开始时间大于结束时间，请检查! ";
        }
        else {
            console.log(' start date <end date');
            healthpm.getPayment($scope,$scope.id);
        }
    }
});