
var app = angular.module('myApp.controllers');


/**
 *payhist.html`s  pay controller
 * for payhist modules
 */


app.controller('IIndexCtrl', function ($scope, $window,injury) {

    console.log("get index page data of  injury");
    if($scope.st1.s4.sign==4){
        console.log("工伤参保标识 sign=", $scope.st1.s4.sign);
        $scope.idx4=injury.getindex();
        console.log($scope.idx4);
    }
});
app.controller('InjuryPayCtrl', function ($scope, $window,injury,pag) {

    $scope.statsign=3;

    console.log('before get Injury detail payhist data');

    injury.payhist($scope.user,$scope);
    pag.getAll($scope,21);

    $scope.load = function (page) {
        $scope.currentPage=page;
        injury.payhist($scope.user,$scope);
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
        injury.payhist($scope.user,$scope, $scope.dt1,$scope.dt2);
    }

});

app.controller('InjuryPaidCtrl', function ($scope, $window,injury,pag) {

    $scope.statsign=8;

    console.log('before get injury paid detail data');

    injury.paid($scope.user,$scope);
    pag.getAll($scope,22);

    $scope.load = function (page) {
        $scope.currentPage=page;
        injury.paid($scope.user,$scope);
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
        injury.paid($scope.user,$scope, $scope.dt1,$scope.dt2);
    }

});