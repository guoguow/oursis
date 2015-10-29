
var services = angular.module('myApp.services');



services.factory('birth', function($http, $cookies,$q){

    return {

        getindex: function() {

            return angular.fromJson($cookies.idx5);


        },
        paid: function(user,$scope,dt1,dt2) {

            console.log('before get paid data');

            $http.post('/birthpaid',{username:user.username,ssn:user.ssn,page:$scope.currentPage,pageSize:$scope.pageSize,dt1:dt1,dt2:dt2}).success(function(data) {
                console.log('return get birth detail  paid data ');
                $scope.epaid = data;
            }).error(function(data) {
                //  deferred.reject(data.error);
                console.log(' error happened when return get birth detail  paid data for the page');
            });
        },
        payhist: function(user,$scope,dt1,dt2) {

            console.log('before get payhist data');

            $http.post('/birthpay',{username:user.username,ssn:user.ssn,page:$scope.currentPage,pageSize:$scope.pageSize,dt1:dt1,dt2:dt2}).success(function(data) {
                console.log('return get birth detail  payhist data ');
                $scope.epay=data;

            }).error(function(data) {
                //  deferred.reject(data.error);
                console.log(' error happened when return get birth detail  payhist data for the page');
            });
        }



    };
});






