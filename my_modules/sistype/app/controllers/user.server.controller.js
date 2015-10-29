var User = require('../../app/models/user.server.model'),
    passport = require('passport'),
    crypto=require('crypto');

//考虑职工保险和居民保险
exports.getsistype=function(req,res,next) {
    console.log('goto get sistype');

    var ssn = req.body.ssn;
    var a="aae140";
    var condition={name:"aac001",value:ssn};
    var tablename="ac02";
    User.gete(a,tablename,condition, function (err, user) {
        if (err) {
            console.log('something wrong');
            return next(err);
        }
        console.log('return get sistype');
        return res.json(user);
    })
};
