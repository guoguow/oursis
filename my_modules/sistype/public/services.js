
var services = angular.module('myApp.services');

// share user information across controllers
services.factory('type', function($http, $cookies, $q){

    return {

        getsistype:function(user,$scope) {
            $http.post('/endowindex',{ssn:user.ssn}).success(function(data) {
                console.log('front sucess to get endow data ');
                $cookies.idx1 =angular.toJson(data);
                console.log($cookies.idx1)
            }).error(function() {
                console.log('error happened when get endowindex data');
            });
            $http.post('/injuryindex',{ssn:user.ssn}).success(function(data) {
                console.log('front sucess to get injury data ');
                $cookies.idx2 =angular.toJson(data);
                console.log($cookies.idx2)
            }).error(function() {
                console.log('error happened when get injury data');
            });


            var deferred = $q.defer();
            console.log('before get sistype');
            $http.post('/getsistype',{username:user.username,ssn:user.ssn}).success(function(data) {
                console.log('return get sistyoe data');
                console.log(data);

                for (var i = 0;i < data.length; i++)
                {
                    for(var key in data[i]){
                        //alert("key："+key+",value："+data[i][key]);
                        switch (data[i][key]){
                            case "101":
                            case "102": var o1 ={sign:"1",value1:'职工养老'};break;
                            case "110":var o1 ={sign:"11",value1:'居民养老'};break;
                            case "201":var o2 ={sign:"5",value2:'职工失业'};break;
                            case "301":
                            case "302":
                            case "303": var o3 = {sign:"2",value3:'职工医疗'};break;
                            case "305":
                            case "306":  var o3={sign:"22",value3:'居民医疗'};break;
                            case "401": var o4 = {sign:"4",value4:'职工工伤'};break;
                            case "501":  var o5 = {sign:"3",value5:'职工生育'};break;
                        }
                    }
                }
                //     var out=[o1,o2,o3,o4,o5]
                var out={s1:o1,s2:o2,s3:o3,s4:o4,s5:o5}
                console.log(out);
                console.log(out.s3.value3);
                $cookies.st1 = angular.toJson(out);
                console.log($cookies.st1);
              deferred.resolve(out);
            }).error(function(data) {
              //  deferred.reject(data.error);
            });
        return deferred.promise;

        }
    };

});





