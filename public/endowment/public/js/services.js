
var services = angular.module('myApp.services');

services.factory('endow', function($http, $cookies,$q){

    return {
        epaystack: function(user,$scope) {
            var deferred = $q.defer();

            $http.post('/epaystack',{username:user.username,ssn:user.ssn,type:$scope.st1.s1.sign}).success(function(data) {
                console.log('return get endowment data for srtack ');
                console.log(data);
                $scope.eg=[{ x:data.y, y: data.g }];
                $scope.ed=[{ x:data.y, y: data.d }];
                console.log($scope.eg);
                console.log($scope.ed);

                deferred.resolve(data);
            }).error(function(data) {
                deferred.reject(data.error);
                console.log(' error happened when return get endowment pay stack');
            });
            return deferred.promise;
        },

        epaids: function(user,$scope) {
            var deferred = $q.defer();

            $http.post('/epaidstack',{username:user.username,ssn:user.ssn,type:$scope.st1.s1.sign}).success(function(data) {
                console.log('return get endowment data for srtack ');
                console.log(data);
                $scope.eg=[{ x:data.y, y: data.g }];
                console.log($scope.eg);
                deferred.resolve(data);
            }).error(function(data) {
                deferred.reject(data.error);
                console.log(' error happened when return get endowment pay stack');
            });
            return deferred.promise;
        },
        getstatus: function(user,$scope) {

            $http.post('/status',{ssn:user.ssn}).success(function(data) {
                console.log('return get endowment zhigong status ');
                console.log(data);
                if(data="AOC"||"COC"){                $scope.estatua=1                }

            }).error(function(data) {
                console.log(' error happened when return estatus');
            });

        },
        getyear: function(user,$scope,date1) {

            console.log('before get year data');

            $http.post('/eyearpay',{username:user.username,ssn:user.ssn,date:date1,type:$scope.st1.s1.sign}).success(function(data) {
                console.log('return get endowment year detail ');
                console.log(data);
                $scope.eyearpay=data;

            }).error(function(data) {
                console.log(' error happened when return get endowment yeardetail');
            });
            $http.post('/eyearpaid',{username:user.username,ssn:user.ssn,date:date1,type:$scope.st1.s1.sign}).success(function(data) {
                console.log('return get endowment year detail ');
                console.log(data);
                $scope.eyearpaid=data;

            }).error(function(data) {
                console.log(' error happened when return get endowment yeardetail');
            });

        },
        getrecord: function(user,$scope,date1) {

            console.log('before get erecord data aaaaaaaaaaaaaaa');

            $http.post('/epaidRecord',{username:user.username,ssn:user.ssn,date:date1,type:$scope.st1.s1.sign}).success(function(data) {
                console.log('return get endowment epaid record detail ');
                console.log(data);
                $scope.epaidRecord=data;

            }).error(function(data) {
                //  deferred.reject(data.error);
                console.log(' error happened when return get endowment  epaid record detail');
            });



            $http.post('/epayRecord',{username:user.username,ssn:user.ssn,date:date1}).success(function(data) {
                console.log('return get endowment erecord detail ');
                console.log(data);
                $scope.epayRecord=data;

            }).error(function(data) {
                //  deferred.reject(data.error);
                console.log(' error happened when return get endowment  erecord detail');
            });
            $http.post('/eaccRecord',{username:user.username,ssn:user.ssn,date:date1}).success(function(data) {
                console.log('return get endowment erecord detail ');
                console.log(data);
                $scope.eaccRecord=data;
            }).error(function(data) {
                //  deferred.reject(data.error);
                console.log(' error happened when return get endowment  erecord detail');
            });

        },
        payhist: function(user,$scope,dt1,dt2) {

            console.log('before get payhist data aaaaaaaaaaaaaaa');

            $http.post('/endowpay',{username:user.username,ssn:user.ssn,page:$scope.currentPage,pageSize:$scope.pageSize,dt1:dt1,dt2:dt2}).success(function(data) {
                console.log('return get endowment detail  payhist data ');
                console.log(data);
                $scope.epay=data;

            }).error(function(data) {
                //  deferred.reject(data.error);
                console.log(' error happened when return get endowment detail  payhist data for the page');
            });
        },
        jmpay: function(user,$scope,dt1,dt2) {

            console.log('before get payhist data');

            $http.post('/jmendowpay',{username:user.username,ssn:user.ssn,page:$scope.currentPage,pageSize:$scope.pageSize,dt1:dt1,dt2:dt2}).success(function(data) {
                console.log('return get endowment detail  payhist data ');
                console.log(data);
                $scope.jmepay=data;

            }).error(function(data) {
                //  deferred.reject(data.error);
                console.log(' error happened when return get endowment detail  payhist data for the page');
            });
        },
       paid: function(user,$scope,dt1,dt2) {

        console.log('before get paid data');

        $http.post('/endowpaid',{username:user.username,ssn:user.ssn,page:$scope.currentPage,pageSize:$scope.pageSize,dt1:dt1,dt2:dt2}).success(function(data) {
                console.log('return get endowment detail  paid data ');
                console.log(data);
                $scope.epaid = data;
        }).error(function(data) {
            //  deferred.reject(data.error);
            console.log(' error happened when return get endowment detail  paid data for the page');
        });
    },
        jmpaid: function(user,$scope,dt1,dt2) {

            console.log('before get paid data');

            $http.post('/jmendowpaid',{username:user.username,ssn:user.ssn,page:$scope.currentPage,pageSize:$scope.pageSize,dt1:dt1,dt2:dt2}).success(function(data) {
                console.log('return get endowment detail  paid data ');
                console.log(data);
                $scope.jmepaid = data;
            }).error(function(data) {
                //  deferred.reject(data.error);
                console.log(' error happened when return get endowment detail  paid data for the page');
            });
        },
        getindex: function() {
            return angular.fromJson($cookies.idx1);
        },
        getindex2: function() {
            return angular.fromJson($cookies.idx11);
        },

        accye:function(user,$scope,date1){

            console.log('before get erecord ');

            $http.post('/eaccye',{username:user.username,ssn:user.ssn,date:date1,type:$scope.st1.s1.sign}).success(function(data) {
                console.log('return get endowment epaid record detail ');
                console.log(data);
                $scope.eaccye=data;

            }).error(function(data) {
                console.log(' error happened when return get endowment  epaid record detail');
            });

        },

        getIncome: function($scope) {

            console.log('before get payhist data aaaaaaaaaaaaaaa');

            $http.post('/endowincome',{username:$scope.user.username,ssn:$scope.user.ssn,page:$scope.currentPage,pageSize:$scope.pageSize,dt1:$scope.dt1,dt2:$scope.dt2}).success(function(data) {
                console.log('return get endowment detail  payhist data ');
                console.log(data);
                $scope.income=data;

            }).error(function(data) {
                //  deferred.reject(data.error);
                console.log(' error happened when return get endowment detail  payhist data for the page');
            });
        },
        getExp: function($scope) {

            console.log('before get payhist data aaaaaaaaaaaaaaa');

            $http.post('/endowexp',{username:$scope.user.username,ssn:$scope.user.ssn,page:$scope.currentPage,pageSize:$scope.pageSize,dt1:$scope.dt1,dt2:$scope.dt2}).success(function(data) {
                console.log('return get endowment detail  payhist data ');
                console.log(data);
                $scope.income=data;

            }).error(function(data) {
                //  deferred.reject(data.error);
                console.log(' error happened when return get endowment detail  payhist data for the page');
            });
        }
    };
});






