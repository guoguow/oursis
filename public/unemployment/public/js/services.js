
var services = angular.module('myApp.services');



services.factory('unemployment', function($http, $cookies,$q){

    return {

        unpaystack: function(user,$scope) {
            var deferred = $q.defer();
            $http.post('/unpaystack',{username:user.username,ssn:user.ssn}).success(function(data) {
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

        unpaidstack: function(user,$scope) {
            var deferred = $q.defer();

            $http.post('/unpaidstack',{username:user.username,ssn:user.ssn}).success(function(data) {
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



        getIDCard: function($scope) {

            $http.post('/getidcard',{ssn:$scope.user.ssn}).success(function(data) {

                $cookies.idcard = angular.toJson(data);

            }).error(function(data) {
            });
        },
        getcard: function() {

            return angular.fromJson($cookies.idcard);


        },
        getindex: function() {

            return angular.fromJson($cookies.idx3);


        },
        paid: function(user,$scope,dt1,dt2) {

            console.log('before get paid data');

            $http.post('/unemploymentpaid',{username:user.username,ssn:$scope.idcard.aac002,page:$scope.currentPage,pageSize:$scope.pageSize,dt1:dt1,dt2:dt2}).success(function(data) {
                console.log('return get unemployment detail  paid data ');
                $scope.epaid = data;
            }).error(function(data) {
                console.log(' error happened when return get unemployment detail  paid data for the page');
            });
        },
        payhist: function(user,$scope,dt1,dt2) {

            console.log('before get payhist data');

            $http.post('/unemploymentpay',{username:user.username,ssn:user.ssn,page:$scope.currentPage,pageSize:$scope.pageSize,dt1:dt1,dt2:dt2}).success(function(data) {
                console.log('return get unemployment detail  payhist data ');
                $scope.epay=data;

            }).error(function(data) {
                console.log(' error happened when return get unemployment detail  payhist data for the page');
            });
        },
        getyear: function(user,$scope,date2) {

            console.log('before get year data');

            $http.post('/uyearpay',{username:user.username,ssn:user.ssn,date:date2}).success(function(data) {
                console.log('return get unemployment year detail ');
                console.log(data);
                $scope.uyearpay=data;

            }).error(function(data) {
                console.log(' error happened when return get unemployment yeardetail');
            });
            $http.post('/uyearpaid',{username:user.username,ssn:$scope.idcard.aac002,date:date2}).success(function(data) {
                console.log('return get unemployment year detail ');
                console.log(data);
                $scope.uyearpaid=data;

            }).error(function(data) {
                console.log(' error happened when return get unemployment yeardetail');
            });

        },

        getrecord: function(user,$scope,date2) {
            var deferred = $q.defer();

            console.log('before get urecord data aaaaaaaaaaaaaaa');
            $http.post('/upaidRecordCount',{username:user.username,ssn:$scope.idcard.aac002,date:date2}).success(function(data) {
                console.log('return get unemployment epaid record detail ');
                console.log(data);
                $scope.upaidRecordCount=data;

            }).error(function(data) {
                console.log(' error happened when return get unemployment  epaid record detail');
            });

            $http.post('/upayRecord',{username:user.username,ssn:user.ssn,date:date2}).success(function(data) {
                console.log('return get unemployment erecord detail ');
                console.log(data);
                $scope.upayRecord=data;
                deferred.resolve(data);
            }).error(function(data) {
                deferred.reject(data.error);
                console.log(' error happened when return get unemployment  erecord detail');
            });
            return deferred.promise;

        },
        getPaidrecord: function(user,$scope,date2) {


            $http.post('/upaidRecord',{username:user.username,ssn:$scope.idcard.aac002,aac020:$scope.aac020,date:date2}).success(function(data) {
                console.log('return get unemployment epaid record detail ');
                console.log(data);
                $scope.upaidRecord=data;

            }).error(function(data) {
                console.log(' error happened when return get unemployment  epaid record detail');
            });


        }



    };
});






