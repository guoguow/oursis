
var services = angular.module('myApp.services');

// share user information across controllers
services.factory('type', function($http, $cookies, $q){

  return {
/*
      getsistype:function(user,$scope) {
          var deferred = $q.defer();
          console.log('before get sistype');
         // $scope.data=[st1,st2,st3];

          $http.post('/getsistype1',{username:user.username,ssn:user.ssn}).success(function(data1) {
 console.log('return get sistyoe data1');
 $cookies.st1 = angular.toJson(data1);
 console.log($cookies.st1);

 }).error(function(data1) {
 });
          $http.post('/getsistype2',{username:user.username.username,ssn:user.ssn}).success(function(data2) {
              console.log('return get sistyoe data2');
              console.log(data2);
              $cookies.st2 =angular.toJson(data2);
              console.log($cookies.st2);

          }).error(function(data2) {
          });
          $http.post('/getsistype3',{username:user.username.username,ssn:user.ssn}).success(function(data3) {
              console.log('return get sistyoe data3');console.log(data3);
              $cookies.st3 = angular.toJson(data3);
              console.log($cookies.st3);

          }).error(function(data3) {
          });
          $http.post('/getsistype4',{username:user.username.username,ssn:user.ssn}).success(function(data4) {
              console.log('return get sistyoe data4');
              $cookies.st4 =angular.toJson(data4);
              console.log($cookies.st4);

          }).error(function(data4) {
          });
          $http.post('/getsistype5',{username:user.username.username,ssn:user.ssn}).success(function(data5) {
              console.log('return get sistyoe data5');console.log(data5);
              $cookies.st5 = angular.toJson(data5);
              console.log($cookies.st5);
              deferred.resolve(data5);

          }).error(function(data5) {
              deferred.reject(data5.error);
          });
         return deferred.promise;
      }
      */

      getsistype:function(user,$scope) {
          var deferred = $q.defer();
          console.log('before get sistype');
          // $scope.data=[st1,st2,st3];

          $http.post('/getsistype',{username:user.username,ssn:user.ssn}).success(function(data) {
              console.log('return get sistyoe data');
              console.log(data);

                  for (var i = 0;i < data.length; i++)
                  {

                      for(var key in data[i]){
                      //alert("key："+key+",value："+data[i][key]);
                          switch (data[i][key]){
                      case "101":var o1 ={sign:"101",value1:'职工养老'};break;
                     case "102":var o1 ={sign:"102",value1:'居民养老'};break;
                     case "201":var o2 ={sign:"201",value2:'职工失业'};break;
                     case "301": var o3 = {sign:"301",value3:'职工医疗'};break;
                      case "305":var o3={sign:"305",value3:'居民医疗'};break;
                     case "401": var o4 = {sign:"401",value4:'职工工伤'};break;
                     case "501":  var o5 = {sign:"501",value5:'职工生育'};break;

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
       deferred.reject(data.error);
          });

          return deferred.promise;

      }
  };

});
    /*  reset:function($scope) {
          $scope.signforpay=null;
          $scope.dataforpay=null;
          console.log('see the new value of signforpay??change ??');
          console.log($scope.signforpay,$scope.dataforpay);
      }

     switch (data[i][key]){
     // case "101":
     case "102":var o1 ={sign:"101",value1:'职工养老'};break;
     //   case "110":var o1 ={sign:"110",value1:'居民养老'};break;

     case "201":var o2 ={sign:"201",value2:'职工失业'};break;
     //case "301":
     //case "302":
     //  case "303": var o3 = {sign:"301",value3:'职工医疗'};break;

     case "305": var o3 = {sign:"305",value3:'居民医疗'};break;

     case "401": var o4 = {sign:"401",value4:'职工工伤'};break;
     case "501":  var o5 = {sign:"501",value5:'职工生育'};break;

     }

     console.log("key："+key+",value："+data[i][key]);
     if(data[i][key]==101){
     console.log("aaaaaaaaaaaaaaaaaaaa");
     var o1 ={sign:"101",value1:'职工养老'};
     };
     if(data[i][key]==201){
     console.log("bbbbbbbbbbbbbbbbbbbbbbbbbb");
     var o2 ={sign:"201",value2:'职工失业'};
     };
     if(data[i][key]==301){
     console.log("ccccccccccccccccccccc");
     var o3 = {sign:"301",value3:'职工医疗'};
     };
     if(data[i][key]==401){
     console.log("dddddddddddddddddddddddd");
     var o4 = {sign:"401",value4:'职工工伤'};
     };
     if(data[i][key]==501){
     console.log("eeeeeeeeeeeeeeeeeeeeee");
     var o5 = {sign:"501",value5:'职工生育'};
     };
     if(data[i][key]==307){
     console.log("eeeeeeeeeeeeeeeeeeeeee");
     var o5 = {sign:"307",value5:'居民养老'};
     };
     if(data[i][key]==305){
     console.log("eeeeeeeeeeeeeeeeeeeeee");
     var o5 = {sign:"305",value5:'居民医疗'};
     };
     */




