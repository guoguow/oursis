
var services = angular.module('myApp.services');



services.factory('injury', function($http, $cookies,$q){

    return {
        ipaystack: function(user,$scope) {
            var deferred = $q.defer();

            $http.post('/ipaystack',{username:user.username,ssn:user.ssn}).success(function(data) {
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

        ipaidstack: function(user,$scope) {
            var deferred = $q.defer();

            $http.post('/ipaidstack',{username:user.username,ssn:user.ssn}).success(function(data) {
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
            return angular.fromJson($cookies.idx4);
        },
        paid: function(user,$scope,dt1,dt2) {

            console.log('before get paid data');

            $http.post('/injurypaid',{username:user.username,ssn:user.ssn,page:$scope.currentPage,pageSize:$scope.pageSize,dt1:dt1,dt2:dt2}).success(function(data) {
                console.log('return get injury detail  paid data ');
                $scope.epaid = data;
            }).error(function(data) {
                //  deferred.reject(data.error);
                console.log(' error happened when return get injury detail  paid data for the page');
            });
        },
        payhist: function(user,$scope,dt1,dt2) {

            console.log('before get payhist data');

            $http.post('/injurypay',{username:user.username,ssn:user.ssn,page:$scope.currentPage,pageSize:$scope.pageSize,dt1:dt1,dt2:dt2}).success(function(data) {
                console.log('return get injury detail  payhist data ');
                $scope.epay=data;

            }).error(function(data) {
                //  deferred.reject(data.error);
                console.log(' error happened when return get injury detail  payhist data for the page');
            });
        },
        getyear: function(user,$scope,date4) {

            console.log('before get year data');

            $http.post('/iyearpay',{username:user.username,ssn:user.ssn,date:date4}).success(function(data) {
                console.log('return get injury year detail ');
                console.log(data);
                $scope.iyearpay=data;

            }).error(function(data) {
                console.log(' error happened when return get injury yeardetail');
            });
            $http.post('/iyearpaid',{username:user.username,ssn:user.ssn,date:date4}).success(function(data) {
                console.log('return get injury year detail ');
                console.log(data);
                $scope.iyearpaid=data;

            }).error(function(data) {
                console.log(' error happened when return get injury yeardetail');
            });

        },

        getrecord: function(user,$scope,date4) {

            console.log('before get erecord data aaaaaaaaaaaaaaa');

            $http.post('/ipaidRecord',{username:user.username,ssn:user.ssn,date:date4}).success(function(data) {
                console.log('return get injury epaid record detail ');
                console.log(data);
                $scope.ipaidRecord=data;

            }).error(function(data) {
                //  deferred.reject(data.error);
                console.log(' error happened when return get injury  epaid record detail');
            });
            $http.post('/ipaidRecord2',{username:user.username,ssn:user.ssn,date:date4}).success(function(data) {
                console.log('return get injury epaid record detail ');
                console.log(data);
                $scope.ipaidRecord2=data;

            }).error(function(data) {
                //  deferred.reject(data.error);
                console.log(' error happened when return get injury  epaid record detail');
            });


            $http.post('/ipayRecord',{username:user.username,ssn:user.ssn,date:date4}).success(function(data) {
                console.log('return get injury erecord detail ');
                console.log(data);
                $scope.ipayRecord=data;

            }).error(function(data) {
                //  deferred.reject(data.error);
                console.log(' error happened when return get injury  erecord detail');
            });

        }

    };
});






