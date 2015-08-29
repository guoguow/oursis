var Pay = require('../../app/models/user.server.model'),
    passport = require('passport'),
crypto=require('crypto');


exports.pay=function(req,res,next){
    console.log('goto get payhist  detail data for page');
    console.log(req.body);
    var a="sign,kind,value1,value2,value3,value4";
    var condition={name:"signforpay",value:1};
    var tablename="paydata";

    Pay.getpay(a,tablename,condition, function(err, data) {
        console.log('enter callback');
        console.log(data);
        if (err) {
            console.log('something wrong');
            return next(err);
        }
        if (!data) {
            console.log('sistype not exists 999999999999');
            message='sistype does not exists999999999'
            return res.json(404,{error:message});
            };
        console.log('sucess to get the payhist detail data99999999');
        return res.json(data);

    });

    console.log('end of payhist choose');
};


exports.reset=function(req,res,next){
    console.log('goto reset signforpay in paydata');
    console.log(req.body);

        Pay.update(function (error) {
            if (error) {
                return next(error);
                console.log(error);
            } else {
                console.log('reset ok!');
            }
        })
};

exports.setendow=function(req,res,next){
    console.log('goto set signforpay=1 for endowment in paydata');
    console.log(req.body);

    var signforpay="1";
    var sign="1";

    Pay.setsign(signforpay,sign, function (error) {
        if (error) {
            return next(error);
            console.log(error);
        } else {
            console.log('sucess to set endowment payforsign=1 ok!');
        }
    })
};
exports.sethealth=function(req,res,next){
    console.log('goto set signforpay=1 for health in paydata');
    console.log(req.body);

    var signforpay=1;
    var sign=2;
    Pay.setsign(signforpay,sign, function (error) {
        if (error) {
            return next(error);
            console.log(error);
        } else {
            console.log('sucess to set health payforsign=1 !');
        }
    })
};