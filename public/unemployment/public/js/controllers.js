
var app = angular.module('myApp.controllers');


/**
 *payhist.html`s  pay controller
 * for payhist modules
 */


app.controller('UIndexCtrl', function ($scope, $window,unemployment) {
    unemployment.getIDCard($scope);
    console.log("get index page data of  unemployment");
    if($scope.st1.s2.sign==5){
        console.log("失业参保标识 sign=", $scope.st1.s2.sign);
        $scope.idx3=unemployment.getindex();
    }
});
app.controller('UnemploymentPayCtrl', function ($scope, $window,unemployment,pag) {
    unemployment.unpaystack($scope.user, $scope)
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

    unemployment.unpaidstack($scope.user, $scope)
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

    $scope.statsign=9;
    $scope.idcard=unemployment.getcard();
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

app.controller('UyearCtrl', function ($scope, $window,unemployment) {
    console.log("get uyear data of  injury payhistory table");


    $scope.idcard=unemployment.getcard();
    $scope.date2=$scope.st1.s2.date;
    unemployment.getyear($scope.user,$scope,$scope.date2);

    console.log("get uecord page data of  unemployment");
    unemployment.getrecord($scope.user,$scope,$scope.date2)
        .then(function(data) {
            $scope.data = [
                {label:"单位缴费额", value:  $scope.upayRecord.comp, color: "#1f77b4"},
                {label:"个人缴费额" , value: $scope.upayRecord.pers, color: "#ff7f0e"},
                {label: "个人月缴费基数", value:$scope.upayRecord.AAE180, color: "#2ca02c"}
            ];
            $scope.options = {thickness: 30};

        },function(error) {
            $scope.error = error;
        }) ;

    // submit form
    $scope.submit = function(date22) {
        console.log("get uecord page data of past  unemployment");
        $scope.date2=date22;
        unemployment.getrecord($scope.user,$scope,$scope.date2);

    };
    $scope.submit2 = function(date22,rq) {
        $scope.date2=date22;
        $scope.aac020=rq;
        unemployment.getPaidrecord($scope.user,$scope,$scope.date2);

    };


});