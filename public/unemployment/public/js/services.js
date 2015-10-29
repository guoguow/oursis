
var services = angular.module('myApp.services');



services.factory('unemployment', function($http, $cookies,$q){

    return {

        getindex: function() {

            return angular.fromJson($cookies.idx3);


        },
        paid: function(user,$scope,dt1,dt2) {

            console.log('before get paid data');

            $http.post('/unemploymentpaid',{username:user.username,ssn:user.ssn,page:$scope.currentPage,pageSize:$scope.pageSize,dt1:dt1,dt2:dt2}).success(function(data) {
                console.log('return get unemployment detail  paid data ');
                $scope.epaid = data;
            }).error(function(data) {
                //  deferred.reject(data.error);
                console.log(' error happened when return get unemployment detail  paid data for the page');
            });
        },
        payhist: function(user,$scope,dt1,dt2) {

            console.log('before get payhist data');

            $http.post('/unemploymentpay',{username:user.username,ssn:user.ssn,page:$scope.currentPage,pageSize:$scope.pageSize,dt1:dt1,dt2:dt2}).success(function(data) {
                console.log('return get unemployment detail  payhist data ');
                $scope.epay=data;

            }).error(function(data) {
                //  deferred.reject(data.error);
                console.log(' error happened when return get unemployment detail  payhist data for the page');
            });
        }

    };
});






