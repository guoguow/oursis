
var app = angular.module('myApp.controllers');


/**
 *payhist.html`s  pay controller
 * for payhist modules
 */

app.controller('EIndexCtrl', function ($scope, $window,endow) {
    console.log("get index page data of  endowment");
    if($scope.st1.s1.sign==1){
        console.log("养老参保标识 sign=", $scope.st1.s1.sign);
        $scope.idx1=endow.getindex();
        $scope.idx11=endow.getindex2();
    }else if ( $scope.st1.s1.sign==11){
        console.log("养老参保标识 sign=", $scope.st1.s1.sign);
        $scope.idx11=endow.getindex();
        $scope.idx1=endow.getindex2();
    }
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


