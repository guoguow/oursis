var User = require('../../app/models/user.server.model'),
    passport = require('passport'),
    crypto=require('crypto');

//考虑职工保险和居民保险
exports.getsistype=function(req,res,next) {
    console.log('goto get sistype');
    console.log(req.body);

    var ssn = req.body.ssn;
    var a="aae140";
    var condition={name:"aac001",value:ssn};
    var tablename="si3.ac02";
    User.gete(a,tablename,condition, function (err, user) {
        if (err) {
            console.log('something wrong');
            return next(err);
        }
        console.log('return get sistype');
        console.log(user);
        return res.json(user);
    })
};
/*
 exports.getsistype1=function(req,res,next) {
 console.log('goto get sistype');
 console.log(req.body);

//change to real database guoguow0908
    var ssn = req.body.ssn;
    var tablename2="si3.ac60";
    var a="sign,kind,link,link1,link2";
    var condition={name:"sign",value:1};
    var tablename="sistype";
    User.gettype(a,tablename,condition,tablename2,ssn, function (err, user) {
    if (err) {
     console.log('something wrong');
     return next(err);
  }
      console.log('return get sistype');
      console.log(user);
     return res.json(user);
 })
 };

exports.getsistype2=function(req,res,next) {
    console.log('goto get sistype');
    console.log(req.body);
//change to real database guoguow0908
    var ssn = req.body.ssn;
    var tablename2="si3.ac61";

        var a="sign,kind";
        var condition={name:"sign",value:2};
        var tablename="sistype";
        User.gettype(a,tablename,condition,tablename2,ssn, function (err, user) {
            if (err) {
                console.log('something wrong');
                return next(err);
            }
            console.log('return get sistype');
            console.log(user);
            return res.json(user);

        })

};

exports.getsistype3=function(req,res,next) {
    console.log('goto get sistype');
    console.log(req.body);
//change to real database guoguow0908
    var ssn = req.body.ssn;

    var tablename2="si3.ac62";
        var a="sign,kind";
        var condition={name:"sign",value:3};
        var tablename="sistype";
        User.gettype(a,tablename,condition,tablename2,ssn, function (err, user) {
            if (err) {
                console.log('something wrong');
                return next(err);
            }
            console.log('return get sistype');
            console.log(user);
            return res.json(user);


    })
};

exports.getsistype4=function(req,res,next) {
    console.log('goto get sistype');
    console.log(req.body);
//change to real database guoguow0908
    var ssn = req.body.ssn;

    var tablename2="si3.ac63";

        var a="sign,kind";
        var condition={name:"sign",value:4};
        var tablename="sistype";
        User.gettype(a,tablename,condition, tablename2,ssn,function (err, user) {
            if (err) {
                console.log('something wrong');
                return next(err);
            }
            console.log('return get sistype');
            console.log(user);
            return res.json(user);


    })
};
exports.getsistype5=function(req,res,next) {
    console.log('goto get sistype');
    console.log(req.body);
//change to real database guoguow0908
    var ssn = req.body.ssn;

    var tablename2="si3.ac64";

        var a="sign,kind";
        var condition={name:"sign",value:5};
        var tablename="sistype";
        User.gettype(a,tablename,condition, tablename2,ssn,function (err, user) {
            if (err) {
                console.log('something wrong');
                return next(err);
            }
            console.log('return get sistype');
            console.log(user);
            return res.json(user);
    })
};
 */