
 // Created by qzli on 15/4/11.

var passport=require('passport'),
    LocalStrategy=require('passport-local').Strategy,
   User = require('../../app/models/user.server.model');


     module.export=function(){
    passport.use(new LocalStrategy(function(username,password,done){

        console.log('local s');
        var a="username,password";
        var condition={name:"username",value:username};
        var tablename="user";
        User.get(a,tablename,condition,function(err,user){
            if (err){
                return done(err);
            }
            if (!user){
                return done(null,false,{
                    message: 'Unknown user'
                });
            }
            if (!User.authenticate(user,password)){
                return done(null,false,{
                    message: 'invalid password'
                });
            }
            return done(null,user);
        });
    }));
};
