/**
 * Created by guoguow on 2015/8/21.
 */

var app = angular.module('myApp.controllers');


app.controller('DateCtrl', function ($scope) {

    // submit form

    $scope.submit = function() {

        console.log('check start date < end date');
        if ( $scope.dt1>$scope.dt2 ) {
            console.log('start date > end date');
            $scope.error = "开始时间大于结束时间，请检查! ";
        }
        else {

           console.log(' start date <end date');

        }



    }


});


