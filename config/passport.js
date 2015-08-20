/**
 * Created by qzli on 15/4/11.
 */
var passport=require('passport'),
 User = require('../app/models/user.server.model');


module.exports=function(){

    passport.serializeUser(function(user,done){
        done(null,user.username);
    });

    passport.deserializeUser(function(username,done){
        var a="username,password";
        var condition={name:"username",value:username};
        var tablename="user";
        console.log(tablename);
        User.get(a,tablename,condition,function(err,user){
            done(err,user);
        });
    });
    require('./strategies/local.js');
}