
var app = angular.module('myApp.controllers');


/**
 *payhist.html`s  pay controller
 * for payhist modules
 */


app.controller('UIndexCtrl', function ($scope, $window,unemployment) {

    console.log("get index page data of  unemployment");
    if($scope.st1.s2.sign==5){
        console.log("失业参保标识 sign=", $scope.st1.s2.sign);
        $scope.idx3=unemployment.getindex();
    }
});
app.controller('UnemploymentPayCtrl', function ($scope, $window,unemployment,pag) {

    $scope.statsign=4;

    console.log('before get unemployment detail payhist data');

    unemployment.payhist($scope.user,$scope);
    pag.getAll($scope,31);

    $scope.load = function (page) {
        $scope.currentPage=page;
        unemployment.payhist($scope.user,$scope);
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
            console.log(' start date <end date');
        }
        unemployment.payhist($scope.user,$scope, $scope.dt1,$scope.dt2);
    }

});

app.controller('UnemploymentPaidCtrl', function ($scope, $window,unemployment,pag) {

    $scope.statsign=9;

    console.log('before get unemployment paid detail data');

    unemployment.paid($scope.user,$scope);
    pag.getAll($scope,32);

    $scope.load = function (page) {
        $scope.currentPage=page;
        unemployment.paid($scope.user,$scope);
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
            console.log(' start date <end date');
        }
        unemployment.paid($scope.user,$scope, $scope.dt1,$scope.dt2);
    }

});