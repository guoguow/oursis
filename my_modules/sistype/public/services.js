
var services = angular.module('myApp.services');

// share user information across controllers
services.factory('type', function($http, $cookies, $q){

    return {


        getsistype:function(user,$scope) {
            var deferred = $q.defer();
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
            console.log('before get sistype');
            $http.post('/getsistype',{username:user.username,ssn:user.ssn}).success(function(data) {
                console.log('return get sistyoe data');

                var o1 ={sign:"0",value1:''};
                var o2=01,o3=o1,o4=o1,o5=o1;

                for (var i = 0;i < data.length; i++)
                {
                    for(var key in data[i]){
                        //alert("key："+key+",value："+data[i][key]);
                        switch (data[i][key]){
                            case "101":
                            case "102":  o1 ={sign:"1",value1:'职工养老'};break;
                            case "110": o1 ={sign:"11",value1:'居民养老'};break;
                            case "201": o2 ={sign:"5",value2:'职工失业'};break;
                            case "301":
                            case "302":
                            case "303":  o3 = {sign:"2",value3:'职工医疗'};break;
                            case "305":
                            case "306":   o3={sign:"22",value3:'居民医疗'};break;
                            case "401":  o4 = {sign:"4",value4:'职工工伤'};break;
                            case "501":   o5 = {sign:"3",value5:'职工生育'};break;
                        }
                    }
                }
                //     var out=[o1,o2,o3,o4,o5]
                var out={s1:o1,s2:o2,s3:o3,s4:o4,s5:o5}
                $cookies.st1 = angular.toJson(out);

            }).error(function(data) {
               // deferred.reject(data.error);
            });
        return deferred.promise;

        }
    };

});





