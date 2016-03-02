
var app = angular.module('myApp.controllers');


/**
 *payhist.html`s  pay controller
 * for payhist modules
 */


app.controller('BIndexCtrl', function ($scope, $window,birth) {

    console.log("get index page data of  birth");
    if($scope.st1.s5.sign==3){
        console.log("生育参保标识 sign=", $scope.st1.s5.sign);
        $scope.idx5=birth.getindex();
    }
});
app.controller('BirthPayCtrl', function ($scope, $window,birth,pag) {

    birth.bpaystack($scope.user, $scope)
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


    $scope.statsign=2;

    console.log('before get birth detail payhist data');
    birth.payhist($scope.user,$scope);
    pag.getAll($scope,11);

    $scope.load = function (page) {
        $scope.currentPage=page;
        birth.payhist($scope.user,$scope);
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

        birth.payhist($scope.user,$scope, $scope.dt1,$scope.dt2);
    }

});

app.controller('BirthPaidCtrl', function ($scope, $window,birth,pag) {


    birth.bpaidstack($scope.user, $scope)
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
    $scope.statsign=7;

    console.log('before get birth paid detail data');

    birth.paid($scope.user,$scope);
    pag.getAll($scope,12);

    $scope.load = function (page) {
        $scope.currentPage=page;
        birth.paid($scope.user,$scope);
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

        birth.paid($scope.user,$scope, $scope.dt1,$scope.dt2);
    }

});

app.controller('byearCtrl', function ($scope, $window,birth) {
    console.log("get ryear data of  birth payhistory table");
    $scope.date5=$scope.st1.s5.date;
    birth.getyear($scope.user,$scope,$scope.date5);

    console.log("get record page data of  endowment");
    birth.getrecord($scope.user,$scope,$scope.date5);

    // submit form
    $scope.submit = function(date11) {
        console.log("get record page data of past  endowment");

        $scope.date5=date11;
        birth.getrecord($scope.user,$scope,$scope.date5);
    };
});