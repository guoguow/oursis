
var services = angular.module('myApp.services');

services.factory('health', function($http, $cookies,$q){

    return {

        hpays: function(user,$scope) {
            var deferred = $q.defer();

            $http.post('/hpaystack',{username:user.username,ssn:user.ssn,type:$scope.st1.s3.sign}).success(function(data) {
                console.log('return get  data for srtack ');
                console.log("1111111111"+data);
             var lengthjson= data.length;
                for (var i = 0;i < data.length; i++)
                {  $scope.eg=[{x:data[i].y,y:data[i].g}];
                    $scope.ed=[{x:data[i].y,y:data[i].d}];
            }

                if(lengthjson>20)
{
    $scope.eg;
    $scope.ed;
    console.log($scope.eg);
    console.log($scope.ed);
}else{
var ymin=data[0].y;
    console.log(ymin);

    var dy=parseInt(ymin,10);
    console.log(dy);

    for(var i=1;i<(21-lengthjson);i++)
{
    $scope.eg.unshift({ x:dy-i , y: 0 });
    $scope.ed.unshift({ x:dy-i, y: 0});
    console.log($scope.eg);
    console.log("ssssssssssssss"+$scope.ed);
    console.log($scope.ed);
}
    }
                deferred.resolve(data);
            }).error(function(data) {
                deferred.reject(data.error);
                console.log(' error happened when return get  pay stack');
            });
            return deferred.promise;
        },

        getyear: function(user,$scope,date3) {

            console.log('before get year data');

            $http.post('/hyearpay',{username:user.username,ssn:user.ssn,date:date3,type:$scope.st1.s3.sign}).success(function(data) {
                console.log('return get health year detail ');
                console.log(data);
                $scope.hyearpay=data;

            }).error(function(data) {
                console.log(' error happened when return get health yeardetail');
            });
            $http.post('/hyearpaid',{username:user.username,ssn:user.ssn,date:date3,type:$scope.st1.s3.sign}).success(function(data) {
                console.log('return get health year detail ');
                console.log(data);
                $scope.hyearpaid=data;

            }).error(function(data) {
                console.log(' error happened when return get health yeardetail');
            });

        },
        getrecord: function(user,$scope,date3) {

            console.log('before get erecord data aaaa');

            $http.post('/hpaidRecord',{username:user.username,ssn:user.ssn,date:date3}).success(function(data) {
                console.log('return get health epaid record detail ');
                console.log(data);
                $scope.hpaidRecord=data;

            }).error(function(data) {
                console.log(' error happened when return get health  epaid record detail');
            });
            $http.post('/hpayRecord',{username:user.username,ssn:user.ssn,date:date3,type:$scope.st1.s3.sign}).success(function(data) {
                console.log('return get health erecord detail ');
                console.log(data);
                $scope.hpayRecord=data;

            }).error(function(data) {
                console.log(' error happened when return get health  erecord detail');
            });
            $http.post('/haccRecord',{username:user.username,ssn:user.ssn,date:date3,type:$scope.st1.s3.sign}).success(function(data) {
                console.log('return get health erecord detail ');
                console.log(data);
                $scope.haccRecord=data;
            }).error(function(data) {
                console.log(' error happened when return get health  erecord detail');
            });

        },

        payhist: function(user,$scope,dt1,dt2) {

            console.log('before get payhist data aaaaaaaaaaaaaaa');

            $http.post('/healthpay',{username:user.username,ssn:user.ssn,page:$scope.currentPage,pageSize:$scope.pageSize,dt1:dt1,dt2:dt2}).success(function(data) {
                console.log('return get healthment detail  payhist data ');
                $scope.hpay=data;

            }).error(function(data) {
                //  deferred.reject(data.error);
                console.log(' error happened when return get healthment detail  payhist data for the page');
            });
        },
        jmpay: function(user,$scope,dt1,dt2) {

            console.log('before get payhist data');

            $http.post('/jmhealthpay',{username:user.username,ssn:user.ssn,page:$scope.currentPage,pageSize:$scope.pageSize,dt1:dt1,dt2:dt2}).success(function(data) {
                console.log('return get healthment detail  payhist data ');
                $scope.jmhpay=data;

            }).error(function(data) {
                //  deferred.reject(data.error);
                console.log(' error happened when return get healthment detail  payhist data for the page');
            });
        },
       paid: function($scope,bz) {

        console.log('before get paid data');

        $http.post('/healthpaid',{username:$scope.user.username,ssn:$scope.user.ssn,page:$scope.currentPage,pageSize:$scope.pageSize,dt1:$scope.dt1,dt2:$scope.dt2,bz:bz}).success(function(data) {
                console.log('return get healthment detail  paid data ');
                $scope.hpaid = data;
        }).error(function(data) {
            //  deferred.reject(data.error);
            console.log(' error happened when return get healthment detail  paid data for the page');
        });
    },
        getye: function() {
            return angular.fromJson($cookies.Hye);
        },
        getye2: function() {
            return angular.fromJson($cookies.Hye2);
        },
        getindex: function() {
            return angular.fromJson($cookies.idx2);
        },
        getindex2: function() {
            return angular.fromJson($cookies.idx22);
        },
        getline: function($scope) {
            var deferred = $q.defer();

            console.log('before get payhist data aaaaaaaaaaaaaaa');

            $http.post('/getline',{ssn:$scope.user.ssn}).success(function(data) {
                console.log('return get endowment detail  payhist data ');
                var test=[];
                console.log(data);

                for (var i = 0;i < data.length; i++)
                {
                    test[i]=[data[i].sj,data[i].je];
                    console.log("111111111111"+data[i].sj+data[i].je);
                }
                $scope.line=test;
               deferred.resolve(data);
            }).error(function(data) {
                 deferred.reject(data.error);
                console.log(' error happened when return get endowment detail  payhist data for the page');
            });
            return deferred.promise;

        },
        hpaidz: function($scope) {
            var deferred = $q.defer();

            console.log('before  aaasfdafafafafdafaaaaa');

            $http.post('/hpaidz',{ssn:$scope.user.ssn}).success(function(data) {
                console.log(data);
                $scope.hz=data;
                console.log($scope.hz);
                var test=[];
                for (var i = 0;i < data.length; i++)
                {
                    test.push(parseInt(data[i].x,10));
                }
                $scope.hzx=test;
                console.log($scope.hzx);

                deferred.resolve(data);
            }).error(function(data) {
                deferred.reject(data.error);
                console.log(' error happened when return data for the page');
            });
            return deferred.promise;
        },
        hpaidm: function($scope) {
            var deferred = $q.defer();
            console.log('before  zzzzzzzzzzzz');
            $http.post('/hpaidm',{ssn:$scope.user.ssn}).success(function(data) {
                console.log(data);
                $scope.hm=data;
                console.log($scope.hm);
                var test=[];
                console.log(data[0].sales);

                for (var i = 0;i < data[0].sales.length; i++)
                {
                    test.push(parseInt(data[0].sales[i].x,10));
                }
                $scope.hmx=test;
                console.log($scope.hmx);

                var te=[];
                var sum=0;
                for (var ii = 0;ii < data[0].sales.length; ii++)
                {
                    for(var j=0;j<data.length;j++)
                    {

                        sum=sum+data[j].sales[ii].y;


                }
                    var tmp={x:parseInt(data[ii].sales[ii].x,10),y:sum};
                    te.push(tmp)
                }
                $scope.hmsum=te;
                console.log("aasssssssssssssss");
                console.log($scope.hmsum);

                deferred.resolve(data);
            }).error(function(data) {
                deferred.reject(data.error);
                console.log(' error happened when return data for the page');
            });
            return deferred.promise;
        },
        hpaidmen: function($scope) {
            var deferred = $q.defer();
            console.log('before  zzzzzzzzzzzz');
            $http.post('/hpaidmen',{ssn:$scope.user.ssn}).success(function(data) {
                console.log(data);
                $scope.hmen=data;
                console.log($scope.hmen);
                deferred.resolve(data);
            }).error(function(data) {
                deferred.reject(data.error);
                console.log(' error happened when return data for the page');
            });
            return deferred.promise;
        },
        hpaidzhu: function($scope) {
            var deferred = $q.defer();
            console.log('before  zzzzzzzzzzzz');
            $http.post('/hpaidzhu',{ssn:$scope.user.ssn}).success(function(data) {
                console.log(data);
                $scope.hzhu=data;
                console.log($scope.hzhu);
                deferred.resolve(data);
            }).error(function(data) {
                deferred.reject(data.error);
                console.log(' error happened when return data for the page');
            });
            return deferred.promise;
        },

        getIncome: function($scope) {

            console.log('before get payhist data aaaaaaaaaaaaaaa');

            $http.post('/healthincome',{username:$scope.user.username,ssn:$scope.user.ssn,page:$scope.currentPage,pageSize:$scope.pageSize,dt1:$scope.dt1,dt2:$scope.dt2}).success(function(data) {
                console.log('return get endowment detail  payhist data ');
                $scope.income=data;

            }).error(function(data) {
                //  deferred.reject(data.error);
                console.log(' error happened when return get endowment detail  payhist data for the page');
            });
        },
        getExp: function($scope) {

            console.log('before get payhist data aaaaaaaaaaaaaaa');

            $http.post('/healthexp',{username:$scope.user.username,ssn:$scope.user.ssn,page:$scope.currentPage,pageSize:$scope.pageSize,dt1:$scope.dt1,dt2:$scope.dt2}).success(function(data) {
                console.log('return get endowment detail  payhist data ');
                $scope.income=data;

            }).error(function(data) {
                //  deferred.reject(data.error);
                console.log(' error happened when return get endowment detail  payhist data for the page');
            });
        }
    };
});






