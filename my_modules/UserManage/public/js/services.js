
var services = angular.module('myApp.services');

// share user information across controllers
services.factory('us', function($http, $cookies, $q){

    return {

        login: function(username, password) {
            var deferred = $q.defer();
            $http.get('/signin',{params: {username:username,password:password
            }}).success(function(data) {
                // now get some information about the user
                $cookies.user = angular.toJson(data);
                console.log('cookies user ');
                deferred.resolve(data);
            }).error(function(data) {
                deferred.reject(data.error);
            });
            console.log('login');
            return deferred.promise;
        },
        logout: function() {
            var deferred = $q.defer();
            $http.get('/signout')
                .success(function() {
                    delete $cookies.user;
                    delete $cookies.st1;

                    delete $cookies.Hye;
                    delete $cookies.Hye2;

                    delete $cookies.idx1;
                    delete $cookies.idx11;

                    delete $cookies.idx2;
                    delete $cookies.idx22;

                    delete $cookies.idx3;
                    delete $cookies.idx4;
                    delete $cookies.idx5;

                    deferred.resolve();
                }).error(function(data) {
                    deferred.reject(data.error);
                });
            return deferred.promise;
        },
        signup: function(firstname,lastname,username, email, password) {
            var deferred = $q.defer();
            $http.post('/signup', {
                firstName: firstname,
                lastName: lastname,
                email: email,
                username: username,
                password: password
            }).success(function(data) {
                // now get some information about the user*
                console.log('signup success');
                $cookies.user = angular.toJson(data);

                deferred.resolve(data);

            }).error(function(data) {
                deferred.reject(data.error);
            });
            return deferred.promise;
        },
        getprofile: function($scope) {

            console.log('before get');

            $http.get('/profile',{params:{username:$scope.user.username, ssn:$scope.user.ssn
            }}).success(function(data) {
                console.log('return get data');console.log(data);

                console.log('in get profile before return ');console.log(data);
                $scope.ssn=data.ssn;
                $scope.name=data.name;
                $scope.mobilephone=data.mobilephone;
                $scope.idcard=data.idcard;
                $scope.address=data.address;
                $scope.sex=data.sex;
            }).error(function(data) {
            });

        },
        checkprofile: function(user,ssn,name,idcard,$scope) {
            var deferred = $q.defer();
            console.log('before check');

            $http.post('/checkprofile',{username:user.username, ssn:ssn,name:name,idcard:idcard
            }).success(function(data) {
                console.log('return get data');

                console.log('in get profile before return ');
                deferred.resolve(data);
            }).error(function(data) {
                deferred.reject(data.error);
            });
            return deferred.promise;
        }

    };

});




