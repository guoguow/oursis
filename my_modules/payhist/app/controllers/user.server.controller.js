var User = require('../../app/models/user.server.model'),
    passport = require('passport'),
crypto=require('crypto');


exports.pay=function(req,res,next){
    console.log('goto get payhist detail data');

    console.log("see where++++++++");
    console.log(req.body);
    var lname=req.body.signforpay;
    var a="value1,value2,value3,value4";

    var condition={name:"sign",value:lname};
    var tablename="paydata";
    console.log(lname);
    pay.getpay(a,tablename,condition, function(err, paydata) {
        console.log('enter callback');
        console.log(paydata);
        if (err) {
            console.log('something wrong');
            return next(err);
        }
        if (!paydata) {
            console.log('sistype not exists');
            message='sistype does not exists'
            return res.json(404,{error:message});
            };
        console.log('sucess to get the payhist detail data');
        return res.json(paydata);

    });

    console.log('end of payhist choose');
};




