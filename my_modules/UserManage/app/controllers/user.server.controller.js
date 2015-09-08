var User = require('../../app/models/user.server.model'),
    passport = require('passport'),
crypto=require('crypto');


var getErrorMessage = function(err) {
    var message = '';
    if (err.code) {
        switch (err.code) {
            case 11000:
            case 11001:
                message = 'Username already exists';
                break;
            default:
                message = 'Something went wrong';
        }
    } else {
        for (var errName in err.errors) {
            if (err.errors[errName].message) message = err.errors[errName].message;
        }
    }
    return message;
};


exports.signout = function(req, res) {
    req.logout();
    res.json({});
};

exports.signin=function(req,res,next){
    console.log('goto signin');

    var lname=req.query.username;
    var lpassword=req.query.password;
    console.log(req.query);
    var a="username,password,ssn";
    var condition={name:"username",value:lname};
    var tablename="user";
    console.log(lname);
    User.get(a,tablename,condition, function(err, user) {
        console.log('enter callback');
        console.log(user);
        if (err) {
            console.log('something wrong');
            return next(err);
        }
        if (!user) {
            console.log('user not exists');
            message='User does not exists'
            return res.json(404,{error:message});
        };
        if (!User.authenticate(user,lpassword)) {
            console.log('incorrect password');
            console.log(lpassword);
            message='Incorrect Password'
            return res.json(403,{error:message});
        };
        console.log('pass the UserManage');
        return res.json(user);

    });



    console.log('end of sigin');
};

exports.signup = function(req, res, next) {
    if (!req.user) {
        console.log('!requser');
        console.log(req.body);
        var message = null;

        console.log('before save')
        var a="firstname,lastname,email,username,password";
        var condition={name:"username",value:req.body.username};
        var tablename="user";
        User.get(a,tablename,condition, function (err, user) {
            if (user) {
                message = 'Username already exists.'
                return res.json(403, {error: message});
            };
            if (err) {
                console.log('something wrong');
                return next(err);
            };

            var user = new User(req.body);
            user.provider = 'local';
            user.save(function(err) {
                if (err) {
                    var message = getErrorMessage(err);
                    console.log(message);
                    req.flash('error', message);
                    return res.json(403,{error:message});
                }
                req.login(user, function(err) {
                    console.log(user);
                    if (err) return next(err);
                    console.log('succ');
                    return res.json(user);
                });
            });
        });
    } else {
        console.log('exist user');
        console.log(req.user);
        return res.json(req.user);
    }
};
exports.getprofile=function(req,res,next) {
    console.log('goto get profile');

    console.log(req.query);
    var ssn = req.query.ssn;
    var a="aac001 ssn,AAC003 name,AAC002 idcard,AAC004 sex,AAE005 mobilephone,BAC005 address ";
    var condition={name:"aac001",value:ssn};
    var tablename="bi3.ac01";
    User.get(a,tablename,condition, function (err, data) {

        if (err) {
            console.log('something wrong');
            return next(err);
        }
        console.log('return profile');
        console.log(data);
        return res.json(data);

    })
};
/*  new chevk chagnge by lww 08-10 */
exports.checkprofile=function(req,res,next){
    var lname = req.body.username;
    var ssn = req.body.ssn;
    var mes=check(lname,ssn,function(err,message){

        console.log("++++++++++++++++"+message);
        if (!message) {
            var user = new User(req.body);
            user.update(function (error,data) {
                if (error) {
                    return next(error);
                    console.log("error"+error);
                } else {
                    console.log('update ok!'+data);

                    return res.json(data);
                }

            });

        } else {
            return res.json(403, {error: message});
        }
    });

};
var check=function(lname,ssn,callback){

    var message = null;
    var a = "ssn,username";
    var condition = {name: "ssn", value: ssn};
    var tablename = "user";
    console.log(lname);
    User.get(a,tablename,condition,function(err,user,fields) {
        if (err) {
            console.log('something wrong');
            throw (err);
        }
        ;
        if (user) {
            if (user.username != lname) {
                console.log('ssn has already been used');
                message = 'ssn has already been used';
                return  callback(err,message,fields);              }
        }

        ;
        var a="aac001 ssn";
        var condition={name:"aac001",value:ssn};
        var tablename="bi3.ac01";
        User.get(a, tablename, condition, function (err, user,fields) {

            if (err) {
                console.log('something wrong');
                throw (err);
            }
            ;
            if (!user) {
                message = 'ssn not exists';
                return  callback(err,message,fields);
            }
            return  callback(err,message,fields);
        });
    });

};
exports.saveprofile=function(req,res,next) {
    console.log('go into save profile');
    var lname = req.body.username;
    var ssn = req.body.ssn;
    var mes=check(lname,ssn,function(err,message){

        console.log("++++++++++++++++"+message);
        if (!message) {
            console.log(lname);
            var user = new User(req.body);
            user.update(function (error) {
                if (error) {
                    return next(error);
                    console.log(error);
                } else {
                    return res.json(user);
                    console.log('update ok!');
                }

            });
        } else {
            return res.json(403, {error: message});

        }
    });

};



