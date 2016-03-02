
var services = angular.module('myApp.services');

// share user information across controllers
services.factory('type', function($http, $cookies, $q){

    return {


        getsistype:function(user,$scope) {
            var deferred = $q.defer();
            /*
            $http.post('/endowindex',{ssn:user.ssn}).success(function(data) {
                console.log('front sucess to get endow data ');
                $cookies.idx1 =angular.toJson(data);
            }).error(function() {
                console.log('error happened when get endowindex data');
            });
            $http.post('/endowindex2',{ssn:user.ssn}).success(function(data) {
                console.log('front sucess to get endow data ');
                $cookies.idx11 =angular.toJson(data);
            }).error(function() {
                console.log('error happened when get endowindex data');
            });
            $http.post('/healthindex',{ssn:user.ssn}).success(function(data) {
                console.log('front sucess to get health data ');
                $cookies.idx2 =angular.toJson(data);
            }).error(function() {
                console.log('error happened when get endowindex data');
            });
            $http.post('/healthindex2',{ssn:user.ssn}).success(function(data) {
                console.log('front sucess to get health data ');
                $cookies.idx22=angular.toJson(data);
            }).error(function() {
                console.log('error happened when get endowindex data');
            });
            $http.post('/injuryindex',{ssn:user.ssn}).success(function(data) {
                console.log('front sucess to get injury data ');
                $cookies.idx4 =angular.toJson(data);
            }).error(function() {
                console.log('error happened when get injury data');
            });

            $http.post('/birthindex',{ssn:user.ssn}).success(function(data) {
                console.log('front sucess to get birth data ');
                $cookies.idx5 =angular.toJson(data);
            }).error(function() {
                console.log('error happened when get birth data');
            });
            $http.post('/unemploymentindex',{ssn:user.ssn}).success(function(data) {
                console.log('front sucess to get unemployment data ');
                $cookies.idx3=angular.toJson(data);
                deferred.resolve(data);
            }).error(function() {
                console.log('error happened when get birth data');
            });

            */
            console.log('before get sistype');
            $http.post('/getsistype',{username:user.username,ssn:user.ssn}).success(function(data) {
                console.log('return get sistyoe data');
                console.log(data);
                var o1 ={sign:"0",value1:''};
                var o2=o1,o3=o1,o4=o1,o5=o1;

                for (var i = 0;i < data.length; i++)
                {
                    for(var key in data[i]){
                        //alert("key："+key+",value："+data[i][key]);
                        switch (data[i][key]){
                            case "101":
                            case "102":  o1 ={sign:"1",value1:'职工养老',date:data[0].aac030.substring(0,4)};break;
                            case "110": o1 ={sign:"11",value1:'居民养老',date:data[0].aac030.substring(0,4)};break;
                            case "201": o2 ={sign:"5",value2:'职工失业',date:data[1].aac030.substring(0,4)};break;
                            case "303":
                            case "302":
                            case "301":  o3 = {sign:"2",value3:'职工医疗',date:data[2].aac030.substring(0,4)};break;
                            case "305":
                            case "306":   o3={sign:"22",value3:'居民医疗',date:data[2].aac030.substring(0,4)};break;
                            case "401":  o4 = {sign:"4",value4:'职工工伤',date:data[3].aac030.substring(0,4)};break;
                            case "501":   o5 = {sign:"3",value5:'职工生育',date:data[i].aac030.substring(0,4)};break;
                        }
                    }

                }
                var out={s1:o1,s2:o2,s3:o3,s4:o4,s5:o5};
                console.log(out);
                $cookies.st1 = angular.toJson(out);
                deferred.resolve(data);
            }).error(function(data) {
             deferred.reject(data.error);
            });
    return deferred.promise;

        },

        endow:function(user,$scope) {
            var deferred = $q.defer();
            console.log($scope.st1);
            if($scope.st1.s1.sign!=0){
            switch ($scope.st1.s1.sign) {
                // console.log("get index page data of  endowment");
                case "1":
                {
                    console.log("get index page data of  endowment 11111111111111");
                    // endowindex1($scope.user, $scope);
                    $http.post('/endowindex', {ssn: user.ssn}).success(function (data) {
                        console.log('front sucess to get endow data ');
                        $cookies.idx1 = angular.toJson(data);
                        deferred.resolve(data);

                    }).error(function (data) {
                        console.log('error happened when get endowindex data');
                        deferred.reject(data.error);

                    });
                }  ;
                    break;
                case "11":
                {
                    //endowindex2($scope.user, $scope);
                    $http.post('/endowindex2', {ssn: user.ssn}).success(function (data) {
                        console.log('front sucess to get endow data ');
                        $cookies.idx11 = angular.toJson(data);
                        deferred.resolve(data);

                    }).error(function (data) {
                        console.log('error happened when get endowindex data');
                        deferred.reject(data.error);

                    });
                } ;
                    break;
            }
        }else{
                $http.post('/getsistype',{username:user.username,ssn:user.ssn}).success(function (data) {
                    console.log('front sucess to handle null ');
                    deferred.resolve(data);
                }).error(function (data) {
                    console.log('error happened when handlenull');
                    deferred.reject(data.error);
                });
            }
        return deferred.promise;
    },
        health:function(user,$scope) {
            var deferred = $q.defer();
        if($scope.st1.s3.sign!=0){
            switch ($scope.st1.s3.sign) {
                // console.log("get index page data of  health");
                case"22":
                {
                    // healthindex1($scope.user, $scope);

                    $http.post('/healthye', {ssn: user.ssn}).success(function (data) {
                        console.log('front sucess to get health data ');
                             $cookies.Hye = angular.toJson(data);

                    }).error(function (data) {
                        console.log('error happened when get endowindex data');

                    });
                    $http.post('/healthindex', {ssn: user.ssn}).success(function (data) {
                        console.log('front sucess to get health data ');
                        $cookies.idx2 = angular.toJson(data);
                        deferred.resolve(data);

                    }).error(function (data) {
                        console.log('error happened when get endowindex data');
                        deferred.reject(data.error);

                    });
                }
                    ;
                    break;
                case"2":
                {
                    //  healthindex2($scope.user, $scope);
                    $http.post('/healthye2', {ssn: user.ssn}).success(function (data) {
                        console.log('front sucess to get health data ');
                        $cookies.Hye2 = angular.toJson(data);

                    }).error(function (data) {
                        console.log('error happened when get endowindex data');

                    });
                    $http.post('/healthindex2', {ssn: user.ssn}).success(function (data) {
                        console.log('front sucess to get health data ');
                        $cookies.idx22 = angular.toJson(data);
                        deferred.resolve(data);
                    }).error(function (data) {
                        console.log('error happened when get endowindex data');
                        deferred.reject(data.error);

                    });


                }
                    ;
                    break;
            }}
           else{
    $http.post('/getsistype',{username:user.username,ssn:user.ssn}).success(function (data) {
        console.log('front sucess to handle null ');
        deferred.resolve(data);
    }).error(function (data) {
        console.log('error happened when handlenull');
        deferred.reject(data.error);
    });
}
            return deferred.promise;
        },
        injury:function(user,$scope) {
            var deferred = $q.defer();
            if ($scope.st1.s4.sign!=0) {
                console.log("get index page data of  injury");
                if ($scope.st1.s4.sign == 4) {
                    console.log("工伤参保标识 sign=", $scope.st1.s4.sign);
                    // injuryindex($scope.user, $scope);
                    $http.post('/injuryindex', {ssn: user.ssn}).success(function (data) {
                        console.log('front sucess to get injury data ');
                        $cookies.idx4 = angular.toJson(data);
                        deferred.resolve(data);
                    }).error(function (data) {
                        console.log('error happened when get injury data');
                        deferred.reject(data.error);

                    });
                }
            }else{
                $http.post('/getsistype',{username:user.username,ssn:user.ssn}).success(function (data) {
                    console.log('front sucess to handle null ');
                    deferred.resolve(data);
                }).error(function (data) {
                    console.log('error happened when handlenull');
                    deferred.reject(data.error);
                });
            }
            return deferred.promise;
        },
        birth:function(user,$scope) {
            var deferred = $q.defer();
            //   $scope.st1 = user.getSt1();
            console.log($scope.st1);
            if ($scope.st1.s5.sign!=0) {
                console.log("get index page data of  birth");
                if ($scope.st1.s5.sign == 3) {
                    console.log("生育参保标识 sign=", $scope.st1.s5.sign);
                    // birthindex($scope.user, $scope);
                    $http.post('/birthindex', {ssn: user.ssn}).success(function (data) {
                        console.log('front sucess to get birth data ');
                        $cookies.idx5 = angular.toJson(data);
                        deferred.resolve(data);
                    }).error(function (data) {
                        console.log('error happened when get birth data');
                        deferred.reject(data.error);
                    });
                }
            }else{
                $http.post('/getsistype',{username:user.username,ssn:user.ssn}).success(function (data) {
                    console.log('front sucess to handle null ');
                    deferred.resolve(data);
                }).error(function (data) {
                    console.log('error happened when handlenull');
                    deferred.reject(data.error);
                });
            }
            return deferred.promise;
        },
        unemploy:function(user,$scope) {
            var deferred = $q.defer();
            //   $scope.st1 = user.getSt1();
            console.log($scope.st1);
            if ($scope.st1.s2.sign!=0) {
                console.log("get index page data of  unemployment");
                if ($scope.st1.s2.sign == 5) {
                    console.log("失业参保标识 sign=", $scope.st1.s2.sign);
                    // unemploymentindex($scope.user, $scope);
                    $http.post('/unemploymentindex', {ssn: user.ssn}).success(function (data) {
                        console.log('front sucess to get unemployment data ');
                        $cookies.idx3 = angular.toJson(data);
                        deferred.resolve(data);
                    }).error(function (data) {
                        console.log('error happened when get birth data');
                        deferred.reject(data.error);
                    });
                }
            }else{
                $http.post('/getsistype',{username:user.username,ssn:user.ssn}).success(function (data) {
                    console.log('front sucess to handle null ');
                    deferred.resolve(data);
                }).error(function (data) {
                    console.log('error happened when handlenull');
                    deferred.reject(data.error);
                });
            }
            return deferred.promise;
        }
    };

});





