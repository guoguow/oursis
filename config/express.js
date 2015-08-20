/**
 * Created by qzli on 15/4/6.
 */
var config=require('./config'),
  express=require('express'),
  morgan=require('morgan'),
  compress=require('compression'),
  bodyParser=require('body-parser'),
  methodOverride=require('method-override'),
  session=require('express-session'),
  flash=require('connect-flash'),
  passport=require('passport');

module.exports=function(){
    var app=express();
    if (process.env.NODE_ENV=='development'){
        app.use(morgan('dev'));
    } else if (process.env.NDE_ENV=='production') {
        app.use(compress());
    }
    app.use(bodyParser.urlencoded({
        extended:true
    }));
    app.use(bodyParser.json());
    app.use(methodOverride());

    app.use(session({
        saveUninitialized: true,
        resave: true,
        secret: config.sessionSecret
    }));

    /*
     app.get('/', function(req, res) {
     res.redirect("../../pubic/index.html");
     });
     change by guogguow 0806
    app.get('/signin', function ($scope, $window, user) {
        console.log('UserManage ctrl thought get');
        if ($scope.UserManage && $scope.password) {
            user.UserManage($scope.UserManage, $scope.password)
                .then(function(data) {
                    console.log(data);
                    $window.location = '/';
                }, function(error) {
                    $scope.error = error;
                });
        }
        else {
            $scope.error = "用户名或密码不能为空";
        };
    }
    );
    app.get('/signin', function(req, res) {
        res.redirect("views/includes/navbar.html");
    });
*/

    app.use(flash());
    app.use(passport.initialize());
    app.use(passport.session());
    require('../app/routes/user.server.routes.js')(app);
    app.use(express.static('./'));

    return app;

}
