
var app = angular.module('myApp.controllers');


/**
 *payment.html`s  pay controller
 * for payhist modules
 */



app.controller('PaymentCtrl', function ($scope, $window,user,payment,pag) {


    console.log('before get decide which payhist type');

    $scope.user = user.get();

        $scope.listNames = [
            {id:'01', name:'住院'},
            {id:'02', name:'门诊'},
            {id:'03', name:'慢性病'}
        ];

    $('#mytab').tab('show');

    $scope.list=[{value:'医院编码'},{value:'疾病编码'},{value:'住院日期'},{value:'出院日期'}];
    payment.getPayment($scope,'01');
    $scope.id='01';

    $scope.load = function (page) {
        $scope.currentPage=page;
        console.log($scope.currentPage+"++++++++++++++"+$scope.totalPage);
        payment.getPayment($scope,$scope.id);
        pag.getPages($scope);
    };

    $scope.isTab = function(id){
         $scope.currentPage=0;
           payment.getPayment($scope,id);
           payment.getAll($scope,id);
           $scope.id=id;


    };
     //   payment.payment($scope);
      //  console.log($scope.ph);


});



