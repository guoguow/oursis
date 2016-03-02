
var app = angular.module('myApp.controllers');

app.controller('HIndexCtrl', function ($scope, $window,health) {

    console.log("get index page data of  health");
    if($scope.st1.s3.sign==2){
        console.log("医疗参保标识 sign=", $scope.st1.s3.sign);
        $scope.idx2=health.getindex();
        $scope.idx22=health.getindex2();
        $scope.Hye=health.getye();
        console.log($scope.idx2);
    }else if ( $scope.st1.s3.sign==22 ){
        console.log("医疗参保标识 sign=", $scope.st1.s3.sign);
        $scope.idx22=health.getindex();
        $scope.idx2=health.getindex2();
        $scope.Hye=health.getye2();

    }
});
app.controller('hzCtrl', function ($scope, $window,health){
    var chart = nv.models.multiBarChart();

    health.hpaidz($scope)
        .then(function (data)
        {
            nv.addGraph(function() {
                var chart = nv.models.lineChart()
                        .margin({left: 100})  //Adjust chart margins to give the x-axis some breathing room.
                        .useInteractiveGuideline(true)  //We want nice looking tooltips and a guideline!
                        .transitionDuration(700)  //how fast do you want the lines to transition?
                        .showLegend(true)       //Show the legend, allowing users to turn on/off line series.
                       .showYAxis(true)        //Show the y-axis
                       .showXAxis(true)        //Show the x-axis
                chart.xAxis     //Chart x-axis settings
                    .axisLabel('年度 (年)')
                 //   .tickFormat(function(d) { return d })
                   .tickValues($scope.hzx)


                chart.yAxis     //Chart y-axis settings
                    .axisLabel('缴费额 (元)')
                    .tickFormat(d3.format('.02f'));

                /* Done setting the chart up? Time to render it!*/
                var myData =[
                    {
                        key: "历年医疗汇总数据",
                        color: "#51A351",
                        values:$scope.hz

                    }
                ] ;   //You need data...

                d3.select('#chart1 svg')    //Select the <svg> element you want to render the chart in.
                    .datum(myData)         //Populate the <svg> element with chart data...
                    .call(chart);          //Finally, render the chart!

                //Update the chart when window resizes.
                nv.utils.windowResize(function() { chart.update() });
                return chart;
            });
        }, function (error) {
            $scope.error = error;
        });
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

    //绘制分析图的部分额
    console.log("get  data for  endowment payhistory stack");

    health.hpays($scope.user, $scope)
        .then(function (data) {

            var chart = nv.models.multiBarChart();
if($scope.st1.s3.sign==2){
    /*These lines are all chart setup.  Pick and choose which chart features you want to utilize. */
    nv.addGraph(function() {
        var chart = nv.models.lineChart()
                .margin({left: 100})  //Adjust chart margins to give the x-axis some breathing room.
                .useInteractiveGuideline(true)  //We want nice looking tooltips and a guideline!
                .transitionDuration(700)  //how fast do you want the lines to transition?
                .showLegend(true)       //Show the legend, allowing users to turn on/off line series.
                .showYAxis(true)        //Show the y-axis
                .showXAxis(true)        //Show the x-axis
            ;
        chart.xAxis     //Chart x-axis settings
            .axisLabel('年度 (年)')
            .tickFormat(d3.format(',y'));

        chart.yAxis     //Chart y-axis settings
            .axisLabel('缴费额 (元)')
            .tickFormat(d3.format('.02f'));

        /* Done setting the chart up? Time to render it!*/
        var myData =[
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
        ] ;   //You need data...

        d3.select('#chart1 svg')    //Select the <svg> element you want to render the chart in.
            .datum(myData)         //Populate the <svg> element with chart data...
            .call(chart);          //Finally, render the chart!

        //Update the chart when window resizes.
        nv.utils.windowResize(function() { chart.update() });
        return chart;
    });

    nv.addGraph(function() {
        var chart = nv.models.multiBarChart()
                .margin({left: 100})  //Adjust chart margins to give the x-axis some breathing room.
                .transitionDuration(350)
                .reduceXTicks(false)   //If 'false', every single x-axis tick label will be rendered.
                .rotateLabels(0)      //Angle to rotate x-axis labels.
                .showControls(true)   //Allow user to switch between 'Grouped' and 'Stacked' mode.
                .groupSpacing(0.3)    //Distance between each group of bars.
            .showYAxis(true)        //Show the y-axis
            .showXAxis(true)        //Show the x-axis
        ;


        chart.xAxis
            .tickFormat(d3.format(',f'))
            .axisLabel('年度 (年)');
        chart.yAxis
            .tickFormat(d3.format(',.1f'))
            .axisLabel('缴费额 (元)');

        d3.select('#chart2 svg')
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


}
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

        }, function (error) {
            $scope.error = error;
        });

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
            {id:'00', name:'汇总'},
        {id:'01', name:'门诊'},
        {id:'02', name:'住院'},
        {id:'03', name:'慢性病'}
    ];
 //   $('#mytab').tab('show');

    $scope.isTab = function(id){

        switch (id) {
            case "00":
            {
                $scope.tab1=00;

            };break;

            case "01":
            {
                $scope.tab1=01;
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

                health.hpaidm($scope)
                    .then(function (data) {
                        console.log($scope.hm);
                        console.log($scope.hm[0].name);

                        nv.addGraph(function() {
                            var chart = nv.models.lineChart()
                                    .margin({left: 100})  //Adjust chart margins to give the x-axis some breathing room.
                                    .useInteractiveGuideline(true)  //We want nice looking tooltips and a guideline!
                                    .transitionDuration(700)  //how fast do you want the lines to transition?
                                    .showLegend(true)       //Show the legend, allowing users to turn on/off line series.
                                    .showYAxis(true)        //Show the y-axis
                                    .showXAxis(true)        //Show the x-axis
                                ;
                            chart.xAxis     //Chart x-axis settings
                                .axisLabel('年度 (年)')
                                .tickValues($scope.hmx)

                            chart.yAxis     //Chart y-axis settings
                                .axisLabel('缴费额 (元)')
                                .tickFormat(d3.format('.02f'));

                            /* Done setting the chart up? Time to render it!*/
                            var myData =[
                                {
                                    key: "sum",
                                    color: "#51A351",
                                    values: $scope.hmsum
                                }
                            ] ;   //You need data...

                            d3.select('#chart2 svg')    //Select the <svg> element you want to render the chart in.
                                .datum(myData)         //Populate the <svg> element with chart data...
                                .call(chart);          //Finally, render the chart!

                            //Update the chart when window resizes.
                            nv.utils.windowResize(function() { chart.update() });
                            return chart;
                        });

                        nv.addGraph(function() {
                            var chart = nv.models.multiBarChart()
                                    .margin({left: 100})  //Adjust chart margins to give the x-axis some breathing room.
                                    .transitionDuration(350)
                                    .reduceXTicks(false)   //If 'false', every single x-axis tick label will be rendered.
                                    .rotateLabels(0)      //Angle to rotate x-axis labels.
                                    .showControls(true)   //Allow user to switch between 'Grouped' and 'Stacked' mode.
                                    .groupSpacing(0.3)    //Distance between each group of bars.
                                    .showYAxis(true)        //Show the y-axis
                                    .showXAxis(true)        //Show the x-axis
                                ;


                            chart.xAxis
                                .tickFormat(d3.format(',f'))
                                .axisLabel('年度 (年)');
                            chart.yAxis
                                .tickFormat(d3.format(',.1f'))
                                .axisLabel('缴费额 (元)');

                            d3.select('#chart22 svg')
                                .datum([
                                    {
                                        key: $scope.hm[0].name,
                                        color: "#51A351",
                                        values:$scope.hm[0].sales
                                    },
                                    {
                                        key: $scope.hm[1].name,
                                        color: "#BD362F",
                                        values:$scope.hm[1].sales
                                    },
                                    {
                                        key: $scope.hm[2].name,
                                        color: "#9966FF",
                                        values:$scope.hm[2].sales
                                    },
                                    {
                                        key: $scope.hm[3].name,
                                        color: "#3333FF",
                                        values:$scope.hm[3].sales
                                    },
                                    {
                                        key: $scope.hm[4].name,
                                        color: "#FF0066",
                                        values:$scope.hm[4].sales
                                    }
                                ]  )
                                .call(chart);

                            nv.utils.windowResize(chart.update);

                            return chart;
                        });


                    },
                    function (error) {
                        $scope.error = error;
                    });

            }
                ;
                break;

            case "02":
            {
                $scope.tab1=02;
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

                health.hpaidzhu($scope)
                    .then(function (data) {
                        var chart = nv.models.multiBarChart();
                        d3.select('#chart22 svg').datum([
                            {
                                key: $scope.hzhu[0].name,
                                color: "#51A351",
                                values:$scope.hzhu[0].sales
                            },
                            {
                                key: $scope.hzhu[1].name,
                                color: "#BD362F",
                                values:$scope.hzhu[1].sales
                            },
                            {
                                key: $scope.hzhu[2].name,
                                color: "#9966FF",
                                values:$scope.hzhu[2].sales
                            },
                            {
                                key: $scope.hzhu[3].name,
                                color: "#3333FF",
                                values:$scope.hzhu[3].sales
                            },
                            {
                                key: $scope.hzhu[4].name,
                                color: "#FF0066",
                                values:$scope.hzhu[4].sales
                            }
                        ]).transition().duration(500).call(chart);

                    }, function (error) {
                        $scope.error = error;
                    });
            }
                ;
                break;
            case "03":
            {
                $scope.tab1=03;
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

                health.hpaidmen($scope)
                    .then(function (data) {

                        var chart = nv.models.multiBarChart();
                        d3.select('#chart22 svg').datum([
                            {
                                key: $scope.hmen[0].name,
                                color: "#51A351",
                                values:$scope.hmen[0].sales
                            },
                            {
                                key: $scope.hmen[1].name,
                                color: "#BD362F",
                                values:$scope.hmen[1].sales
                            },
                            {
                                key: $scope.hmen[2].name,
                                color: "#9966FF",
                                values:$scope.hmen[2].sales
                            },
                            {
                                key: $scope.hmen[3].name,
                                color: "#3333FF",
                                values:$scope.hmen[3].sales
                            },
                            {
                                key: $scope.hmen[4].name,
                                color: "#FF0066",
                                values:$scope.hmen[4].sales
                            }
                        ]).transition().duration(500).call(chart);

                    }, function (error) {
                        $scope.error = error;
                    });


            }; break;
        }
    };
    $scope.isTab('00');


});

app.controller('haccountCtrl', function ($scope, $window,user,health,pag) {

    console.log('before get decide which payhist type');
    $scope.user = user.get();

    $scope.listNames = [
        {id:'01', name:'收入'},
        {id:'02', name:'支出'}
    ];

  //  $('#mytab').tab('show');

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


app.controller('hyearCtrl',function ($scope, $window,health) {
    console.log("get ryear data of  health payhistory table");

   health.getline($scope)
       .then(function(data) {
           $scope.nofLines=1;

           $scope.exampleData = [
               {
                   "key": "医疗历年累计额",
                   "values":$scope.line
               }
           ];

       },function(error) {
           $scope.error = error;
       }) ;




    $scope.date3=$scope.st1.s3.date;
    health.getyear($scope.user,$scope,$scope.date3);

    console.log("get record page data of  health");
    health.getrecord($scope.user,$scope,$scope.date3);

    // submit form
    $scope.submit = function(date11) {
        console.log("get record page data of past  health");

        $scope.date3=date11;
        health.getrecord($scope.user,$scope,$scope.date3);
    };
});
