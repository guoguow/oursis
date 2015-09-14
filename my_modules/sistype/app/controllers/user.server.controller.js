var User = require('../../app/models/user.server.model'),
    passport = require('passport'),
    crypto=require('crypto');


 exports.getsistype1=function(req,res,next) {
 console.log('goto get sistype');
 console.log(req.body);

//change to real database guoguow0908
     var ssn = req.body.ssn;
     var a="aac001";
     var condition={name:"aac001",value:ssn};
     var tablename="si3.ac60";
// var a="username";
// var condition={name:"username",value:req.body.username};
 //var tablename="payHist1";
 User.get(a,tablename,condition, function (err, user) {
 if (!user) {
 message = 'Username not in payHist.'
 return res.json(403, {error: message});
 };
 if (err) {
 console.log('something wrong');
 return next(err);
 };
 var a="sign,kind,link,link1,link2";
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
//change to real database guoguow0908
    var ssn = req.body.ssn;
    var a="aac001";
    var condition={name:"aac001",value:ssn};
    var tablename="si3.ac61";
    //var a="username";
    //var condition={name:"username",value:req.body.username};
    //var tablename="payHist2";
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
//change to real database guoguow0908
    var ssn = req.body.ssn;
    var a="aac001";
    var condition={name:"aac001",value:ssn};
    var tablename="si3.ac62";
  //  var a="username";
   // var condition={name:"username",value:req.body.username};
  //  var tablename="payHist3";
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

exports.getsistype4=function(req,res,next) {
    console.log('goto get sistype');
    console.log(req.body);
//change to real database guoguow0908
    var ssn = req.body.ssn;
    var a="aac001";
    var condition={name:"aac001",value:ssn};
    var tablename="si3.ac63";
    //  var a="username";
    // var condition={name:"username",value:req.body.username};
    //  var tablename="payHist3";
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
        var condition={name:"sign",value:4};
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
exports.getsistype5=function(req,res,next) {
    console.log('goto get sistype');
    console.log(req.body);
//change to real database guoguow0908
    var ssn = req.body.ssn;
    var a="aac001";
    var condition={name:"aac001",value:ssn};
    var tablename="si3.ac64";
    //  var a="username";
    // var condition={name:"username",value:req.body.username};
    //  var tablename="payHist3";
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
        var condition={name:"sign",value:5};
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