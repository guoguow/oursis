
var app = angular.module('myApp.controllers');


/**
 *payhist.html`s  pay controller
 * for payhist modules
 */

app.controller('EIndexCtrl', function ($scope, $window,endow) {
    console.log("get index page data of  endowment");
    if($scope.st1.s1.sign==1){
        console.log("职工养老参保标识 sign=", $scope.st1.s1.sign);
        $scope.idx1=endow.getindex();
        $scope.idx11=endow.getindex2();
        $scope.date1=$scope.st1.s1.date;
        endow.accye($scope.user,$scope,$scope.date1);

        endow.getstatus($scope.user,$scope);

        console.log($scope.estatus);
    }else if ( $scope.st1.s1.sign==11){
        console.log("居民养老参保标识 sign=", $scope.st1.s1.sign);
        $scope.idx11=endow.getindex();
        $scope.idx1=endow.getindex2();
        endow.accye($scope.user,$scope);

        endow.getstatus($scope.user,$scope);
        console.log("居民养老发放保标识"+$scope.estatus);

    }

});

app.controller('yearCtrl', function ($scope, $window,endow) {
    console.log("get ryear data of  endowment payhistory table");
    $scope.date1=$scope.st1.s1.date;
    endow.getyear($scope.user,$scope,$scope.date1);

    console.log("get record page data of  endowment");
    endow.getrecord($scope.user,$scope,$scope.date1);

    // submit form
    $scope.submit = function(date11) {
        console.log("get record page data of past  endowment");

        $scope.date1=date11;
        endow.getrecord($scope.user,$scope,$scope.date1);
    };
});


app.controller('EndowPayCtrl', function ($scope, $window,endow,pag) {

    console.log('before get endowment detail payhist data');

    if($scope.st1.s1.sign==1){

        $scope.statsign=0;
        console.log($scope.statsign);
        pag.getAll($scope,411);
        endow.payhist($scope.user,$scope);

        $scope.load = function (page) {
            $scope.currentPage=page;
            console.log($scope.currentPage+"++++++++++++++"+$scope.totalPage);
            endow.payhist($scope.user,$scope);
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
            endow.payhist($scope.user, $scope, $scope.dt1, $scope.dt2);
        }
    }
    else{

        $scope.statsign=10;
        console.log($scope.statsign);
        pag.getAll($scope,412);

        endow.jmpay($scope.user,$scope);

        $scope.load = function (page) {
            $scope.currentPage=page;
            console.log($scope.currentPage+"++++++++++++++"+$scope.totalPage);
            endow.jmpay($scope.user,$scope);
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
            endow.jmpay($scope.user,$scope, $scope.dt1,$scope.dt2);
        }

    }

        //绘制分析图的部分额
        console.log("get  data for  endowment payhistory stack");

    endow.epaystack($scope.user, $scope)
        .then(function (data) {

            nv.addGraph(function() {
                var chart = nv.models.multiBarChart()
                        .transitionDuration(350)
                        .reduceXTicks(false)   //If 'false', every single x-axis tick label will be rendered.
                        .rotateLabels(0)      //Angle to rotate x-axis labels.
                        .showControls(true)   //Allow user to switch between 'Grouped' and 'Stacked' mode.
                        .groupSpacing(0.1)    //Distance between each group of bars.
                    ;

                chart.xAxis
                    .tickFormat(d3.format(',f'))
                .axisLabel('年度 (年)');
                chart.yAxis
                    .tickFormat(d3.format(',.1f'))
                    .axisLabel('缴费额 (元)');

                d3.select('#chart1 svg')
                    .datum([
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
                    ])
                    .call(chart);

                nv.utils.windowResize(chart.update);

                return chart;
            });






  /*          var chart = nv.models.multiBarChart();
            if($scope.st1.s1.sign==1){
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

            ).transition().duration(500).call(chart);}
            else{
                d3.select('#chart1 svg').datum([
                        {
                            key: "月缴费额",
                            color: "#51A351",
                            values:$scope.eg

                        },
                        {
                            key: "月补贴额",
                            color: "#BD362F",
                            values:$scope.ed

                        }
                    ]


                ).transition().duration(500).call(chart);
            }
*/

        }, function (error) {
            $scope.error = error;
        });
});

app.controller('outpayCtrl', function ($scope, $window,endow,pag) {

    console.log('before get endowment detail payhist data');

    if($scope.st1.s1.sign==11){

        $scope.statsign=0;
        console.log($scope.statsign);
        pag.getAll($scope,411);

        endow.payhist($scope.user,$scope);

        $scope.load = function (page) {
            $scope.currentPage=page;
            console.log($scope.currentPage+"++++++++++++++"+$scope.totalPage);
            endow.payhist($scope.user,$scope);
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
            endow.payhist($scope.user, $scope, $scope.dt1, $scope.dt2);
        }
    }
    else{
        $scope.statsign=10;
        console.log($scope.statsign);
        pag.getAll($scope,412);

        endow.jmpay($scope.user,$scope);

        $scope.load = function (page) {
            $scope.currentPage=page;
            console.log($scope.currentPage+"++++++++++++++"+$scope.totalPage);
            endow.jmpay($scope.user,$scope);
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
            endow.jmpay($scope.user,$scope, $scope.dt1,$scope.dt2);
        }

    }
});

app.controller('EndowPaidCtrl', function ($scope, $window,endow,pag) {


    //绘制分析图的部分额
    console.log("get  data for  endowment payhistory stack");

    endow.epaids($scope.user, $scope)
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
    console.log('before get endowment paid detail data');
    if($scope.st1.s1.sign==1){

        $scope.statsign=5;
        console.log($scope.statsign);
        pag.getAll($scope,421);

        endow.paid($scope.user,$scope);

        $scope.load = function (page) {
            $scope.currentPage=page;
            console.log($scope.currentPage+"++++++++++++++"+$scope.totalPage);
            endow.paid($scope.user,$scope);
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
            endow.paid($scope.user,$scope, $scope.dt1,$scope.dt2);
        }
    }
    else{

        $scope.statsign=11;
        console.log($scope.statsign);
        pag.getAll($scope,422);

        endow.jmpaid($scope.user,$scope);

        $scope.load = function (page) {
            $scope.currentPage=page;
            console.log($scope.currentPage+"++++++++++++++"+$scope.totalPage);
            endow.jmpaid($scope.user,$scope);
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
            endow.jmpaid($scope.user,$scope, $scope.dt1,$scope.dt2);
        }
    }
});

app.controller('outpaidCtrl', function ($scope, $window,endow,pag) {

    console.log('before get endowment paid detail data');
    if($scope.st1.s1.sign==11){

        $scope.statsign=5;
        console.log($scope.statsign);
        pag.getAll($scope,421);

        endow.paid($scope.user,$scope);

        $scope.load = function (page) {
            $scope.currentPage=page;
            console.log($scope.currentPage+"++++++++++++++"+$scope.totalPage);
            endow.paid($scope.user,$scope);
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
            endow.paid($scope.user,$scope, $scope.dt1,$scope.dt2);
        }
    }
    else{

        $scope.statsign=11;
        console.log($scope.statsign);
        pag.getAll($scope,422);

        endow.jmpaid($scope.user,$scope);

        $scope.load = function (page) {
            $scope.currentPage=page;
            console.log($scope.currentPage+"++++++++++++++"+$scope.totalPage);
            endow.jmpaid($scope.user,$scope);
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
            endow.jmpaid($scope.user,$scope, $scope.dt1,$scope.dt2);
        }
    }
});
app.controller('EndowAccountCtrl', function ($scope, $window,user,endow,pag) {

    console.log('before get decide which payhist type');
    $scope.user = user.get();

    $scope.listNames = [
        {id:'01', name:'收入'},
        {id:'02', name:'支出'}
    ];

    $('#mytab').tab('show');
    $scope.isTab = function(id){
        if (id==02) {
            console.log('get the out data');
            $scope.list=[{value:'拨付日期'},{value:'拨付金额'},{value:'账户余额'}];
            pag.getAll($scope,402);

            endow.getExp($scope);

            $scope.load = function (page) {
                $scope.currentPage=page;
                console.log($scope.currentPage+"++++++++++++++"+$scope.totalPage);
                endow.getExp($scope);
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
                    endow.getExp($scope);

                }
            }
        }
        else{
            console.log(' get in data');
            $scope.list=[{value:'划入日期'},{value:'划入金额'},{value:'账户余额'}];
            pag.getAll($scope,401);

            endow.getIncome($scope);

            $scope.load = function (page) {
                $scope.currentPage=page;
                console.log($scope.currentPage+"++++++++++++++"+$scope.totalPage);
                endow.getIncome($scope);
                pag.getPages($scope);
                $scope.submit = function() {
                    // submit form
                    console.log('check start date < end date');
                    if ( $scope.dt1>$scope.dt2 ) {
                        console.log('start date > end date');
                        $scope.error = "开始时间大于结束时间，请检查! ";
                    }
                    else {
                        console.log(' start date <end date');
                        endow.getIncome($scope);

                    }
                }
            };

        }
    };
    $scope.isTab('01');



});


