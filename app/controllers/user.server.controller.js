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




 exports.getsistype1=function(req,res,next) {
 console.log('goto get sistype');
 console.log(req.body);

 var a="username";
 var condition={name:"username",value:req.body.username};
 var tablename="payHist1";
 User.get(a,tablename,condition, function (err, user) {
 if (!user) {
 message = 'Username not in payHist.'
 return res.json(403, {error: message});
 };
 if (err) {
 console.log('something wrong');
 return next(err);
 };
 var a="sign,kind";
 var condition={name:"sign",value:1};
 var tablename="sistype";
 User.gettype(a,tablename,condition, function (err, user) {
 if (err) {
 console.log('something wrong');
 return next(err);
 }
 console.log('return get sistype');
 console.log(user);
 return res.json(user);

 })
 })
 };
exports.getsistype2=function(req,res,next) {
    console.log('goto get sistype');
    console.log(req.body);

    var a="username";
    var condition={name:"username",value:req.body.username};
    var tablename="payHist2";
    User.get(a,tablename,condition, function (err, user) {
        if (!user) {
            message = 'Username not in payHist.'
            return res.json(403, {error: message});
        };
        if (err) {
            console.log('something wrong');
            return next(err);
        };
        var a="sign,kind";
        var condition={name:"sign",value:2};
        var tablename="sistype";
        User.gettype(a,tablename,condition, function (err, user) {
            if (err) {
                console.log('something wrong');
                return next(err);
            }
            console.log('return get sistype');
            console.log(user);
            return res.json(user);

        })
    })
};
exports.getsistype3=function(req,res,next) {
    console.log('goto get sistype');
    console.log(req.body);

    var a="username";
    var condition={name:"username",value:req.body.username};
    var tablename="payHist3";
    User.get(a,tablename,condition, function (err, user) {
        if (!user) {
            message = 'Username not in payHist.'
            return res.json(403, {error: message});
        };
        if (err) {
            console.log('something wrong');
            return next(err);
        };
        var a="sign,kind";
        var condition={name:"sign",value:3};
        var tablename="sistype";
        User.gettype(a,tablename,condition, function (err, user) {
            if (err) {
                console.log('something wrong');
                return next(err);
            }
            console.log('return get sistype');
            console.log(user);
            return res.json(user);

        })
    })
};

