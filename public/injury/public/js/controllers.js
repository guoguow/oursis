
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

    injury.ipaystack($scope.user, $scope)
        .then(function (data) {
            var chart = nv.models.multiBarChart();
            d3.select('#chart1 svg').datum([
                    {
                        key: "个人",
                        color: "#51A351",
                        values:$scope.eg

                    },
                    {
                        key: "单位",
                        color: "#BD362F",
                        values:$scope.ed

                    }
                ]

            ).transition().duration(500).call(chart);
        }, function (error) {
            $scope.error = error;
        });

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
    injury.ipaidstack($scope.user, $scope)
        .then(function (data) {


            var chart = nv.models.multiBarChart();
            d3.select('#chart1 svg').datum([
                    {
                        key: "补贴金额",
                        color: "#51A351",
                        values:$scope.eg

                    }
                ]

            ).transition().duration(500).call(chart);


        }, function (error) {
            $scope.error = error;
        });
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

app.controller('IyearCtrl', function ($scope, $window,injury) {
    console.log("get ryear data of  injury payhistory table");
    $scope.date4=$scope.st1.s4.date;
    injury.getyear($scope.user,$scope,$scope.date4);

    console.log("get record page data of  injury");
    injury.getrecord($scope.user,$scope,$scope.date4);

    // submit form
    $scope.submit = function(date44) {
        console.log("get record page data of past  injury");

        $scope.date4=date44;
        injury.getrecord($scope.user,$scope,$scope.date4);

    };



});
