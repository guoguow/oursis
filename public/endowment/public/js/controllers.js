
var app = angular.module('myApp.controllers');


/**
 *payhist.html`s  pay controller
 * for payhist modules
 */

app.controller('EIndexCtrl', function ($scope, $window,endow) {

    console.log("get index page data of  endowment");
    endow.getindex($scope.user,$scope);
});

app.controller('EndowmentCtrl', function ($scope, $window,endow) {

    console.log("reset set payforsign  for endowment");
    endow.setpay1($scope.user,$scope);
});

app.controller('EndowPayCtrl', function ($scope, $window,endow) {

    endow.setpaysign($scope.user,$scope);

    console.log('before get endowment detail payhist data');

    endow.payhist($scope.user,$scope);

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
        endow.payhist($scope.user,$scope, $scope.dt1,$scope.dt2);
    }

});

app.controller('EndowPaidCtrl', function ($scope, $window,endow) {

    endow.setpaidsign($scope.user,$scope);

    console.log('before get endowment paid detail data');

    endow.paid($scope.user,$scope);

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
        endow.paid($scope.user,$scope, $scope.dt1,$scope.dt2);
    }

});



