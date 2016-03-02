
var services = angular.module('myApp.services');



services.factory('birth', function($http, $cookies,$q){

    return {

        bpaystack: function(user,$scope) {
            var deferred = $q.defer();

            $http.post('/bpaystack',{username:user.username,ssn:user.ssn}).success(function(data) {
                console.log('return get  data for srtack ');
                console.log(data);
                $scope.eg=[{ x:data.y, y: data.g }];
                $scope.ed=[{ x:data.y, y: data.d }];
                console.log($scope.eg);
                console.log($scope.ed);

                deferred.resolve(data);
            }).error(function(data) {
                deferred.reject(data.error);
                console.log(' error happened when return get  pay stack');
            });
            return deferred.promise;
        },

        bpaidstack: function(user,$scope) {
            var deferred = $q.defer();

            $http.post('/bpaidstack',{username:user.username,ssn:user.ssn}).success(function(data) {
                console.log('return get  data for srtack ');
                console.log(data);
                $scope.eg=[{ x:data.y, y: data.g }];
                console.log($scope.eg);
                deferred.resolve(data);
            }).error(function(data) {
                deferred.reject(data.error);
                console.log(' error happened when return get  pay stack');
            });
            return deferred.promise;
        },



        getindex: function() {

            return angular.fromJson($cookies.idx5);


        },

        getyear: function(user,$scope,date5) {

            console.log('before get year data');

            $http.post('/byearpay',{username:user.username,ssn:user.ssn,date:date5}).success(function(data) {
                console.log('return get birth year detail ');
                console.log(data);
                $scope.byearpay=data;

            }).error(function(data) {
                console.log(' error happened when return get birth yeardetail');
            });
            $http.post('/byearpaid',{username:user.username,ssn:user.ssn,date:date5}).success(function(data) {
                console.log('return get endowment year detail ');
                console.log(data);
                $scope.byearpaid=data;

            }).error(function(data) {
                console.log(' error happened when return get birth yeardetail');
            });

        },
        getrecord: function(user,$scope,date5) {

            console.log('before get erecord data aaaaaaaaaaaaaaa');

            $http.post('/bpaidRecord',{username:user.username,ssn:user.ssn,date:date5}).success(function(data) {
                console.log('return get birth epaid record detail ');
                console.log(data);
                $scope.bpaidRecord=data;

            }).error(function(data) {
                console.log(' error happened when return get birth  epaid record detail');
            });

            $http.post('/bpayRecord',{username:user.username,ssn:user.ssn,date:date5}).success(function(data) {
                console.log('return get birth erecord detail ');
                console.log(data);
                $scope.bpayRecord=data;

            }).error(function(data) {
                console.log(' error happened when return get birth  erecord detail');
            });

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






